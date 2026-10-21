/**
 * pack.ts — FMG's current map.
 *
 * FMG replaces its globals when a map is loaded, so the pack is read at the
 * moment it is used and never captured.
 */
import type { FmgPack } from "../fmg.ts";

/** FMG's current pack — read fresh, never captured. */
export function currentPack(): FmgPack | undefined {
  return globalThis.pack;
}
