#!/usr/bin/env bun
/**
 * build.ts — build the mod into the vendored FMG client.
 *
 *   bun run build              bundle the mod, inject the module tag
 *   bun run build -- --watch   same, then rebundle on every change under astral/
 *   bun run build -- --minify  minified bundle
 *
 * The pipeline is two steps and no more:
 *   1. bundle astral/ → clients/fmg/dist/astral/astral.js
 *   2. inject one <script type="module"> tag into the built index.html
 *
 * The FMG client itself is **not** built here: the vendored build under
 * clients/fmg/dist is committed, and only the mod on top of it changes.
 */
import { existsSync } from "node:fs";
import path from "node:path";
import { bundleAstral, ASTRAL_ROOT, DIST_DIR } from "./bundle.ts";
import { injectIntoDist } from "./inject.ts";
import { watchTree } from "./watch.ts";

interface Args {
  watch: boolean;
  minify: boolean;
}

function parseArgs(argv: string[]): Args {
  return { watch: argv.includes("--watch"), minify: argv.includes("--minify") };
}

const step = (message: string): void => console.log(`\n\x1b[1m▸ ${message}\x1b[0m`);
const ok = (message: string): void => console.log(`  \x1b[32m✓\x1b[0m ${message}`);

async function buildOnce(args: Args): Promise<void> {
  const result = await bundleAstral({ minify: args.minify });
  ok(`bundle → ${path.relative(process.cwd(), result.outfile)} (${Math.round(result.bytes / 1024)} KB, ${result.elapsedMs} ms)`);

  if (existsSync(path.join(DIST_DIR, "index.html"))) {
    const notes = injectIntoDist(DIST_DIR);
    for (const note of notes) ok(note);
  } else {
    console.warn(`  no built index.html at ${DIST_DIR} — skipping the module tag injection`);
  }
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));

  step(`Astral Cartographer — building the mod into ${path.relative(process.cwd(), DIST_DIR)}`);
  await buildOnce(args);

  if (!args.watch) {
    ok("done");
    return;
  }

  step("watching astral/ for changes");
  const watcher = watchTree(ASTRAL_ROOT, () => schedule());

  let timer: ReturnType<typeof setTimeout> | null = null;
  let building = false;
  let queued = false;

  const run = async (): Promise<void> => {
    if (building) {
      queued = true;
      return;
    }
    building = true;
    try {
      await buildOnce(args);
    } catch (error) {
      console.error(`  \x1b[31m✗\x1b[0m ${(error as Error).message}`);
    } finally {
      building = false;
      if (queued) {
        queued = false;
        void run();
      }
    }
  };

  const schedule = (): void => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => void run(), 120);
  };

  watchTree(ASTRAL_ROOT, () => schedule());
  ok("watching — the dev page reloads itself when the bundle changes");
}

await main();
