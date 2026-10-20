var __defProp = Object.defineProperty;
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};

// astral/dev/reload.ts
var exports_reload = {};
__export(exports_reload, {
  watchBundle: () => watchBundle
});
function buildIdUrl() {
  try {
    return new URL("build-id.txt", import.meta.url).href;
  } catch {
    return null;
  }
}
function watchBundle() {
  const url = buildIdUrl();
  if (!url)
    return;
  let last = null;
  const tick = async () => {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok)
        return;
      const id = (await response.text()).trim();
      if (last === null) {
        last = id;
        return;
      }
      if (id !== last) {
        last = id;
        location.reload();
      }
    } catch {}
  };
  setInterval(() => void tick(), POLL_MS);
}
var POLL_MS = 1000;

// astral/content/name-bases/astral-jammer.ts
var astralJammer = {
  name: "AstralJammer",
  min: 6,
  max: 16,
  d: "srlm",
  groups: {
    systems: [
      "Rosette Nebula",
      "Crab Nebula",
      "Helix Nebula",
      "Ring Nebula",
      "Cat's Eye",
      "Eagle Nebula",
      "Horsehead Nebula",
      "Pelican Nebula",
      "Flame Nebula",
      "Cone Nebula",
      "Boomerang Nebula",
      "Retina Nebula",
      "Ant Nebula",
      "Beehive Cluster",
      "Omega Centauri",
      "Hercules Cluster",
      "Double Cluster",
      "Wild Duck Cluster",
      "Coma Cluster",
      "Triangulum Galaxy",
      "Sombrero Galaxy",
      "Whirlpool Galaxy",
      "Pinwheel Galaxy",
      "Cigar Galaxy",
      "Bode's Galaxy",
      "Sculptor Galaxy",
      "Andromeda Galaxy",
      "Large Magellanic Cloud",
      "Small Magellanic Cloud",
      "Local Bubble",
      "Gould Belt",
      "Oort Cloud",
      "Kuiper Belt",
      "Scattered Disc",
      "Rho Ophiuchi",
      "Taurus Molecular Cloud",
      "Orion Complex",
      "Local Arm",
      "Sagittarius Arm",
      "Scutum Arm",
      "Perseus Arm",
      "Norma Arm",
      "Carina Arm",
      "Crux Arm",
      "Aquila Rift",
      "Great Rift",
      "Coalsack",
      "Circlet",
      "Lambda Centauri",
      "W Carinae",
      "Aeleva",
      "Aelith",
      "Aeloria",
      "Aelori",
      "Aelun",
      "Aevora",
      "Aevun",
      "Aruun",
      "Aruuna",
      "Aurith",
      "Caeluma",
      "Celume",
      "Elumel",
      "Elyra",
      "Elyth",
      "Ilyana",
      "Ilymar",
      "Ilyran",
      "Ilyth",
      "Ilyven",
      "Ilumara",
      "Ilumel",
      "Nacreous",
      "Naurith",
      "Nelith",
      "Nethis",
      "Nyrian",
      "Olyven",
      "Onaar",
      "Ophira",
      "Oryavan",
      "Orysa",
      "Oseva",
      "Ouevan",
      "Ovelia",
      "Oveon",
      "Ovi",
      "Rysael",
      "Selaia",
      "Selune",
      "Senvara",
      "Sirael",
      "Sorynth",
      "Suvara",
      "Thalassa",
      "Thalor",
      "Thalune",
      "Thavil",
      "Thela",
      "Thessa",
      "Thuvia",
      "Vaelen",
      "Vaelith",
      "Vaelora",
      "Vanthea",
      "Velsan",
      "Veloria",
      "Vireth",
      "Vossan",
      "Ylora",
      "Ylume",
      "Yssael",
      "Yssara",
      "Yssian",
      "Ythara"
    ],
    polities: [
      "Aeon",
      "Chorus",
      "Lattice",
      "Weave",
      "Resonance",
      "Meridian",
      "Zenith",
      "Aphelion",
      "Perihelion",
      "Syzygy",
      "Eidolon",
      "Choir",
      "Harmonic",
      "Symphony",
      "Emanation",
      "Aurora",
      "Halcyon",
      "Nimbus",
      "Cascade",
      "Confluence",
      "Vergence",
      "Solstice",
      "Equinox",
      "Parallax",
      "Antipode",
      "Umbra",
      "Penumbra",
      "Corona",
      "Halo",
      "Sigil",
      "Glyph",
      "Cipher",
      "Almanac",
      "Cadenza",
      "Modality",
      "Octave",
      "Interval",
      "Phrase",
      "Measure",
      "Cadence",
      "Aria",
      "Aural",
      "Sillage",
      "Nocturne",
      "Symphony of Tides",
      "Chorus of Bells",
      "Lattice of Nine",
      "Eidolon Assembly",
      "Aurora Compact",
      "Cascade Concord",
      "Solstice Directorate",
      "Meridian Union",
      "Aeon Hegemony",
      "Zenith Covenant",
      "Umbra Compact",
      "Glyph Assembly",
      "Parallax League",
      "Sigil Dominion"
    ]
  }
};

// astral/content/name-bases/astral-trek.ts
var astralTrek = {
  name: "AstralTrek",
  min: 4,
  max: 12,
  d: "lnrs",
  groups: {
    systems: [
      "Vega",
      "Sirius",
      "Rigel",
      "Altair",
      "Deneb",
      "Aldebaran",
      "Antares",
      "Spica",
      "Capella",
      "Procyon",
      "Canopus",
      "Achernar",
      "Betelgeuse",
      "Bellatrix",
      "Pollux",
      "Castor",
      "Regulus",
      "Algol",
      "Mizar",
      "Alcor",
      "Dubhe",
      "Merak",
      "Phecda",
      "Megrez",
      "Alioth",
      "Schedar",
      "Mintaka",
      "Alnilam",
      "Alnitak",
      "Saiph",
      "Meissa",
      "Nunki",
      "Kaus",
      "Ascella",
      "Izar",
      "Muphrid",
      "Denebola",
      "Zosma",
      "Algieba",
      "Rasalgethi",
      "Almach",
      "Hamal",
      "Diphda",
      "Mirach",
      "Alpheratz",
      "Sadalsuud",
      "Sadalmelik",
      "Ankaa",
      "Acamar",
      "Rigil",
      "Hadar",
      "Menkalinan",
      "Atria",
      "Alsephina",
      "Suhail",
      "Regor",
      "Avior",
      "Arneb",
      "Peacock",
      "Alphard",
      "Zubenelgenubi",
      "Unukalhai",
      "Sheratan",
      "Markab",
      "Sadr",
      "Eltanin",
      "Albireo",
      "Rastaban",
      "Alcyone",
      "Maia",
      "Merope",
      "Taygeta",
      "Atlas",
      "Matar",
      "Acubens",
      "Shaula",
      "Sabik",
      "Cebalrai",
      "Cor Caroli",
      "Mebsuta",
      "Propus",
      "Wasat",
      "Nihal",
      "Gienah",
      "Kraz",
      "Alula",
      "Talitha",
      "Kochab",
      "Thuban",
      "Andromeda",
      "Cassiopeia",
      "Cepheus",
      "Perseus",
      "Pegasus",
      "Aquila",
      "Cygnus",
      "Lyra",
      "Draco",
      "Hercules",
      "Auriga",
      "Bootes",
      "Ophiuchus",
      "Centaurus",
      "Carina",
      "Vela",
      "Puppis",
      "Lupus",
      "Apus",
      "Pavo",
      "Phoenix",
      "Grus",
      "Indus",
      "Tucana",
      "Dorado",
      "Volans",
      "Pyxis",
      "Crater",
      "Fornax",
      "Lepus",
      "Corvus",
      "Monoceros",
      "Camelopardalis",
      "Hydrus",
      "Columba",
      "Circinus",
      "Mensa",
      "Norma",
      "Reticulum",
      "Horologium",
      "Pictor",
      "Sculptor",
      "Lynx",
      "Coma",
      "Antlia",
      "Caelum",
      "Octans",
      "Vulpecula",
      "Equuleus",
      "Lacerta",
      "Sagitta",
      "Delphinus",
      "Cetus",
      "Eridanus",
      "Serpens",
      "Corona",
      "Sagittarius",
      "Capricornus",
      "Aquarius",
      "Pisces",
      "Aries",
      "Taurus",
      "Gemini",
      "Cancer",
      "Leo",
      "Virgo",
      "Libra",
      "Proxima Centauri",
      "Barnard's Star",
      "Luyten's Star",
      "Tau Ceti",
      "Epsilon Eridani",
      "Eta Carinae",
      "Van Maanen",
      "Kapteyn's Star",
      "Pi Mensae",
      "Eta Cassiopeiae"
    ],
    polities: [
      "United Federation",
      "Solar Compact",
      "Galactic Union",
      "Core Worlds",
      "Rim Worlds",
      "Free Worlds",
      "Terran Concord",
      "Mining Combine",
      "Trade Federation",
      "Inner Reach",
      "Outer Reach",
      "Star League",
      "Border Worlds",
      "Explorer's Guild",
      "Merchant Compact",
      "Colonial Assembly",
      "Systems Directorate",
      "Neutral Zone Authority",
      "Galactic Directorate",
      "Concord of Systems",
      "Compact of Worlds",
      "Union of Worlds",
      "Assembly of Worlds",
      "Rim Confederacy",
      "Reach Protectorate",
      "Solar Assembly",
      "Research Concord",
      "Veteran Coalition",
      "Free Settlements",
      "Inner Systems",
      "Outer Systems",
      "Core Assembly",
      "Meridian League",
      "Dominion of the Reach",
      "Federation",
      "Compact",
      "Dominion",
      "Assembly",
      "Republic",
      "Union",
      "Confederacy",
      "Directorate",
      "Hegemony",
      "Combine",
      "Consortium",
      "Accord",
      "Covenant",
      "Commonwealth",
      "Mandate",
      "Alliance",
      "Coalition",
      "League",
      "Enclave"
    ]
  }
};

// astral/content/name-bases/grimdark.ts
var grimdark = {
  name: "Grimdark",
  min: 3,
  max: 10,
  d: "rdkltn",
  groups: {
    systems: [
      "Ashen Ford",
      "Ironhold",
      "Hollowmarch",
      "Cinder Reach",
      "Grimhold",
      "Terminus",
      "Scorched Reach",
      "Blackreach",
      "Red Waste",
      "Rust Sea",
      "Ashfall",
      "Cinderfall",
      "The Warrens",
      "The Reaches",
      "The Deeps",
      "Low Orbit",
      "High Orbit",
      "Gravehold",
      "Mournspire",
      "Mournwatch",
      "Kilnhold",
      "Slagworks",
      "Ashcross",
      "Blackmoor",
      "Duskmere",
      "Grimwater",
      "Ironmouth",
      "Redmarrow",
      "Saltgrave",
      "Rustmourn",
      "Sorrowfen",
      "Emberfall",
      "Hollowdeep",
      "Coldvault",
      "Nettlebone",
      "Boneyard",
      "Carrion",
      "Marrow",
      "Ossuary",
      "Pyre",
      "Lazarus",
      "Nadir",
      "Stark",
      "Vantage",
      "Vigil",
      "Oath",
      "Grudge",
      "Wrack",
      "Slag",
      "Kiln",
      "Cradle",
      "Rend",
      "Grave",
      "Deadlight",
      "Lighthouse",
      "Signal",
      "Relay",
      "Beacon",
      "Anchor",
      "Mooring",
      "Jetty",
      "Gantry",
      "Sluice",
      "Weir",
      "Lockgate",
      "Causeway",
      "Switchyard",
      "Yard",
      "Siding",
      "Halt",
      "Junction",
      "Crossroads",
      "Interchange",
      "Scrapyard",
      "Ashpit",
      "Cinderpit",
      "Dustbowl",
      "Saltflat",
      "Mudflat",
      "Ashfield",
      "Ironfield",
      "Bonefield",
      "Saltmarsh",
      "Blackfen",
      "Redfen",
      "Greymoor",
      "Duskmarch",
      "Kald",
      "Vorn",
      "Grull",
      "Kregg",
      "Hexis",
      "Morg",
      "Tarn",
      "Zul",
      "Sarn",
      "Vorak",
      "Drekkan",
      "Malachai",
      "Krovv",
      "Hallow",
      "Kaine",
      "Rudd",
      "Brack",
      "Skarn",
      "Thrax",
      "Ghor",
      "Vhek",
      "Morad",
      "Keth",
      "Zarn",
      "Drask",
      "Ovre",
      "Ilt",
      "Kral",
      "Skel",
      "Vor",
      "Sector Seven",
      "Gutter",
      "Kessel",
      "Nuir",
      "Brin",
      "Thann",
      "Ossuary Gate",
      "Gallow",
      "Fenris",
      "Kolt",
      "Dragan",
      "Cinder Gate",
      "Rustmouth",
      "Greyhold",
      "Slagmouth",
      "Coldforge"
    ],
    polities: [
      "Iron Compact",
      "The Ninth Legion",
      "The Ashen Concord",
      "Blood Ledger",
      "The Custodians",
      "The Nine Houses",
      "The Syndicate",
      "The Reach Compact",
      "The Covenant",
      "The Custodianate",
      "The Hearth",
      "The Choir",
      "The Chosen",
      "The Rust Kingdoms",
      "The Kettle",
      "The Tally",
      "The Tower",
      "The Bastion",
      "The Foundry",
      "The Pit",
      "The Long Dark",
      "The Ninth Fleet",
      "The Grin Trade",
      "The Black Ledger",
      "The Furnace",
      "The Salt Roads",
      "The Cold Reach",
      "Imperium",
      "Coven",
      "Reign",
      "Ascendancy",
      "Holdfast",
      "Bastion",
      "Combine",
      "Trust",
      "Guild",
      "Consortium",
      "Assembly",
      "Compact",
      "Dominion",
      "Legion",
      "Chapter",
      "Wardens",
      "Ledger",
      "Grin",
      "Hearth",
      "Kettle"
    ]
  }
};

// astral/content/name-bases/types.ts
function poolOf(base, group) {
  return [...base.groups[group]];
}
function poolString(base, group) {
  return poolOf(base, group).join(",");
}

// astral/content/name-bases/index.ts
var ASTRAL_NAME_BASES = [astralTrek, astralJammer, grimdark];

// astral/name-bases.ts
var PRIMARY_GROUP = "systems";
function toFmgNameBase(base, index) {
  return {
    name: base.name,
    i: index,
    min: base.min,
    max: base.max,
    d: base.d,
    m: 0,
    b: poolString(base, PRIMARY_GROUP)
  };
}
function mergeNameBases(existing, ours = ASTRAL_NAME_BASES) {
  const bases = existing.map((base, index) => ({ ...base, i: index }));
  const changed = [];
  for (const base of ours) {
    const converted = toFmgNameBase(base, bases.length);
    const index = bases.findIndex((candidate) => candidate.name === base.name);
    if (index >= 0) {
      const current = bases[index];
      const same = current.b === converted.b && current.min === converted.min && current.max === converted.max && current.d === converted.d;
      if (same)
        continue;
      bases[index] = { ...current, ...converted, i: index };
      changed.push(index);
    } else {
      bases.push(converted);
      changed.push(converted.i);
    }
  }
  return { bases, changed };
}
function installNameBases(names) {
  const descriptor = Object.getOwnPropertyDescriptor(names, "nameBases");
  if (!descriptor?.get) {
    let current = descriptor?.value ?? [];
    Object.defineProperty(names, "nameBases", {
      configurable: true,
      enumerable: true,
      get: () => current,
      set: (value) => {
        current = mergeNameBases(Array.isArray(value) ? value : []).bases;
      }
    });
  }
  const merged = mergeNameBases(names.nameBases);
  names.nameBases = merged.bases;
  for (const index of merged.changed)
    names.updateChain(index);
  return merged;
}

// astral/entry.ts
var VERSION = "0.1.0";
function boot() {
  if (typeof window === "undefined")
    return;
  const names = window.Names;
  if (!names) {
    console.error("Astral Cartographer: FMG's Names generator is not available — the mod did not load");
    return;
  }
  installNameBases(names);
  window.Astral = {
    version: VERSION,
    nameBases: ASTRAL_NAME_BASES,
    pool: (baseName, group) => {
      const base = ASTRAL_NAME_BASES.find((candidate) => candidate.name === baseName);
      return base ? poolOf(base, group) : [];
    },
    install: () => {
      installNameBases(names);
    }
  };
  console.info(`Astral Cartographer ${VERSION}: registered ${ASTRAL_NAME_BASES.length} name bases — ${ASTRAL_NAME_BASES.map((base) => base.name).join(", ")}`);
}
boot();
if (typeof window !== "undefined" && window.__ASTRAL_DEV__) {
  Promise.resolve().then(() => exports_reload).then((module) => module.watchBundle());
}
export {
  VERSION
};
