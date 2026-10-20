/**
 * fmg.ts — serves the vendored FMG build (the client this mod lives inside).
 *
 * The build under `clients/fmg/dist` is committed, so `bun dev` needs no FMG
 * checkout and no build step. It is the *patched* FMG: the mod seams
 * (`Layers.register`, the `.map` mod slot, the `MAP_COMMANDS` / `LAYER_TOGGLES`
 * registries) are already baked into the shipped JavaScript, so the mod can
 * register layers and persist its own data inside a saved `.map` without
 * touching FMG's source.
 *
 * This file serves an already-transformed document and adds only the two
 * things that are genuinely *server* concerns, never part of the shipped mod:
 *
 *   1. a tiny classic script normalizing a relative ?maplink= to an absolute
 *      URL (FMG's MAP_LINK_PATTERN only accepts absolute http(s) URLs),
 *      running before any module code
 *   2. the dev flag, so a future bundle can poll for rebuilds
 *
 * It also strips FMG's Google Analytics beacons (we host privately).
 */
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

/**
 * The FMG client build. DEFAULT: the vendored prebuilt dist committed in this
 * repo (clients/fmg/dist) — nobody builds FMG to use this project. OVERRIDE:
 * set FMG_DIST to a fresh build (maintainer flow: check out FMG 1.154.x →
 * `npx vite build --base=/fmg/` → copy dist here). See README §Upgrading FMG.
 */
const DEFAULT_DIST = path.resolve(import.meta.dir, "../../clients/fmg/dist");
const FMG_DIST = process.env.FMG_DIST ? path.resolve(process.env.FMG_DIST) : DEFAULT_DIST;

/** Where the mod bundle is injected, relative to the built index.html. */
export const BUNDLE_DIR = "astral";
export const BUNDLE_FILE = "astral.js";

const CONTENT_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".webmanifest": "application/manifest+json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

/** Classic, synchronous — rewrites the URL before FMG's modules evaluate. */
const MAPLINK_NORMALIZER = `<script>(function(){try{var p=new URLSearchParams(location.search);var m=p.get("maplink");if(m&&m.charAt(0)==="/"){p.set("maplink",location.origin+m);history.replaceState(null,"",location.pathname+"?"+p.toString()+location.hash)}}catch(e){}})()</script>`;

/**
 * Dev-only: tells the mod bundle to poll for rebuilt bundles. Never present in
 * a real build — the flag is added here, by the dev server, not by the build.
 */
const DEV_FLAG = `<script>window.__ASTRAL_DEV__=true</script>`;

/** The GA <script> tags + inline gtag() config, stripped at serve time. */
const GA_EXTERNAL = /<script async src="https:\/\/www\.googletagmanager\.com[^>]*><\/script>\s*/gi;
const GA_INLINE = /<script>\s*window\.dataLayer[\S\s]*?gtag\("config"[^;]*;\s*<\/script>\s*/i;

/**
 * Build the transformed index for a dist dir; null when it isn't built.
 * Exported for tests — the only serve-time transforms live here.
 */
export function buildTransformedIndex(distDir: string): string | null {
  const file = path.join(distDir, "index.html");
  if (!existsSync(file)) return null;
  let html = readFileSync(file, "utf8");
  html = html.replace(GA_EXTERNAL, "").replace(GA_INLINE, "");
  html = html.replace("</head>", `${MAPLINK_NORMALIZER}\n${DEV_FLAG}\n</head>`);
  return html;
}

/**
 * Transformed index, cached by mtime so a fresh `vite build` is picked up
 * without a server restart; null while the dist doesn't exist yet.
 */
let indexCache: { mtimeMs: number; html: string } | null = null;
let warnedMissing = false;

function transformedIndex(): string | null {
  const file = path.join(FMG_DIST, "index.html");
  let mtimeMs: number;
  try {
    mtimeMs = statSync(file).mtimeMs;
  } catch {
    if (!warnedMissing) {
      warnedMissing = true;
      console.warn(`fmg: no build at ${FMG_DIST} — serving the setup guide (build FMG to enable the client)`);
    }
    return null;
  }
  if (indexCache && indexCache.mtimeMs === mtimeMs) return indexCache.html;
  const html = buildTransformedIndex(FMG_DIST);
  if (html == null) return null;
  indexCache = { mtimeMs, html };
  console.log("fmg: serving transformed index.html (dev flag + maplink normalizer added, analytics stripped)");
  return html;
}

/** The 503 page shown if the vendored build is somehow missing (overridable via FMG_DIST). */
const SETUP_GUIDE = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Astral Cartographer — FMG client missing</title></head>
<body style="font:15px/1.6 system-ui,sans-serif;max-width:44em;margin:8vh auto;padding:0 20px;color:#c9d6e4;background:#070b14">
<h1 style="color:#7fd4ff">The vendored FMG build is missing</h1>
<p>The dev server serves a <strong>prebuilt copy</strong> of Azgaar's Fantasy Map
Generator from <code>clients/fmg/dist/</code> — normally committed with the repo, so
no build step is needed. This folder is absent here.</p>
<p>To fix it, copy a build from the OpenConquest repo
(<code>OpenConquest/clients/fmg/dist/</code>), or build FMG yourself: check out
Fantasy Map Generator v1.154.x and run
<code>npm install &amp;&amp; npx vite build --base=/fmg/</code>, then copy the resulting
<code>dist/</code> to <code>clients/fmg/dist/</code>.
For a one-off run against a build elsewhere, set <code>FMG_DIST=/path/to/dist</code>.</p>
</body>
</html>`;

function setupGuideResponse(): Response {
  return new Response(SETUP_GUIDE, {
    status: 503,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" },
  });
}

function fileResponse(filePath: string): Response | null {
  try {
    if (!statSync(filePath).isFile()) return null;
  } catch {
    return null;
  }
  const type = CONTENT_TYPES[path.extname(filePath).toLowerCase()] ?? "application/octet-stream";
  return new Response(Bun.file(filePath), {
    headers: { "Content-Type": type, "Cache-Control": "no-cache" },
  });
}

/**
 * @returns a Response for /fmg/* requests, or null when this isn't one.
 * /fmg and /fmg/ serve the transformed index (a 503 setup guide until FMG
 * is built); other paths serve dist files.
 */
export function serveFmg(req: Request, pathname: string): Response | null {
  if (req.method !== "GET") return null;
  if (pathname === "/fmg" || pathname === "/fmg/" || pathname === "/fmg/index.html") {
    const html = transformedIndex();
    return html != null
      ? new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" } })
      : setupGuideResponse();
  }
  if (!pathname.startsWith("/fmg/")) return null;
  const rel = decodeURIComponent(pathname.slice("/fmg/".length));
  if (rel.includes("..")) return new Response("bad path", { status: 400 });
  const filePath = path.join(FMG_DIST, rel);
  if (!filePath.startsWith(FMG_DIST + path.sep)) return new Response("bad path", { status: 400 });
  if (!existsSync(filePath)) return new Response("not found", { status: 404 });
  return fileResponse(filePath);
}
