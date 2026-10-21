/**
 * systems.ts — FMG's burgs, read as star systems.
 *
 * A burg is a settlement on a fantasy map: a place with a population, some
 * buildings and maybe a harbour. The same record on a star map is a star
 * system: a star with a class, a population, and the installations that make
 * it what it is.
 *
 * The mapping is deliberately small and honest:
 *
 *   population → the star's class    a backwater red dwarf, a blue giant
 *   port       → a shipyard
 *   citadel    → a bastion
 *   plaza      → a civic core
 *   shanty     → a drift
 *   temple     → a shrine
 *   walls      → shielding
 *
 * The capital of a polity is the biggest system in it, so the class follows
 * the population, and the class follows the size of the world around it.
 */

/** The slice of FMG's burg this module reads. */
export interface FmgBurg {
  i: number;
  name?: string;
  cell: number;
  culture?: number;
  state?: number;
  population?: number;
  capital?: number;
  port?: number;
  citadel?: number;
  plaza?: number;
  walls?: number;
  shanty?: number;
  temple?: number;
  removed?: boolean;
}

/** The population settings the mod needs to speak in people. */
export interface PopulationOptions {
  map?: { units?: { population?: { scale?: number; urbanization?: { rate?: number } } } };
}

export interface StarClass {
  /** the spectral class, as a letter */
  class: string;
  /** what the class is called in words */
  name: string;
}

export interface StarSystem {
  id: number;
  name: string;
  /** the star's spectral class */
  class: string;
  /** what the class is called in words */
  className: string;
  /** the system's population, in people */
  population: number;
  /** the installations that make the system what it is */
  traits: string[];
  state: number;
  culture: number;
  capital: boolean;
  port: boolean;
}

/** The installations, in FMG's words and in ours. */
export const TRAITS: Record<string, string> = {
  port: "shipyard",
  citadel: "bastion",
  plaza: "civic core",
  shanty: "drift",
  temple: "shrine",
  walls: "shielding",
};

/**
 * The star's class, from how many people live in its system.
 *
 * The thresholds are FMG's town sizes: a hamlet, a town, a city, a capital,
 * a metropolis. A capital is a blue giant; a hamlet is a red dwarf nobody
 * has bothered to survey.
 */
export function starClass(population: number): StarClass {
  if (population < 2_000) return { class: "M", name: "red dwarf" };
  if (population < 10_000) return { class: "K", name: "orange dwarf" };
  if (population < 50_000) return { class: "G", name: "yellow dwarf" };
  if (population < 250_000) return { class: "F", name: "white-yellow star" };
  if (population < 1_000_000) return { class: "A", name: "white star" };
  return { class: "B", name: "blue giant" };
}

/** How many people live in a system, in people. */
export function peopleOf(burg: FmgBurg, options?: PopulationOptions): number {
  const population = options?.map?.units?.population;
  const scale = population?.scale ?? 1000;
  const rate = population?.urbanization?.rate ?? 0.1;
  return Math.round((burg.population ?? 0) * scale * rate);
}

/** The installations a system has, in our words. */
export function systemTraits(burg: FmgBurg): string[] {
  const traits: string[] = [];
  if (burg.port) traits.push(TRAITS.port!);
  if (burg.citadel) traits.push(TRAITS.citadel!);
  if (burg.plaza) traits.push(TRAITS.plaza!);
  if (burg.shanty) traits.push(TRAITS.shanty!);
  if (burg.temple) traits.push(TRAITS.temple!);
  if (burg.walls) traits.push(TRAITS.walls!);
  return traits;
}

/** One system, read from one burg. */
export function toSystem(burg: FmgBurg, options?: PopulationOptions): StarSystem {
  const population = peopleOf(burg, options);
  const { class: starType, name: className } = starClass(population);
  return {
    id: burg.i,
    name: burg.name ?? "",
    class: starType,
    className,
    population,
    traits: systemTraits(burg),
    state: burg.state ?? 0,
    culture: burg.culture ?? 0,
    capital: !!burg.capital,
    port: !!burg.port,
  };
}

/** Every system on the map, in burg order. */
export function systemsOf(burgs: FmgBurg[], options?: PopulationOptions): StarSystem[] {
  return burgs.filter((burg) => burg.i && !burg.removed).map((burg) => toSystem(burg, options));
}
