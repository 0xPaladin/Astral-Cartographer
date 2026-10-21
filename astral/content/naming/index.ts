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
import { TREK_DERIVED_SPECS } from "./astral-trek-derived.ts";
import { astralTrek, trekContinental, trekCore, trekSynthetic, trekTerran } from "./astral-trek.ts";
import { buildStockBase, resolveCollisions } from "./derive.ts";
import { GRIMDARK_DERIVED_SPECS } from "./grimdark-derived.ts";
import { grimdark, grimdarkCore, grimdarkGothic, grimdarkMachine } from "./grimdark.ts";
import type { AstralNameBase, AstralNameSet } from "./types.ts";

/** Every set we ship, in the order they are offered. */
export const ASTRAL_NAME_SETS: AstralNameSet[] = [astralTrek, astralJammer, grimdark];

/**
 * The bases we ship, grouped by the set they belong to.
 *
 * The bases built from FMG's own data come first in the priority order
 * they are resolved in: a hand-written name is never dropped in favour of
 * a stock one, and the first base to claim a name keeps it.
 */
const SHIPPED_BASES: AstralNameBase[] = [
  // AstralTrek — written by hand
  trekCore,
  trekTerran,
  trekContinental,
  trekSynthetic,
  // AstralTrek — built from FMG's own name bases
  ...TREK_DERIVED_SPECS.map((spec) => buildStockBase(spec)),
  // AstralJammer
  jammerDeep,
  jammerEthereal,
  jammerStoneborn,
  jammerWild,
  // Grimdark — written by hand
  grimdarkCore,
  grimdarkGothic,
  grimdarkMachine,
  // Grimdark — built from FMG's own name bases
  ...GRIMDARK_DERIVED_SPECS.map((spec) => buildStockBase(spec)),
];

/**
 * Every base we ship, with the names two bases of the same set would have
 * shared taken out.
 *
 * Two systems with the same name on one map is a bug, and it happens when
 * two bases draw on the same pool: FMG's Elven and Dark Elven share 41
 * names. The first base to claim a name keeps it.
 *
 * The resolution is per set, because two sets may draw on the same stock
 * pool — both AstralTrek and Grimdark want FMG's "Elven" — and a map only
 * ever carries one set's peoples.
 */
export const ASTRAL_NAME_BASES: AstralNameBase[] = resolveCollisions(SHIPPED_BASES).bases;

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
