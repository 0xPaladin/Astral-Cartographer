/**
 * The naming content: three sets, and the bases under them.
 *
 *   AstralTrek    — modern and invented peoples
 *   AstralJammer  — the high-fantasy bases, reskinned
 *   Grimdark      — the dark-fantasy bases, reskinned, and new ones
 *
 * A set is what the user picks (FMG's "Cultures set"); a base is a
 * vocabulary, and each culture in a set is bound to one.
 */
import { astralJammer, jammerDeep, jammerEthereal, jammerStoneborn, jammerWild } from "./astral-jammer.ts";
import { astralTrek, trekContinental, trekCore, trekSynthetic, trekTerran } from "./astral-trek.ts";
import { grimdark, grimdarkCore, grimdarkGothic, grimdarkIron, grimdarkMachine } from "./grimdark.ts";
import type { AstralNameBase, AstralNameSet } from "./types.ts";

/** Every set we ship, in the order they are offered. */
export const ASTRAL_NAME_SETS: AstralNameSet[] = [astralTrek, astralJammer, grimdark];

/** Every base we ship, grouped by the set it belongs to. */
export const ASTRAL_NAME_BASES: AstralNameBase[] = [
  // AstralTrek
  trekCore,
  trekTerran,
  trekContinental,
  trekSynthetic,
  // AstralJammer
  jammerDeep,
  jammerEthereal,
  jammerStoneborn,
  jammerWild,
  // Grimdark
  grimdarkCore,
  grimdarkGothic,
  grimdarkIron,
  grimdarkMachine,
];

export { astralJammer, astralTrek, grimdark };
export * from "./types.ts";

/** The base with this name, if we ship one. */
export function findAstralBase(name: string): AstralNameBase | undefined {
  return ASTRAL_NAME_BASES.find((base) => base.name === name);
}

/** The set with this name, if we ship one. */
export function findAstralSet(name: string): AstralNameSet | undefined {
  return ASTRAL_NAME_SETS.find((set) => set.name === name);
}

/** The bases of one set, in the order the set lists them. */
export function basesOfSet(set: AstralNameSet): AstralNameBase[] {
  return ASTRAL_NAME_BASES.filter((base) => base.set === set.name);
}
