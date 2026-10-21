/**
 * mapping/index.ts — FMG's world, read as a star map.
 *
 * Two mappings, both of them small:
 *
 * - **states and provinces** are polities and sectors. A state's word comes
 *   from the `polities` group of its own culture's base, so a Grimdark
 *   polity is called a "Compact" or a "Hegemony" and a Trek one a
 *   "Federation" or a "Directorate". A province becomes a sector.
 * - **burgs** are star systems: a class from the population, traits from the
 *   installations (see systems.ts).
 *
 * The names are applied where FMG names them — after the states and the
 * provinces — so a map the user has edited keeps the names it has, and only
 * a fresh generation gets the new ones.
 */
import { ASTRAL_NAME_BASES } from "../content/naming/index.ts";
import type { FmgNames } from "../fmg.ts";
import { currentPack } from "./pack.ts";
import { polityWordFor, sectorWordFor } from "./polities.ts";

export { currentPack };
export * from "./systems.ts";
export * from "./polities.ts";

/** Is this base one of ours? */
export function isAstralBase(names: FmgNames, baseId: number | undefined): boolean {
  if (baseId === undefined) return false;
  const name = names.nameBases[baseId]?.name;
  return ASTRAL_NAME_BASES.some((base) => base.name === name);
}

/**
 * Call every polity a polity, and every province a sector.
 *
 * A state whose culture names from a stock base keeps FMG's own word: the
 * mod renames the sci-fi world, not the fantasy one.
 *
 * @param stateIds the states to name, or all of them
 */
export function applyPolityNames(names: FmgNames, stateIds?: number[]): number {
  const pack = currentPack();
  const states = globalThis.States;
  if (!pack || !states) return 0;

  let renamed = 0;
  for (const state of pack.states) {
    if (!state.i || state.removed || !state.name) continue;
    if (stateIds && !stateIds.includes(state.i)) continue;
    const word = polityWordFor(names, state.culture ?? 0, state.name);
    if (!word) continue;
    states.setForm(state.i, word);
    renamed++;
  }
  return renamed;
}

/** Call every province a sector. */
export function applySectorNames(): number {
  const pack = currentPack();
  const provinces = globalThis.Provinces;
  if (!pack || !provinces) return 0;

  let renamed = 0;
  for (const province of pack.provinces) {
    if (!province.i || province.removed || !province.name) continue;
    const word = sectorWordFor(province.name);
    if (!word) continue;
    provinces.setForm(province.i, word);
    renamed++;
  }
  return renamed;
}

/**
 * Install the mapping.
 *
 * Three seams:
 *
 * 1. `Names.getState` — FMG's state names take a fantasy suffix ("Gantia"
 *    from "Gant"). Ours do not: a polity is named by its capital's system.
 * 2. the states generator — after it, every polity gets its word.
 * 3. the provinces generator — after it, every province gets a sector.
 *
 * The mapping does not redraw the labels itself. FMG draws them when the
 * generation is over, and a redraw in the middle of the pipeline asks the
 * label renderer for a map that does not exist yet.
 */
export function installMapping(names: FmgNames): void {
  // 1. no fantasy suffix for a state of one of our bases
  const originalGetState = names.getState.bind(names);
  names.getState = (name: string, culture?: number, base?: number): string => {
    const pack = currentPack();
    const resolved = base ?? pack?.cultures?.[culture ?? 0]?.base;
    if (isAstralBase(names, resolved)) return name;
    return originalGetState(name, culture, base);
  };

  // 2. the polities.
  //    FMG gives a state its government word in `defineStateForms`, which the
  //    generation pipeline runs as a step of its own — after the states are
  //    made. That is the seam: naming the polities after it means our words
  //    are the last word.
  const states = globalThis.States;
  if (states) {
    const originalDefineForms = states.defineStateForms?.bind(states);
    if (originalDefineForms) {
      states.defineStateForms = (list?: number[] | null) => {
        const result = originalDefineForms(list);
        applyPolityNames(names, list ?? undefined);
        return result;
      };
    }
  }

  // 3. the sectors
  const provinces = globalThis.Provinces;
  if (provinces) {
    const originalGenerate = provinces.regenerate?.bind(provinces);
    if (originalGenerate) {
      provinces.regenerate = (regenerateNames?: boolean) => {
        const result = originalGenerate(regenerateNames);
        applySectorNames();
        return result;
      };
    }
  }
}
