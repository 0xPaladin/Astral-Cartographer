/**
 * watch.ts — a file watcher that works everywhere.
 *
 * `Bun.watch` is not available in every Bun build, and `fs.watch` with
 * `recursive: true` is. The mod source tree is small, so a recursive native
 * watch is enough — and a poll loop would be no less code and no less
 * latency.
 */
import { watch, type FSWatcher } from "node:fs";

/** Only these extensions can change the bundle. */
const WATCHED = [".ts", ".tsx", ".json"];

export function watchTree(root: string, onChange: (file: string) => void): FSWatcher {
  return watch(root, { recursive: true }, (_event, filename) => {
    const name = filename ? String(filename) : "";
    if (!name) {
      onChange(name);
      return;
    }
    if (WATCHED.some((extension) => name.endsWith(extension))) onChange(name);
  });
}
