/**
 * derive.ts — building our bases out of FMG's.
 *
 * Azgaar's Fantasy Map Generator ships 43 name bases: the real-world ones
 * (English, German, Chinese, Arabic, Nigerian, Vietnamese, Karnataka) and
 * the fantasy ones (Elven, Dark Elven, Orc, Goblin, Arachnid). They are
 * data, not code — a flat pool of sample names per base, and a Markov chain
 * built from it.
 *
 * We do not write those pools by hand. We take FMG's, and add what FMG has
 * no place for: the **polity words**. A base of ours is therefore a stock
 * base plus the words one people call their institutions by.
 *
 * The stock pools live in `stock.ts`, vendored from FMG's own source, so
 * the two can never drift apart silently.
 */
import { findStockBase } from "./stock.ts";
import type { AstralNameBase } from "./types.ts";

/** How a base of ours is built from a base of FMG's. */
export interface StockBaseSpec {
  /** the name of the base of ours */
  name: string;
  /** the set it belongs to */
  set: string;
  /** the FMG base it is built from */
  from: string;
  /** the words the people call their polities by */
  polities: string[];
  /** names of our own, to add to the pool */
  systems?: string[];
}

/**
 * Build a base of ours from a base of FMG's.
 *
 * The pool is FMG's own, unchanged: the vocabulary of a people is not
 * ours to invent. What we add is the polity words, and the occasional name
 * of our own.
 */
export function buildStockBase(spec: StockBaseSpec): AstralNameBase {
  const stock = findStockBase(spec.from);
  if (!stock) throw new Error(`FMG has no name base called "${spec.from}"`);

  const systems = [...stock.b.split(","), ...(spec.systems ?? [])].map((name) => name.trim()).filter(Boolean);

  return {
    name: spec.name,
    set: spec.set,
    stock: spec.from,
    min: stock.min,
    max: stock.max,
    d: stock.d,
    groups: {
      systems: [...new Set(systems)],
      polities: [...new Set(spec.polities)],
    },
  };
}

/** The result of resolving the names two bases would otherwise share. */
export interface ResolvedBases {
  /** the bases, with the shared names taken out of the later ones */
  bases: AstralNameBase[];
  /** the names that were taken out, and from which base */
  dropped: { base: string; name: string }[];
}

/**
 * Resolve the names two bases of the **same set** would otherwise share.
 *
 * Two systems with the same name on one map is a bug, and it happens when
 * two bases draw on the same pool: FMG's Elven and Dark Elven share 41
 * names, and our own "Padstow" is also in FMG's English.
 *
 * The rule is simple: the first base to claim a name keeps it. The bases
 * are given in priority order — our own hand-written names first, then the
 * ones derived from FMG's data — so a hand-written name is never dropped.
 *
 * The resolution is **per set**, and it has to be: two sets may draw on
 * the same stock pool (both AstralTrek and Grimdark want FMG's "Elven"),
 * but a map only ever carries one set's peoples. Resolving across sets
 * would leave the second set's base with nothing at all.
 */
export function resolveCollisions(bases: AstralNameBase[]): ResolvedBases {
  const dropped: { base: string; name: string }[] = [];

  const resolved = bases.map((base, index) => {
    // the bases of this set that come before this one
    const earlier = bases.filter((candidate, other) => candidate.set === base.set && other < index);

    const claimed = new Set<string>();
    for (const other of earlier) {
      for (const name of other.groups.systems) claimed.add(name);
    }

    const systems = base.groups.systems.filter((name) => {
      if (claimed.has(name)) {
        dropped.push({ base: base.name, name });
        return false;
      }
      claimed.add(name);
      return true;
    });
    return { ...base, groups: { ...base.groups, systems } };
  });

  return { bases: resolved, dropped };
}
