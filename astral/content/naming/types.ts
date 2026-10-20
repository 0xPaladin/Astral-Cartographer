/**
 * The naming content model.
 *
 * FMG has two levels, and so do we:
 *
 *   a **set**  — what the user picks ("High Fantasy", "Dark Fantasy"). A set
 *                is a bundle of cultures, each one bound to a name base.
 *   a **base** — a vocabulary. One people, one register, one pool of names
 *                per kind of thing.
 *
 * Our sets are the three registers: AstralTrek, AstralJammer, Grimdark.
 * Their bases are the vocabularies underneath them — modern and invented for
 * AstralTrek, high-fantasy-flavoured for AstralJammer, dark-fantasy and new
 * for Grimdark.
 *
 * A base carries **groups** rather than one flat pool: a star system is a
 * place and a polity is an institution, and a single pool would blend them
 * into nonsense ("Vega Federation" as a town).
 */

/** The kinds of thing a base can name. */
export type AstralNameGroup = "systems" | "polities";

/** One vocabulary. */
export interface AstralNameBase {
  /** the name shown in FMG's Namesbase Editor */
  name: string;
  /** the set this base belongs to */
  set: string;
  /** recommended minimum length of generated names */
  min: number;
  /** recommended maximum length of generated names */
  max: number;
  /** letters that may be doubled in generated names (FMG's `d`) */
  d: string;
  /** the pools, one per group */
  groups: Record<AstralNameGroup, string[]>;
}

/**
 * Where a culture's homeland goes.
 *
 * FMG's own sets use a scoring function over the map's cells — temperature,
 * elevation, distance from the sea. We have the same data and the same
 * problem, so we say what we mean in words and let the mod turn a hint into a
 * scoring function.
 */
export type AstralPlacement = "temperate" | "harsh" | "remote" | "any";

/** One people in a set, bound to a base. */
export interface AstralCulture {
  /** the display name, e.g. "Terran (Human)" */
  name: string;
  /** the name of the base it takes its names from */
  base: string;
  /** the emblem shape it carries (one of FMG's shield shapes) */
  shield: string;
  /** how eagerly the culture claims land (FMG's `odd`) */
  odd?: number;
  /** where its homeland goes */
  placement?: AstralPlacement;
}

/** A set: a named bundle of cultures. */
export interface AstralNameSet {
  /** the name shown in the Cultures set dropdown */
  name: string;
  /** how many cultures the set may hold */
  max: number;
  /** the chance of the set being picked by the random roll */
  probability?: number;
  /** the set's cultures, each bound to a base */
  cultures: AstralCulture[];
}

/**
 * The names of one group.
 *
 * A copy, so a caller cannot edit the content by accident.
 */
export function poolOf(base: AstralNameBase, group: AstralNameGroup): string[] {
  return [...base.groups[group]];
}

/** The pool as FMG's `b` field wants it: comma-separated, no spaces. */
export function poolString(base: AstralNameBase, group: AstralNameGroup): string {
  return poolOf(base, group).join(",");
}
