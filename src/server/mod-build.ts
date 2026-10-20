/**
 * mod-build.ts — keep the mod bundle fresh while the dev server runs.
 *
 * The dev server serves the *committed* FMG build, and the mod bundle sits
 * next to it inside the same dist directory. Rebuilding the bundle on change
 * means `bun dev` is the only command a developer needs: edit a file under
 * `astral/`, the bundle is rebuilt, and the page reloads itself (the mod
 * asks for it — see astral/dev/reload.ts).
 */
import path from "node:path";
import { bundleAstral, ASTRAL_ROOT } from "../../astral/build/bundle.ts";
import { watchTree } from "../../astral/build/watch.ts";

export interface ModBuild {
  close(): void;
}

export function startModBuild(): ModBuild {
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
      // Built exactly like the release build, so the committed bundle in
      // clients/fmg/dist stays reproducible and the working tree stays clean.
      const result = await bundleAstral();
      console.log(`mod: bundled ${path.relative(process.cwd(), result.outfile)} (${Math.round(result.bytes / 1024)} KB)`);
    } catch (error) {
      console.error(`mod: bundle failed — ${(error as Error).message}`);
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

  const watcher = watchTree(ASTRAL_ROOT, () => schedule());

  void run();

  return {
    close: () => {
      if (timer) clearTimeout(timer);
      watcher.close();
    },
  };
}
