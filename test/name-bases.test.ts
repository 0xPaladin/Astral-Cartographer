/**
 * name-bases.test.ts — the name base content and the registration that puts
 * it into FMG.
 *
 * The content rules are FMG's own (from its Namesbase Editor): enough
 * sample names for the Markov chain to have variety, no characters the save
 * format forbids, and lengths that make sense. The registration rules are
 * ours: our bases are appended, they survive a map load, and they never
 * displace a stock base.
 */
import { describe, expect, test } from "bun:test";
import { ASTRAL_NAME_BASES, findAstralBase, poolOf } from "../astral/content/name-bases/index.ts";
import {
  installNameBases,
  mergeNameBases,
  toFmgNameBase,
  type FmgNameBase,
  type FmgNames,
} from "../astral/name-bases.ts";

/** A stand-in for FMG's Names generator, with the same contract. */
function fakeNames(bases: FmgNameBase[] = []): FmgNames & { chainUpdates: number[] } {
  const names = {
    nameBases: bases,
    chainUpdates: [] as number[],
    getNameBases: () => bases,
    clearChains: () => {},
    updateChain: (index: number) => {
      names.chainUpdates.push(index);
    },
  };
  return names;
}

describe("the name base content", () => {
  test("we ship the three registers", () => {
    expect(ASTRAL_NAME_BASES.map((base) => base.name)).toEqual(["AstralTrek", "AstralJammer", "Grimdark"]);
  });

  for (const base of ASTRAL_NAME_BASES) {
    describe(base.name, () => {
      test("has a systems group and a polities group", () => {
        expect(poolOf(base, "systems").length).toBeGreaterThan(0);
        expect(poolOf(base, "polities").length).toBeGreaterThan(0);
      });

      test("has enough sample names for the generator to have variety", () => {
        // FMG's own analysis calls 100-400 "good"; below 100 the chain repeats.
        expect(poolOf(base, "systems").length).toBeGreaterThanOrEqual(100);
        expect(poolOf(base, "polities").length).toBeGreaterThanOrEqual(40);
      });

      test("has no duplicate names in a group", () => {
        for (const group of ["systems", "polities"] as const) {
          const names = poolOf(base, group);
          expect(new Set(names).size).toBe(names.length);
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

      test("has no name that contains a digit", () => {
        // A number in the pool becomes a free-floating fragment for FMG's
        // chain, and the generator starts producing things like "Re 128".
        for (const group of ["systems", "polities"] as const) {
          for (const name of poolOf(base, group)) {
            expect(/[0-9]/.test(name)).toBe(false);
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
    const base = findAstralBase("AstralTrek")!;
    const converted = toFmgNameBase(base, 7);
    expect(converted.name).toBe("AstralTrek");
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
    expect(bases).toHaveLength(5);
    expect(bases[0]!.name).toBe("German");
    expect(bases[1]!.name).toBe("English");
    expect(bases.slice(2).map((base) => base.name)).toEqual(["AstralTrek", "AstralJammer", "Grimdark"]);
    expect(changed).toEqual([2, 3, 4]);
  });

  test("replaces our own base in place, keeping its index", () => {
    const existing: FmgNameBase[] = [
      { name: "AstralTrek", i: 0, min: 4, max: 12, d: "lnrs", m: 0, b: "stale,pool" },
      { name: "German", i: 1, min: 5, max: 12, d: "lt", m: 0, b: "A,B,C" },
    ];
    const { bases, changed } = mergeNameBases(existing);
    expect(bases).toHaveLength(4);
    expect(bases[0]!.name).toBe("AstralTrek");
    expect(bases[0]!.i).toBe(0);
    expect(bases[0]!.b).not.toBe("stale,pool");
    expect(bases[0]!.b).toContain("Vega");
    // our base was replaced in place; the two we do not ship yet were appended
    expect(changed).toEqual([0, 2, 3]);
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
    expect(names.nameBases.map((base) => base.name)).toEqual(["AstralTrek", "AstralJammer", "Grimdark"]);
    expect(names.chainUpdates).toEqual([0, 1, 2]);
  });

  test("survives a map load that replaces the array", () => {
    const names = fakeNames();
    installNameBases(names);

    // This is what FMG's loader does: replace the whole array with the save's.
    const fromSave: FmgNameBase[] = [
      { name: "German", i: 0, min: 5, max: 12, d: "lt", m: 0, b: "A,B,C" },
    ];
    names.nameBases = fromSave;

    expect(names.nameBases.map((base) => base.name)).toEqual(["German", "AstralTrek", "AstralJammer", "Grimdark"]);
  });

  test("a save that already carries our bases keeps them in place", () => {
    const names = fakeNames();
    installNameBases(names);

    const fromSave: FmgNameBase[] = [
      { name: "German", i: 0, min: 5, max: 12, d: "lt", m: 0, b: "A,B,C" },
      { name: "AstralTrek", i: 1, min: 4, max: 12, d: "lnrs", m: 0, b: "Vega,Sirius,Rigel" },
    ];
    names.nameBases = fromSave;

    const trek = names.nameBases.find((base) => base.name === "AstralTrek")!;
    expect(trek.i).toBe(1);
    // our content wins over the save's
    expect(trek.b).toContain("Aldebaran");
  });

  test("installing twice does not duplicate the bases", () => {
    const names = fakeNames();
    installNameBases(names);
    installNameBases(names);
    expect(names.nameBases).toHaveLength(3);
  });
});
