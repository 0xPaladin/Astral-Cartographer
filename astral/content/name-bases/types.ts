/**
 * The name base content model.
 *
 * FMG's own name base is a flat list of entries, each carrying a single
 * comma-separated pool of source names — one flavour of naming, with no
 * structure inside it. A star map needs more than one flavour per base: star
 * systems and polities are named from different vocabularies, and a
 * town-shaped name and a state-shaped name cannot share a pool without the
 * generator blending them into nonsense ("Vega Federation" as a town).
 *
 * So our bases carry **groups**: named pools, one per kind of thing. FMG's
 * editor sees the base's primary group flattened into a normal pool; the mod
 * keeps the groups apart when it generates.
 */

/** The kinds of thing a base can name. */
export type AstralNameGroup = "systems" | "polities";

export interface AstralNameBase {
  /** the name shown in FMG's Namesbase Editor */
  name: string;
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
