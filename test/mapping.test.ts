/**
 * mapping.test.ts — FMG's world, read as a star map.
 *
 * The mapping is small on purpose: a burg becomes a star system with a class
 * and traits, a state becomes a polity named by its culture's own words, and
 * a province becomes a sector.
 */
import { describe, expect, test } from "bun:test";
import {
  peopleOf,
  pickFor,
  sectorWordFor,
  starClass,
  systemTraits,
  systemsOf,
  toSystem,
  TRAITS,
} from "../astral/mapping/index.ts";
import { installNameBases, type FmgNameBase, type FmgNames } from "../astral/name-bases.ts";

/** A stand-in for FMG's Names generator. */
function fakeNames(bases: FmgNameBase[] = []): FmgNames {
  return {
    nameBases: bases,
    getNameBases: () => bases,
    getState: (name: string) => `${name}ia`,
    clearChains: () => {},
    updateChain: () => {},
  };
}

describe("starClass", () => {
  test("reads the star's class off how many people live there", () => {
    expect(starClass(500).class).toBe("M");
    expect(starClass(5_000).class).toBe("K");
    expect(starClass(20_000).class).toBe("G");
    expect(starClass(100_000).class).toBe("F");
    expect(starClass(500_000).class).toBe("A");
    expect(starClass(5_000_000).class).toBe("B");
  });

  test("names every class in words", () => {
    for (const people of [500, 5_000, 20_000, 100_000, 500_000, 5_000_000]) {
      const { name } = starClass(people);
      expect(name.length).toBeGreaterThan(0);
      expect(name).toContain(" ");
    }
  });

  test("a bigger system is a bigger star", () => {
    const order = ["M", "K", "G", "F", "A", "B"];
    const people = [500, 5_000, 20_000, 100_000, 500_000, 5_000_000];
    for (let i = 1; i < people.length; i++) {
      expect(order.indexOf(starClass(people[i]!).class)).toBeGreaterThan(order.indexOf(starClass(people[i - 1]!).class));
    }
  });
});

describe("peopleOf", () => {
  test("speaks in people, using FMG's own scale", () => {
    const options = { map: { units: { population: { scale: 1000, urbanization: { rate: 0.1 } } } } };
    expect(peopleOf({ i: 1, cell: 0, population: 0.5 }, options)).toBe(50);
  });

  test("has a default scale, so it never returns NaN", () => {
    expect(peopleOf({ i: 1, cell: 0, population: 1 })).toBe(100);
  });
});

describe("systemTraits", () => {
  test("reads FMG's installations as ours", () => {
    const burg = {
      i: 1,
      cell: 0,
      port: 1,
      citadel: 1,
      plaza: 1,
      shanty: 1,
      temple: 1,
      walls: 1,
    };
    expect(systemTraits(burg)).toEqual([
      TRAITS.port,
      TRAITS.citadel,
      TRAITS.plaza,
      TRAITS.shanty,
      TRAITS.temple,
      TRAITS.walls,
    ]);
  });

  test("a bare system has no traits", () => {
    expect(systemTraits({ i: 1, cell: 0 })).toEqual([]);
  });
});

describe("toSystem", () => {
  test("reads one burg as one system", () => {
    const options = { map: { units: { population: { scale: 1000, urbanization: { rate: 0.1 } } } } };
    const system = toSystem({ i: 7, cell: 3, name: "Gant", population: 0.5, capital: 1, state: 2, culture: 1 }, options);
    expect(system.id).toBe(7);
    expect(system.name).toBe("Gant");
    expect(system.population).toBe(50);
    expect(system.class).toBe("M");
    expect(system.capital).toBe(true);
    expect(system.state).toBe(2);
    expect(system.culture).toBe(1);
  });
});

describe("systemsOf", () => {
  test("skips the removed and the empty", () => {
    const systems = systemsOf([
      { i: 0, cell: 0 },
      { i: 1, cell: 1, name: "Gant" },
      { i: 2, cell: 2, name: "Sarn", removed: true },
    ]);
    expect(systems.map((system) => system.name)).toEqual(["Gant"]);
  });
});

describe("the words of a polity and a sector", () => {
  test("the same name always gets the same word", () => {
    expect(pickFor(["a", "b", "c"], "Gant")).toBe(pickFor(["a", "b", "c"], "Gant"));
  });

  test("different names get different words, often enough", () => {
    const names = ["Gant", "Sarn", "Kolvat", "Ashfall", "Wharf", "Ilt"];
    const words = new Set(names.map((name) => pickFor(["a", "b", "c"], name)));
    expect(words.size).toBeGreaterThan(1);
  });

  test("a sector is called a sector", () => {
    expect(sectorWordFor("Gant")).toBeTruthy();
    expect(sectorWordFor("Gant")).toBe(sectorWordFor("Gant"));
  });
});

describe("the words of a polity", () => {
  test("never carry an 'of' of their own", async () => {
    const { polityWordFor } = await import("../astral/mapping/polities.ts");
    const names = fakeNames();
    installNameBases(names);

    // the culture names from one of our bases
    const baseId = names.nameBases.findIndex((base) => base.name === "Grimdark Core");
    (globalThis as { pack?: unknown }).pack = { cultures: [{ base: baseId }] };
    try {
      for (const name of ["Gant", "Sarn", "Whithclif", "Starvalere", "Draskfen", "Kolvat"]) {
        const word = polityWordFor(names, 0, name);
        expect(word).toBeTruthy();
        expect(word).not.toMatch(/\bof\b/i);
      }
    } finally {
      delete (globalThis as { pack?: unknown }).pack;
    }
  });

  test("a stock culture keeps FMG's own word", async () => {
    const { polityWordFor } = await import("../astral/mapping/polities.ts");
    const stock: FmgNameBase[] = [{ name: "German", i: 0, min: 5, max: 12, d: "lt", m: 0, b: "A,B,C" }];
    const names = fakeNames(stock);
    installNameBases(names);
    // culture 0 names from the stock base
    (globalThis as { pack?: unknown }).pack = { cultures: [{ base: 0 }] };
    try {
      expect(polityWordFor(names, 0, "Gant")).toBeUndefined();
    } finally {
      delete (globalThis as { pack?: unknown }).pack;
    }
  });
});

describe("the mapping installed over FMG", () => {
  test("a state of one of our bases keeps its name, with no fantasy suffix", async () => {
    const { installMapping } = await import("../astral/mapping/index.ts");
    const stock: FmgNameBase[] = [{ name: "German", i: 0, min: 5, max: 12, d: "lt", m: 0, b: "A,B,C" }];
    const names = fakeNames(stock);
    installNameBases(names);
    installMapping(names);

    // FMG would have made "Gantia" out of "Gant"
    const ourBase = names.nameBases.findIndex((base) => base.name === "Trek Core");
    (globalThis as { pack?: unknown }).pack = { cultures: [{ base: ourBase }], states: [], provinces: [], burgs: [] };
    try {
      expect(names.getState("Gant", 0)).toBe("Gant");
      // a stock base still gets FMG's own treatment
      expect(names.getState("Gant", 0, 0)).toBe("Gantia");
    } finally {
      delete (globalThis as { pack?: unknown }).pack;
    }
  });
});
