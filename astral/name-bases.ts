/**
 * name-bases.ts — our bases, in FMG's shape, and how they get registered.
 *
 * FMG keeps its name bases in `Names.nameBases`, a flat array. The stock
 * bases stay where they are; ours are **appended**, so a base index already
 * saved in a map still means the same base it meant before.
 *
 * Registration has to survive a map load. FMG replaces the whole array when
 * it reads a save (`Names.nameBases = …`), so a base that was only appended
 * at boot would vanish the moment the user opened a map. We therefore
 * replace the array with an accessor that re-merges our bases on every
 * assignment — the one seam that makes "our bases are always present" true
 * without patching FMG itself.
 */
import { ASTRAL_NAME_BASES, poolString, type AstralNameBase, type AstralNameGroup } from "./content/naming/index.ts";

/** The shape FMG keeps in `Names.nameBases`. */
export interface FmgNameBase {
  name: string;
  i: number;
  min: number;
  max: number;
  d: string;
  m: number;
  b: string;
}

/** The slice of FMG's `Names` generator this module needs. */
export interface FmgNames {
  nameBases: FmgNameBase[];
  getNameBases(): FmgNameBase[];
  /** names a state after its capital, with a government word in front */
  getState(name: string, culture?: number, base?: number): string;
  clearChains(): void;
  updateChain(index: number): void;
}

/**
 * The group FMG's own machinery generates from.
 *
 * FMG names a culture, its towns and its state from one pool, and on a star
 * map the town is the thing on the map: the star system. So the systems
 * group is the pool FMG sees; the polities group stays with the mod, which
 * names polities with it.
 */
export const PRIMARY_GROUP: AstralNameGroup = "systems";

/** Our base, as FMG would store it. */
export function toFmgNameBase(base: AstralNameBase, index: number): FmgNameBase {
  return {
    name: base.name,
    i: index,
    min: base.min,
    max: base.max,
    d: base.d,
    m: 0,
    b: poolString(base, PRIMARY_GROUP),
  };
}

export interface MergeResult {
  bases: FmgNameBase[];
  /** indices whose content changed, and whose Markov chain must be rebuilt */
  changed: number[];
}

/**
 * Merge our bases into a list of FMG bases.
 *
 * A base we already ship is **replaced in place**, keeping its index: a map
 * saved with our bases keeps the same indices, and a stale save never
 * overwrites the current content. A base we do not ship yet is appended.
 */
export function mergeNameBases(existing: FmgNameBase[], ours: AstralNameBase[] = ASTRAL_NAME_BASES): MergeResult {
  const bases = existing.map((base, index) => ({ ...base, i: index }));
  const changed: number[] = [];

  for (const base of ours) {
    const converted = toFmgNameBase(base, bases.length);
    const index = bases.findIndex((candidate) => candidate.name === base.name);

    if (index >= 0) {
      const current = bases[index]!;
      const same =
        current.b === converted.b &&
        current.min === converted.min &&
        current.max === converted.max &&
        current.d === converted.d;
      if (same) continue;
      bases[index] = { ...current, ...converted, i: index };
      changed.push(index);
    } else {
      bases.push(converted);
      changed.push(converted.i);
    }
  }

  return { bases, changed };
}

/**
 * Register our bases into FMG, now and for every later map load.
 *
 * Safe to call more than once: the merge is idempotent, and the accessor is
 * only installed when it is not already there.
 */
export function installNameBases(names: FmgNames): MergeResult {
  const descriptor = Object.getOwnPropertyDescriptor(names, "nameBases");

  if (!descriptor?.get) {
    let current: FmgNameBase[] = descriptor?.value ?? [];
    Object.defineProperty(names, "nameBases", {
      configurable: true,
      enumerable: true,
      get: () => current,
      set: (value: FmgNameBase[]) => {
        // A map load replaced the array: put our bases back, in place.
        current = mergeNameBases(Array.isArray(value) ? value : []).bases;
      },
    });
  }

  const merged = mergeNameBases(names.nameBases);
  names.nameBases = merged.bases;
  for (const index of merged.changed) names.updateChain(index);
  return merged;
}

/** The index of one of our bases in `Names.nameBases`, or -1. */
export function astralBaseIndex(names: FmgNames, name: string): number {
  return names.nameBases.findIndex((base) => base.name === name);
}
