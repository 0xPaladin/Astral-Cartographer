/**
 * polities.ts — FMG's states and provinces, read as polities and sectors.
 *
 * FMG names a state after its capital, with a government word in front
 * ("Kingdom of Gant") and a province after one of its towns ("Gant
 * County"). A star map wants the same shape with different words:
 *
 *   state    → "Compact of Gant"    the word comes from the `polities`
 *                                     group of the culture's own base
 *   province → "Gant Sector"        a sector of the polity
 *
 * The words are picked by a hash of the name, so a state keeps its word
 * across regenerations instead of shuffling on every click.
 */
import { ASTRAL_NAME_BASES, poolOf, type AstralNameBase } from "../content/naming/index.ts";
import type { FmgNames } from "../name-bases.ts";

/** The words a sector can be called. */
export const SECTOR_WORDS = [
  "Sector",
  "Reach",
  "Cluster",
  "Belt",
  "Orbit",
  "Shelf",
  "Quadrant",
  "Frontier",
];

/**
 * A stable pick from a list, seeded by a string.
 *
 * The same name always gets the same word: a map that reshuffles its
 * polities every time it is regenerated is a map nobody can read.
 */
export function pickFor(words: string[], seed: string): string | undefined {
  if (!words.length) return undefined;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return words[hash % words.length];
}

/** The base a culture names things from, if it is one of ours. */
export function polityBase(names: FmgNames, culture: number): AstralNameBase | undefined {
  const pack = (globalThis as { pack?: { cultures?: { base?: number }[] } }).pack;
  const baseId = pack?.cultures?.[culture]?.base;
  if (baseId === undefined) return undefined;
  const name = names.nameBases[baseId]?.name;
  return ASTRAL_NAME_BASES.find((base) => base.name === name);
}

/** The word a state should be called by, e.g. "Compact". */
export function polityWordFor(names: FmgNames, culture: number, stateName: string): string | undefined {
  const base = polityBase(names, culture);
  if (!base) return undefined;
  // A word that carries its own "of" would read twice: "Church of the Ashen
  // Star of Starvalere". Those words stay in the group for a polity that is
  // named on its own, but they are not the word in front of a state's name.
  const words = poolOf(base, "polities").filter((word) => !/\bof\b/i.test(word));
  return pickFor(words, stateName);
}

/** The word a province should be called by, e.g. "Sector". */
export function sectorWordFor(provinceName: string): string | undefined {
  return pickFor(SECTOR_WORDS, provinceName);
}
