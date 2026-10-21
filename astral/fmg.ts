/**
 * fmg.ts — the shape of the FMG globals the mod uses.
 *
 * One place, so the types cannot drift apart. FMG's globals are read through
 * `globalThis` (never captured, because FMG replaces them when a map is
 * loaded), and every module that touches one declares it here.
 */

/** A name base, in FMG's own shape. */
export interface FmgNameBase {
  name: string;
  i: number;
  min: number;
  max: number;
  d: string;
  m: number;
  b: string;
}

/** A burg — a settlement, which on a star map is a system. */
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
  label?: { text?: string };
}

/** A state — a polity. */
export interface FmgState {
  i: number;
  name?: string;
  formName?: string;
  fullName?: string;
  culture?: number;
  center?: number;
  capital?: number;
  removed?: boolean;
}

/** A province — a sector. */
export interface FmgProvince {
  i: number;
  name?: string;
  formName?: string;
  fullName?: string;
  removed?: boolean;
}

/** A culture — a people. */
export interface FmgCulture {
  i: number;
  name?: string;
  base?: number;
  center?: number;
  shield?: string;
  removed?: boolean;
}

/** The map, as FMG keeps it. */
export interface FmgPack {
  states: FmgState[];
  provinces: FmgProvince[];
  burgs: FmgBurg[];
  cultures: FmgCulture[];
  cells: { p: number[][]; culture: number[]; state: number[] };
}

/** FMG's name generator. */
export interface FmgNames {
  nameBases: FmgNameBase[];
  getNameBases(): FmgNameBase[];
  /** names a state after its capital, with a government word in front */
  getState(name: string, culture?: number, base?: number): string;
  /** names a culture, and the towns of that culture */
  getCulture(culture: number, min?: number, max?: number, dupl?: string): string;
  clearChains(): void;
  updateChain(index: number): void;
}

/** FMG's cultures generator. */
export interface FmgCultures {
  getDefault(count?: number): { name: string; base: number; shield: string }[];
  remove(cultureId: number): void;
  add(x: number, y: number): number;
  rename(cultureId: number, name: string): void;
  setBase(cultureId: number, baseId: number): void;
  recalculate(): void;
}

/** FMG's burgs generator. */
export interface FmgBurgs {
  rename(burgId: number, name: string): void;
}

/** FMG's states generator. */
export interface FmgStates {
  rename(stateId: number, name: string): void;
  setForm(stateId: number, formName: string, form?: string): void;
  setCulture(stateId: number, cultureId: number): void;
  defineStateForms?(list?: number[] | null): void;
  recalculate(): void;
}

/** FMG's provinces generator. */
export interface FmgProvinces {
  regenerate(regenerateNames?: boolean): void;
  setForm(provinceId: number, formName: string): void;
}

/** FMG's layers registry. */
export interface FmgLayers {
  draw(...ids: string[]): void;
}

/** The population settings, for speaking in people. */
export interface PopulationOptions {
  map?: { units?: { population?: { scale?: number; urbanization?: { rate?: number } } } };
}

/** FMG's grid graph, which keeps the temperature. */
export interface FmgGrid {
  cells?: { temp?: number[] };
}

declare global {
  var pack: FmgPack | undefined;
  var Names: FmgNames | undefined;
  var Cultures: FmgCultures | undefined;
  var Burgs: FmgBurgs | undefined;
  var States: FmgStates | undefined;
  var Provinces: FmgProvinces | undefined;
  var Layers: FmgLayers | undefined;
  var grid: FmgGrid | undefined;
  var options: PopulationOptions | undefined;
}
