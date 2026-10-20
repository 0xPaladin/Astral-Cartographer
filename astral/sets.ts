/**
 * sets.ts — our culture sets, in FMG's shape.
 *
 * FMG's "Cultures set" option offers bundles of cultures, and each culture in
 * a bundle is bound to a name base (High Fantasy → Elven, Dwarven, Goblin…;
 * Dark Fantasy → German, English, Nordic…). A set is therefore the grouping
 * of name bases the user actually sees.
 *
 * We offer the same thing: three sets, each a bundle of cultures, each
 * culture bound to one of our bases.
 */
import { ASTRAL_NAME_SETS, findAstralSet, type AstralNameSet, type AstralPlacement } from "./content/naming/index.ts";
import type { FmgNames } from "./name-bases.ts";

/** The shape FMG's culture generator expects from a set's culture list. */
export interface FmgCultureSeed {
  /** the culture's display name */
  name: string;
  /** the index of the name base it takes its names from */
  base: number;
  /** the emblem shape it carries */
  shield: string;
  /** how eagerly the culture claims land (FMG's `odd`) */
  odd: number;
  /** scores a cell: the higher, the better a homeland it makes */
  sort: (i: number) => number;
}

/** The slice of FMG's packed graph the placement scorers read. */
interface FmgCells {
  h: number[];
  p: number[][];
}

/** FMG keeps the temperature on the grid graph, not on the packed cells. */
interface FmgGrid {
  cells?: { temp?: number[] };
}

declare global {
  interface Window {
    pack?: { cells: FmgCells };
  }
}

/**
 * Score a cell for a culture's homeland.
 *
 * FMG's own sets place their peoples with the map's climate — elves in the
 * warm south, dwarves in the high ground. We place ours the same way, with
 * the habits of a spacefaring people rather than a medieval one:
 *
 * - **temperate** — the garden worlds: mild, with some ground to stand on
 * - **harsh** — the cold and the high: ice, thin air, hard rock
 * - **remote** — the rim: far from everything, at the edge of the chart
 * - **any** — no preference beyond having a surface
 */
export function placementScore(placement: AstralPlacement, i: number): number {
  const cells = (globalThis as { pack?: { cells: FmgCells } }).pack?.cells;
  if (!cells) return 0;

  const height = cells.h[i] ?? 0;
  const grid = (globalThis as { grid?: FmgGrid }).grid;
  const temp = grid?.cells?.temp?.[i] ?? 0;

  switch (placement) {
    case "temperate":
      return (20 - Math.abs(temp - 12)) * 0.5 + height * 0.2;
    case "harsh":
      return (10 - temp) * 0.8 + height * 0.3;
    case "remote": {
      const point = cells.p[i];
      if (!point) return height * 0.05;
      // distance from the middle of the chart: the rim is where the map ends
      const graph = (globalThis as { options?: { map?: { graph?: { width?: number; height?: number } } } }).options?.map
        ?.graph;
      const width = graph?.width ?? 2000;
      const chartHeight = graph?.height ?? 2000;
      const dx = (point[0] ?? 0) - width / 2;
      const dy = (point[1] ?? 0) - chartHeight / 2;
      return Math.hypot(dx, dy) * 0.01 + height * 0.05;
    }
    case "any":
    default:
      return height * 0.3 + (10 - Math.abs(temp - 5)) * 0.2;
  }
}

/** The culture list of a set, ready for FMG's culture generator. */
export function culturesForSet(set: AstralNameSet, names: FmgNames): FmgCultureSeed[] {
  return set.cultures.map((culture) => ({
    name: culture.name,
    base: names.nameBases.findIndex((base) => base.name === culture.base),
    shield: culture.shield,
    odd: culture.odd ?? 1,
    sort: (i: number) => placementScore(culture.placement ?? "any", i),
  }));
}

/** Is this one of our set ids? */
export function isAstralSet(id: string): boolean {
  return findAstralSet(id) !== undefined;
}

/** Our sets, for the UI. */
export { ASTRAL_NAME_SETS, findAstralSet };
