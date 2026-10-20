/**
 * bundle.ts — astral/ → one browser ESM file.
 *
 * One file, deliberately: the fork injects exactly one script tag, and a
 * name base registry is small enough that splitting it buys nothing.
 */
import { existsSync, mkdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { bundlePath } from "./inject.ts";

/** <repo>/astral */
export const ASTRAL_ROOT = path.resolve(import.meta.dir, "..");
/** <repo> */
export const REPO_ROOT = path.resolve(ASTRAL_ROOT, "..");
/** Where the web build lives — also the committed, servable client. */
export const DIST_DIR = path.join(REPO_ROOT, "clients/fmg/dist");

const ENTRY = path.join(ASTRAL_ROOT, "entry.ts");

export interface BundleOptions {
  /** output directory; the bundle lands in <outdir>/astral/astral.js */
  outdir?: string;
  minify?: boolean;
  dev?: boolean;
}

export interface BundleResult {
  outfile: string;
  bytes: number;
  buildId: string;
  /** seconds */
  elapsedMs: number;
}

/**
 * A short id that changes whenever the source does. The dev page polls it
 * and reloads when it moves — a module boundary is a page reload, never a
 * hot swap.
 */
function buildIdFor(): string {
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

/** Bundle the mod into the dist directory. */
export async function bundleAstral(opts: BundleOptions = {}): Promise<BundleResult> {
  const started = Date.now();
  const outdir = opts.outdir ?? DIST_DIR;

  if (!existsSync(ENTRY)) throw new Error(`missing entry point: ${ENTRY}`);

  // Bun lays a single entrypoint out flat at the outdir root, so we build into
  // a scratch dir and move the file to where the tag expects it. The
  // destination comes from inject.ts — one source of truth for "where the
  // bundle lives", which the smoke check asserts against.
  const scratch = path.join(outdir, `.astral-build-${process.pid}`);
  rmSync(scratch, { recursive: true, force: true });

  const result = await Bun.build({
    entrypoints: [ENTRY],
    outdir: scratch,
    target: "browser",
    format: "esm",
    minify: opts.minify ?? false,
    sourcemap: opts.dev ? "inline" : "none",
  });

  if (!result.success) {
    rmSync(scratch, { recursive: true, force: true });
    const detail = result.logs.map((log) => String(log)).join("\n");
    throw new Error(`astral bundle failed:\n${detail}`);
  }

  const outfile = bundlePath(outdir);
  mkdirSync(path.dirname(outfile), { recursive: true });
  // Bun names the single entry after its source file; the destination name is
  // the contract (the tag points at it), so move rather than rely on it.
  renameSync(path.join(scratch, path.basename(ENTRY).replace(/\.ts$/, ".js")), outfile);
  rmSync(scratch, { recursive: true, force: true });

  const bytes = Bun.file(outfile).size;
  const buildId = buildIdFor();

  // The dev page watches this file; it is served alongside the bundle.
  // (Gitignored: it changes on every rebuild, and the bundle next to it is tracked.)
  writeFileSync(path.join(path.dirname(outfile), "build-id.txt"), `${buildId}\n`);

  return { outfile, bytes, buildId, elapsedMs: Date.now() - started };
}

export { bundlePath };
