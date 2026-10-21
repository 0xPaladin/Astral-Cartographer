/**
 * apply.ts — the action the panel's Apply button runs.
 *
 * The map is built with stock FMG: the user makes a world, then presses
 * Apply, and the mod takes it over. The action is deliberately made of
 * Azgaar's own methods — the mod does not keep a parallel world, it changes
 * FMG's:
 *
 *   Cultures.remove / add / rename / setBase   the peoples of the map
 *   Cultures.recalculate                       where they grow
 *   States.recalculate                         the states they hold
 *   Burgs.rename                               the systems they name
 *   States.rename / setForm                    the polities they name
 *   Provinces.regenerate / setForm             the sectors they name
 *
 * The order matters: the peoples change first, then the names follow, because
 * a system's name comes from the people who live in it.
 */
import { findAstralSet } from "../content/naming/index.ts";
import type { FmgNames } from "../fmg.ts";
import { applyPolityNames, applySectorNames, currentPack } from "../mapping/index.ts";
import { getSettings } from "../state.ts";

export interface ApplyResult {
  /** the name set that was applied */
  set: string;
  /** peoples replaced */
  cultures: number;
  /** systems renamed */
  burgs: number;
  /** polities renamed */
  states: number;
  /** sectors renamed */
  provinces: number;
  /** peoples the map had that the set could not supply */
  missing: number;
  /** what went wrong, if anything */
  error?: string;
}

/** The seeds of a set: a culture's name, and the base it names things from. */
export function seedsFor(setName: string, names: FmgNames): { name: string; base: number; shield: string }[] {
  const set = findAstralSet(setName);
  if (!set) return [];
  return set.cultures.map((culture) => ({
    name: culture.name,
    base: names.nameBases.findIndex((base) => base.name === culture.base),
    shield: culture.shield,
  }));
}

/**
 * While the action is running, FMG's culture generator must hand out *our*
 * peoples — that is how `Cultures.add` picks the name and the base of a new
 * culture. Outside the action it hands out FMG's own, so a map generated in
 * stock FMG stays a stock FMG map.
 */
let applying = false;
let applyingSeeds: { name: string; base: number; shield: string }[] = [];

export function installCultureBridge(names: FmgNames): void {
  const cultures = globalThis.Cultures;
  if (!cultures) return;
  const original = cultures.getDefault.bind(cultures);
  cultures.getDefault = (count = 0) => {
    if (!applying) return original(count);
    return count > 0 && count < applyingSeeds.length ? applyingSeeds.slice(0, count) : applyingSeeds;
  };
}

/**
 * Apply the mod to the map on screen.
 *
 * @param options the name set to use, and whether the peoples are replaced
 */
export function applyAstral(
  names: FmgNames,
  options: { set?: string; replaceCultures?: boolean } = {},
): ApplyResult {
  const settings = getSettings();
  const setName = options.set ?? settings.set;
  const replaceCultures = options.replaceCultures ?? settings.replaceCultures;

  const result: ApplyResult = { set: setName, cultures: 0, burgs: 0, states: 0, provinces: 0, missing: 0 };

  const set = findAstralSet(setName);
  if (!set) {
    result.error = `Unknown name set "${setName}"`;
    return result;
  }

  const pack = currentPack();
  const cultures = globalThis.Cultures;
  const burgs = globalThis.Burgs;
  const states = globalThis.States;
  const provinces = globalThis.Provinces;
  const nameGenerator = globalThis.Names;

  if (!pack || !cultures || !burgs || !states || !provinces || !nameGenerator) {
    result.error = "FMG is not ready — the map could not be read";
    return result;
  }

  const live = pack.cultures.filter((culture) => culture.i && !culture.removed);
  if (!live.length) {
    result.error = "The map has no peoples to replace — generate a map first";
    return result;
  }

  const seeds = seedsFor(setName, names);
  if (!seeds.length) {
    result.error = `The name set "${setName}" has no peoples`;
    return result;
  }

  // 1. the peoples
  if (replaceCultures) {
    const centers = live.map((culture) => culture.center).filter((center): center is number => center !== undefined);
    const count = Math.min(centers.length, seeds.length);
    result.missing = live.length - count;

    // the stock peoples go
    for (const culture of [...live].sort((a, b) => b.i - a.i)) cultures.remove(culture.i);

    // ours take their place, where they used to live
    applying = true;
    applyingSeeds = seeds;
    try {
      for (let index = 0; index < count; index++) {
        const seed = seeds[index]!;
        const point = pack.cells.p[centers[index]!];
        if (!point) continue;
        const id = cultures.add(point[0]!, point[1]!);
        cultures.rename(id, seed.name);
        cultures.setBase(id, seed.base);
        // FMG leaves the emblem shape empty unless the user asked for random
        // ones; ours carries one, so the peoples have a shield to show
        const culture = pack.cultures[id];
        if (culture && !culture.shield) culture.shield = seed.shield;
      }
    } finally {
      applying = false;
      applyingSeeds = [];
    }
    result.cultures = count;

    // the wildlands take a base too, so the towns nobody owns are named as well
    const wildlandsBase = seeds[0]?.base;
    if (wildlandsBase !== undefined) {
      try {
        cultures.setBase(0, wildlandsBase);
      } catch {
        // the wildlands may not be there; that is fine
      }
    }

    // the peoples grow into the land they had
    cultures.recalculate();

    // the states belong to the peoples that hold them
    for (const state of pack.states) {
      if (!state.i || state.removed || state.center === undefined) continue;
      const culture = pack.cells.culture[state.center];
      if (culture !== undefined && culture !== state.culture) states.setCulture(state.i, culture);
    }

    states.recalculate();
  }

  // 2. the systems: a system's name comes from the people who live in it
  for (const burg of pack.burgs) {
    if (!burg.i || burg.removed) continue;
    const culture = burg.culture ?? 0;
    const name = nameGenerator.getCulture(culture);
    if (name && name !== burg.name) {
      burgs.rename(burg.i, name);
      result.burgs++;
    }
  }

  // 3. the polities: named by the system that holds them, with their own word
  for (const state of pack.states) {
    if (!state.i || state.removed) continue;
    const capital = pack.burgs[state.capital ?? 0];
    if (capital?.name && capital.name !== state.name) {
      states.rename(state.i, capital.name);
      result.states++;
    }
  }
  result.states += applyPolityNames(names);

  // 4. the sectors: named after a system, and called a sector
  provinces.regenerate(true);
  result.provinces += applySectorNames();

  // 5. draw it
  globalThis.Layers?.draw("burgIcons", "labels", "states", "provinces", "borders", "cultures");

  return result;
}
