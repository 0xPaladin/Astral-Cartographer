/**
 * apply.test.ts — the panel and the action behind it.
 *
 * The action is made of Azgaar's own methods, so what is tested here is the
 * mod's own logic: which peoples a set offers, what the panel says after an
 * apply, and that the settings survive a round trip.
 */
import { describe, expect, test } from "bun:test";
import { seedsFor } from "../astral/actions/apply.ts";
import { describe as describeResult } from "../astral/ui/panel.ts";
import { getSettings, setSettings } from "../astral/state.ts";
import { installNameBases, type FmgNameBase, type FmgNames } from "../astral/name-bases.ts";
import { ASTRAL_NAME_SETS, findAstralBase } from "../astral/content/naming/index.ts";

/** A stand-in for FMG's Names generator. */
function fakeNames(bases: FmgNameBase[] = []): FmgNames {
  return {
    nameBases: bases,
    getNameBases: () => bases,
    getState: (name: string) => `${name}ia`,
    getCulture: () => "Somewhere",
    clearChains: () => {},
    updateChain: () => {},
  };
}

describe("the seeds of a set", () => {
  test("every set offers a people for every base it has", () => {
    const names = fakeNames();
    installNameBases(names);

    for (const set of ASTRAL_NAME_SETS) {
      const seeds = seedsFor(set.name, names);
      expect(seeds.length).toBe(set.cultures.length);
      for (const seed of seeds) {
        expect(seed.name).toBeTruthy();
        expect(seed.base).toBeGreaterThanOrEqual(0);
        expect(names.nameBases[seed.base]?.name).toBeTruthy();
      }
    }
  });

  test("a set can supply as many peoples as a map usually has", () => {
    const names = fakeNames();
    installNameBases(names);
    for (const set of ASTRAL_NAME_SETS) {
      expect(seedsFor(set.name, names).length).toBeGreaterThanOrEqual(16);
    }
  });

  test("an unknown set has no seeds", () => {
    const names = fakeNames();
    installNameBases(names);
    expect(seedsFor("Nonsense", names)).toEqual([]);
  });

  test("the peoples of a set are named apart", () => {
    for (const set of ASTRAL_NAME_SETS) {
      const names = set.cultures.map((culture) => culture.name);
      expect(new Set(names).size).toBe(names.length);
    }
  });

  test("every people of a set names from a base of that set", () => {
    for (const set of ASTRAL_NAME_SETS) {
      for (const culture of set.cultures) {
        const base = findAstralBase(culture.base);
        expect(base).toBeDefined();
        expect(base!.set).toBe(set.name);
      }
    }
  });
});

describe("what the panel says", () => {
  test("an error is shown as an error", () => {
    const text = describeResult({ set: "AstralTrek", cultures: 0, burgs: 0, states: 0, provinces: 0, missing: 0, error: "No map" });
    expect(text).toContain("No map");
    expect(text).toContain("color:#a00");
  });

  test("a result is counted in words", () => {
    const text = describeResult({ set: "Grimdark", cultures: 9, burgs: 856, states: 24, provinces: 372, missing: 0 });
    expect(text).toContain("Grimdark");
    expect(text).toContain("9 peoples replaced");
    expect(text).toContain("856 systems renamed");
    expect(text).toContain("24 polities named");
    expect(text).toContain("372 sectors named");
  });

  test("peoples the set could not supply are mentioned", () => {
    const text = describeResult({ set: "Grimdark", cultures: 4, burgs: 10, states: 2, provinces: 6, missing: 3 });
    expect(text).toContain("3 peoples the set could not supply");
  });

  test("nothing to change is said plainly", () => {
    const text = describeResult({ set: "Grimdark", cultures: 0, burgs: 0, states: 0, provinces: 0, missing: 0 });
    expect(text).toContain("nothing to change");
  });
});

describe("the settings", () => {
  test("carry the name set and the choice to replace the peoples", () => {
    const before = getSettings();
    expect(before.set).toBeTruthy();
    expect(typeof before.replaceCultures).toBe("boolean");

    const changed = setSettings({ set: "Grimdark", replaceCultures: false });
    expect(changed.set).toBe("Grimdark");
    expect(changed.replaceCultures).toBe(false);
    expect(getSettings().set).toBe("Grimdark");

    setSettings({ set: before.set, replaceCultures: before.replaceCultures });
  });

  test("refuse a name set that does not exist", () => {
    const before = getSettings();
    const changed = setSettings({ set: "Nonsense" });
    expect(changed.set).toBe(before.set);
  });
});
