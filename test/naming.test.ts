/**
 * naming.test.ts — the naming content: the sets, the bases, and the
 * registration that puts the bases into FMG.
 *
 * The content rules are FMG's own (from its Namesbase Editor): enough
 * sample names for the Markov chain to have variety, no characters the save
 * format forbids, and lengths that make sense. The registration rules are
 * ours: our bases are appended, they survive a map load, and they never
 * displace a stock base.
 */
import { describe, expect, test } from "bun:test";
import { ASTRAL_NAME_BASES, ASTRAL_NAME_SETS, findAstralBase, findAstralSet, poolOf } from "../astral/content/naming/index.ts";
import {
  installNameBases,
  mergeNameBases,
  toFmgNameBase,
  type FmgNameBase,
  type FmgNames,
} from "../astral/name-bases.ts";
import { culturesForSet, isAstralSet, placementScore } from "../astral/sets.ts";
import { buildPayload, namesbaseText, pushNameBases } from "../astral/payload.ts";

/** A stand-in for FMG's Names generator, with the same contract. */
function fakeNames(bases: FmgNameBase[] = []): FmgNames & { chainUpdates: number[] } {
  const names = {
    nameBases: bases,
    chainUpdates: [] as number[],
    getNameBases: () => bases,
    getState: (name: string) => `${name}ia`,
    getCulture: () => "Somewhere",
    clearChains: () => {},
    updateChain: (index: number) => {
      names.chainUpdates.push(index);
    },
  };
  return names;
}

describe("the naming content", () => {
  /** FMG's emblem shapes, from its `data/emblems/shields.ts`. */
  const FMG_SHIELDS = [
    "heater",
    "spanish",
    "french",
    "horsehead",
    "horsehead2",
    "polish",
    "hessen",
    "swiss",
    "boeotian",
    "roman",
    "kite",
    "oldFrench",
    "renaissance",
    "baroque",
    "targe",
    "targe2",
    "pavise",
    "wedged",
    "embowed",
    "flag",
    "pennon",
    "guidon",
    "banner",
    "dovetail",
    "gonfalon",
    "pennant",
    "round",
    "oval",
    "vesicaPiscis",
    "square",
    "diamond",
    "hexagon",
    "no",
    "fantasy1",
    "fantasy2",
    "fantasy3",
    "fantasy4",
    "fantasy5",
    "noldor",
    "gondor",
    "easterling",
    "erebor",
    "ironHills",
    "urukHai",
    "moriaOrc",
  ];

  test("we ship three sets", () => {
    expect(ASTRAL_NAME_SETS.map((set) => set.name)).toEqual(["AstralTrek", "AstralJammer", "Grimdark"]);
  });

  test("every set has bases, and every base belongs to a set", () => {
    for (const set of ASTRAL_NAME_SETS) {
      const bases = ASTRAL_NAME_BASES.filter((base) => base.set === set.name);
      expect(bases.length).toBeGreaterThanOrEqual(2);
    }
    for (const base of ASTRAL_NAME_BASES) {
      expect(findAstralSet(base.set)).toBeDefined();
    }
  });

  test("base and set names are unique", () => {
    const baseNames = ASTRAL_NAME_BASES.map((base) => base.name);
    expect(new Set(baseNames).size).toBe(baseNames.length);
    const setNames = ASTRAL_NAME_SETS.map((set) => set.name);
    expect(new Set(setNames).size).toBe(setNames.length);
  });

  test("every culture in a set points at a base of that set", () => {
    for (const set of ASTRAL_NAME_SETS) {
      for (const culture of set.cultures) {
        const base = findAstralBase(culture.base);
        expect(base).toBeDefined();
        expect(base!.set).toBe(set.name);
      }
    }
  });

  test("a set's cultures fill it", () => {
    for (const set of ASTRAL_NAME_SETS) {
      expect(set.cultures.length).toBeGreaterThanOrEqual(4);
      expect(set.max).toBeGreaterThanOrEqual(set.cultures.length);
    }
  });

  test("every culture carries an emblem shape FMG knows", () => {
    for (const set of ASTRAL_NAME_SETS) {
      for (const culture of set.cultures) {
        expect(FMG_SHIELDS).toContain(culture.shield);
      }
    }
  });

  test("a set's cultures are named apart from one another", () => {
    for (const set of ASTRAL_NAME_SETS) {
      const names = set.cultures.map((culture) => culture.name);
      expect(new Set(names).size).toBe(names.length);
    }
  });

  test("the sets are recognized", () => {
    expect(isAstralSet("AstralTrek")).toBe(true);
    expect(isAstralSet("highFantasy")).toBe(false);
  });

  for (const base of ASTRAL_NAME_BASES) {
    describe(base.name, () => {
      test("has a systems group and a polities group", () => {
        expect(poolOf(base, "systems").length).toBeGreaterThan(0);
        expect(poolOf(base, "polities").length).toBeGreaterThan(0);
      });

      test("has enough sample names for the generator to have variety", () => {
        // FMG's own analysis calls 100-400 "good". A base that names one
        // culture's settlements needs far less than a base that names a
        // whole map, but below 50 the chain starts repeating itself.
        expect(poolOf(base, "systems").length).toBeGreaterThanOrEqual(50);
        expect(poolOf(base, "polities").length).toBeGreaterThanOrEqual(18);
      });

      test("has no duplicate names in a group", () => {
        for (const group of ["systems", "polities"] as const) {
          const names = poolOf(base, group);
          expect(new Set(names).size).toBe(names.length);
        }
      });

      test("has no name that contains a digit", () => {
        // A number in the pool becomes a free-floating fragment for FMG's
        // chain, and the generator starts producing things like "Re 128".
        for (const group of ["systems", "polities"] as const) {
          for (const name of poolOf(base, group)) {
            expect(/[0-9]/.test(name)).toBe(false);
          }
        }
      });

      test("has no name the save format cannot carry", () => {
        // FMG's .map line format uses | as a separator and forbids / in names.
        for (const group of ["systems", "polities"] as const) {
          for (const name of poolOf(base, group)) {
            expect(name).not.toContain("|");
            expect(name).not.toContain("/");
            expect(name).not.toContain(",");
          }
        }
      });

      test("has a sane length window", () => {
        expect(base.min).toBeGreaterThanOrEqual(2);
        expect(base.max).toBeGreaterThan(base.min);
        expect(base.max).toBeLessThanOrEqual(20);
      });

      test("declares only letters that may be doubled", () => {
        expect(base.d).toMatch(/^[a-z]*$/);
      });
    });
  }

  test("the registers do not share a name", () => {
    const all = ASTRAL_NAME_BASES.flatMap((base) => poolOf(base, "systems"));
    expect(new Set(all).size).toBe(all.length);
  });
});

describe("toFmgNameBase", () => {
  test("flattens the systems group into FMG's pool", () => {
    const base = findAstralBase("Trek Core")!;
    const converted = toFmgNameBase(base, 7);
    expect(converted.name).toBe("Trek Core");
    expect(converted.i).toBe(7);
    expect(converted.b).toBe(poolOf(base, "systems").join(","));
    expect(converted.m).toBe(0);
  });
});

describe("mergeNameBases", () => {
  test("appends our bases after the stock ones", () => {
    const stock: FmgNameBase[] = [
      { name: "German", i: 0, min: 5, max: 12, d: "lt", m: 0, b: "A,B,C" },
      { name: "English", i: 1, min: 6, max: 11, d: "", m: 0, b: "D,E,F" },
    ];
    const { bases, changed } = mergeNameBases(stock);
    expect(bases).toHaveLength(2 + ASTRAL_NAME_BASES.length);
    expect(bases[0]!.name).toBe("German");
    expect(bases[1]!.name).toBe("English");
    expect(bases[2]!.name).toBe("Trek Core");
    expect(changed).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  });

  test("replaces our own base in place, keeping its index", () => {
    const existing: FmgNameBase[] = [
      { name: "Trek Core", i: 0, min: 4, max: 12, d: "lnrs", m: 0, b: "stale,pool" },
      { name: "German", i: 1, min: 5, max: 12, d: "lt", m: 0, b: "A,B,C" },
    ];
    const { bases, changed } = mergeNameBases(existing);
    expect(bases[0]!.name).toBe("Trek Core");
    expect(bases[0]!.i).toBe(0);
    expect(bases[0]!.b).not.toBe("stale,pool");
    expect(bases[0]!.b).toContain("Vega");
    expect(changed).toContain(0);
  });

  test("is idempotent", () => {
    const once = mergeNameBases([]).bases;
    const twice = mergeNameBases(once);
    expect(twice.bases.map((base) => base.name)).toEqual(once.map((base) => base.name));
    expect(twice.changed).toEqual([]);
  });
});

describe("installNameBases", () => {
  test("registers our bases and builds their chains", () => {
    const names = fakeNames();
    installNameBases(names);
    expect(names.nameBases).toHaveLength(ASTRAL_NAME_BASES.length);
    expect(names.nameBases[0]!.name).toBe("Trek Core");
    expect(names.chainUpdates).toHaveLength(ASTRAL_NAME_BASES.length);
  });

  test("survives a map load that replaces the array", () => {
    const names = fakeNames();
    installNameBases(names);

    // This is what FMG's loader does: replace the whole array with the save's.
    const fromSave: FmgNameBase[] = [
      { name: "German", i: 0, min: 5, max: 12, d: "lt", m: 0, b: "A,B,C" },
    ];
    names.nameBases = fromSave;

    expect(names.nameBases[0]!.name).toBe("German");
    expect(names.nameBases).toHaveLength(1 + ASTRAL_NAME_BASES.length);
    expect(names.nameBases[1]!.name).toBe("Trek Core");
  });

  test("a save that already carries our bases keeps them in place", () => {
    const names = fakeNames();
    installNameBases(names);

    const fromSave: FmgNameBase[] = [
      { name: "German", i: 0, min: 5, max: 12, d: "lt", m: 0, b: "A,B,C" },
      { name: "Trek Core", i: 1, min: 4, max: 12, d: "lnrs", m: 0, b: "Vega,Sirius,Rigel" },
    ];
    names.nameBases = fromSave;

    const trek = names.nameBases.find((base) => base.name === "Trek Core")!;
    expect(trek.i).toBe(1);
    // our content wins over the save's
    expect(trek.b).toContain("Aldebaran");
  });

  test("installing twice does not duplicate the bases", () => {
    const names = fakeNames();
    installNameBases(names);
    installNameBases(names);
    expect(names.nameBases).toHaveLength(ASTRAL_NAME_BASES.length);
  });
});

describe("the payload", () => {
  test("carries our bases in FMG's own shape, at the ids they occupy", () => {
    const names = fakeNames();
    installNameBases(names);
    const payload = buildPayload(names);

    expect(payload.bases).toHaveLength(ASTRAL_NAME_BASES.length);
    for (const base of payload.bases) {
      const live = names.nameBases.find((candidate) => candidate.name === base.name);
      expect(live).toBeDefined();
      expect(base.i).toBe(live!.i);
      expect(base.b).toBe(live!.b);
    }
  });

  test("links every culture of every set to a base id", () => {
    const names = fakeNames();
    installNameBases(names);
    const payload = buildPayload(names);

    for (const set of payload.sets) {
      for (const culture of set.cultures) {
        expect(culture.base).toBeGreaterThanOrEqual(0);
        const base = names.nameBases[culture.base];
        expect(base).toBeDefined();
        // the linked base is the one the culture asked for
        const wanted = ASTRAL_NAME_SETS.find((candidate) => candidate.name === set.name)!.cultures.find(
          (candidate) => candidate.name === culture.name,
        )!;
        expect(base!.name).toBe(wanted.base);
      }
    }
  });

  test("writes FMG's namesbase file format", () => {
    const names = fakeNames();
    installNameBases(names);
    const text = namesbaseText(buildPayload(names).bases);
    const lines = text.split("\r\n");

    expect(lines).toHaveLength(ASTRAL_NAME_BASES.length);
    for (const line of lines) {
      const [name, min, max, duplication, m, names] = line.split("|");
      expect(name).toBeTruthy();
      expect(Number(min)).toBeGreaterThan(0);
      expect(Number(max)).toBeGreaterThan(Number(min));
      expect(duplication).toMatch(/^[a-z]*$/);
      expect(Number(m)).toBe(0);
      expect(names!.split(",").length).toBeGreaterThan(2);
    }
  });

  test("pushes the stock bases and ours in one assignment", () => {
    const stock: FmgNameBase[] = [
      { name: "German", i: 0, min: 5, max: 12, d: "lt", m: 0, b: "A,B,C" },
    ];
    const names = fakeNames(stock);
    const pushed = pushNameBases(names);

    expect(pushed).toHaveLength(1 + ASTRAL_NAME_BASES.length);
    expect(pushed[0]!.name).toBe("German");
    expect(pushed[1]!.name).toBe("Trek Core");
    expect(names.nameBases).toHaveLength(pushed.length);
  });
});

describe("culturesForSet", () => {
  test("binds every culture of a set to the index of its base", () => {
    const names = fakeNames();
    installNameBases(names);
    const set = findAstralSet("AstralJammer")!;
    const seeds = culturesForSet(set, names);

    expect(seeds).toHaveLength(set.cultures.length);
    for (const [index, culture] of set.cultures.entries()) {
      const seed = seeds[index]!;
      expect(seed.name).toBe(culture.name);
      expect(seed.base).toBe(names.nameBases.findIndex((base) => base.name === culture.base));
      expect(seed.base).toBeGreaterThanOrEqual(0);
      expect(typeof seed.sort).toBe("function");
    }
  });
});

describe("placementScore", () => {
  test("is zero without a map, and a number with one", () => {
    expect(placementScore("any", 0)).toBe(0);

    // FMG keeps the temperature on the grid graph, the height on the packed cells
    const cells = { h: [50, 10], p: [[0, 0], [1000, 1000]] };
    const grid = { cells: { temp: [12, -20] } };
    (globalThis as { pack?: unknown }).pack = { cells };
    (globalThis as { grid?: unknown }).grid = grid;
    try {
      expect(placementScore("temperate", 0)).toBeGreaterThan(placementScore("temperate", 1));
      expect(placementScore("harsh", 1)).toBeGreaterThan(placementScore("harsh", 0));
      // the rim is farther from the middle of the chart
      expect(placementScore("remote", 0)).toBeGreaterThan(placementScore("remote", 1));
    } finally {
      delete (globalThis as { pack?: unknown }).pack;
      delete (globalThis as { grid?: unknown }).grid;
    }
  });
});
