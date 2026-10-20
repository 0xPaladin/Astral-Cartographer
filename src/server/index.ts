/**
 * Dev harness server: a thin Bun HTTP server.
 *
 *   bun install && bun dev   →  http://localhost:3445/fmg/
 *
 * It exists to put a browser in front of the vendored FMG build. The mod
 * itself runs *inside* the page (one injected module), so the server has no
 * product API: it serves the client, redirects the bare root at it, and
 * exposes an optional pinned world save for `?maplink=`.
 *
 * Routes:
 *   /                 → 302 to /fmg/
 *   /fmg/*            → the vendored FMG client (see fmg.ts)
 *   /maps/world.map   → an optional pinned FMG save, for `?maplink=`
 *   /health           → liveness
 */
import { existsSync, openSync, readSync, closeSync } from "node:fs";
import path from "node:path";
import { serveFmg } from "./fmg.ts";
import { startModBuild } from "./mod-build.ts";

const PORT = Number(process.env.PORT ?? 3445);

/** The optional pinned world save: an FMG `.map` the developer dropped in. */
export const WORLD_SAVE = path.resolve(import.meta.dir, "../../maps/source/world.map");

/** Where the `?maplink=` pin fetches the world save from. */
export const WORLD_MAPLINK = "/maps/world.map";

/** The page a bare address lands on. */
export const FMG_BOOT_PATH = `/fmg/`;

/**
 * Format sniff for the maplink target: FMG saves are either gzip (magic
 * 1f 8b) or plain text whose first line is `version|license|date|…`.
 */
function sniffWorldSave(head: Uint8Array): "gzip" | "save" | "invalid" {
  if (head.length >= 2 && head[0] === 0x1f && head[1] === 0x8b) return "gzip";
  const text = new TextDecoder().decode(head.slice(0, 64));
  return /^\d+\.\d+\.\d+\|/.test(text) ? "save" : "invalid";
}

/** Serve the pinned world save, or a loud, actionable error. */
function serveWorldSave(): Response {
  if (!existsSync(WORLD_SAVE)) {
    return Response.json(
      {
        error:
          "No world save found at maps/source/world.map — save your world from FMG (Save → .map) and copy it there, then reload.",
      },
      { status: 404 },
    );
  }
  let head: Uint8Array;
  try {
    const fd = openSync(WORLD_SAVE, "r");
    head = new Uint8Array(64);
    readSync(fd, head, 0, 64, 0);
    closeSync(fd);
  } catch {
    return Response.json({ error: "maps/source/world.map could not be read" }, { status: 404 });
  }
  const kind = sniffWorldSave(head);
  if (kind === "invalid") {
    return Response.json(
      {
        error:
          "maps/source/world.map is not an FMG save (expected 'version|…' first line or gzip). Re-export from FMG via Save → .map.",
      },
      { status: 415 },
    );
  }
  return new Response(Bun.file(WORLD_SAVE), {
    headers: { "Content-Type": "application/octet-stream", "Cache-Control": "no-cache" },
  });
}

/** 302 to the boot page, so any address on this host lands on the client. */
function fmgBootRedirect(): Response {
  return new Response(null, {
    status: 302,
    headers: { Location: FMG_BOOT_PATH, "Cache-Control": "no-cache" },
  });
}

// The mod bundle is rebuilt on change, so `bun dev` is the only command
// needed: edit a file under astral/ and the page reloads itself.
startModBuild();

const server = Bun.serve({
  port: PORT,
  fetch: (req) => {
    const { pathname } = new URL(req.url);

    if (req.method === "GET" && pathname === "/health") {
      return Response.json({ ok: true, world: existsSync(WORLD_SAVE) });
    }

    if (req.method === "GET" && pathname === WORLD_MAPLINK) return serveWorldSave();

    // The FMG client hosting.
    const fmgResponse = serveFmg(req, pathname);
    if (fmgResponse) return fmgResponse;

    // The host root is the client, not a landing page.
    if (req.method === "GET" && pathname === "/") return fmgBootRedirect();

    // Any other bare address lands on the same page; extensioned paths keep
    // their 404 so broken assets stay debuggable.
    if (req.method === "GET" && !/\.[a-zA-Z0-9]+$/.test(pathname)) return fmgBootRedirect();

    return Response.json({ error: `No route: ${req.method} ${pathname}` }, { status: 404 });
  },
});

console.log(`Astral Cartographer dev server listening on: http://localhost:${server.port}${FMG_BOOT_PATH}`);
