/**
 * inject.ts — the one serve-time transform that makes a stock FMG build carry
 * the mod.
 *
 * A single module tag is appended to the built `index.html`. The tag is
 * **base-relative** (`./astral/astral.js`) on purpose: that one choice is
 * what makes a single build valid under our dev server (`base=/fmg/`), FMG's
 * own site, and Electron — no per-target edits.
 *
 * The transform is idempotent, so a rebuild over an already-injected build
 * is safe.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

/** Where the bundle lands inside the build output, relative to index.html. */
export const BUNDLE_RELATIVE_DIR = "astral";
export const BUNDLE_FILENAME = "astral.js";

/** Base-relative, so the same built output works under any `base`. */
export const MOD_TAG = `<script type="module" src="./${BUNDLE_RELATIVE_DIR}/${BUNDLE_FILENAME}"></script>`;

/** FMG's GA <script> tags + inline gtag() config. */
const GA_EXTERNAL = /<script async src="https:\/\/www\.googletagmanager\.com[^>]*><\/script>\s*/gi;
const GA_INLINE = /<script>\s*window\.dataLayer[\S\s]*?gtag\("config"[^;]*;\s*<\/script>\s*/i;

interface TransformResult {
  html: string;
  changed: boolean;
  notes: string[];
}

/**
 * Strip analytics + inject the module tag. Safe to run over an already
 * transformed document (returns `changed: false`).
 */
export function transformIndex(html: string): TransformResult {
  const notes: string[] = [];
  let out = html;

  if (GA_EXTERNAL.test(out) || GA_INLINE.test(out)) {
    out = out.replace(GA_EXTERNAL, "").replace(GA_INLINE, "");
    notes.push("stripped Google Analytics");
  }
  GA_EXTERNAL.lastIndex = 0;
  GA_INLINE.lastIndex = 0;

  if (out.includes(MOD_TAG)) {
    notes.push("module tag already present");
  } else if (out.includes(BUNDLE_FILENAME)) {
    notes.push("a different module tag is present — left alone");
  } else if (out.includes("</body>")) {
    out = out.replace("</body>", `${MOD_TAG}\n</body>`);
    notes.push("injected the Astral Cartographer module tag");
  } else {
    throw new Error("built index.html has no </body> to inject into");
  }

  return { html: out, changed: out !== html, notes };
}

/** Transform a built dist in place. Returns the notes, for build logging. */
export function injectIntoDist(distDir: string): string[] {
  const file = path.join(distDir, "index.html");
  if (!existsSync(file)) throw new Error(`no build at ${file} — build FMG first`);
  const before = readFileSync(file, "utf8");
  const { html, notes } = transformIndex(before);
  if (html !== before) writeFileSync(file, html);
  return notes;
}

/** Absolute path the bundle must be written to, for a given build output dir. */
export function bundlePath(distDir: string): string {
  return path.join(distDir, BUNDLE_RELATIVE_DIR, BUNDLE_FILENAME);
}
