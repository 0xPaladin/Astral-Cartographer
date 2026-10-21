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

// astral/content/naming/astral-jammer.ts
var jammerDeep = {
  name: "Jammer Deep",
  set: "AstralJammer",
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
var jammerEthereal = {
  name: "Jammer Ethereal",
  set: "AstralJammer",
  min: 6,
  max: 16,
  d: "lsn",
  groups: {
    systems: [
      "Aelindor",
      "Celandine",
      "Ilythiel",
      "Miraliel",
      "Serevain",
      "Thaeniel",
      "Vaelithir",
      "Yssarael",
      "Lumaviel",
      "Narethil",
      "Elythiel",
      "Silverane",
      "Thaevion",
      "Caelithis",
      "Orinathil",
      "Virelith",
      "Savaethis",
      "Aluneth",
      "Ilythea",
      "Nemeon",
      "Seraviel",
      "Thaelyn",
      "Velithis",
      "Aelindis",
      "Caelanthi",
      "Eluvien",
      "Ilythara",
      "Naerithil",
      "Ovelinde",
      "Serephon",
      "Thaenara",
      "Uelindis",
      "Vaelithor",
      "Ylathiel",
      "Aerandel",
      "Calenith",
      "Elythora",
      "Ilyvaine",
      "Naelithir",
      "Savaethine",
      "Thaerion",
      "Velindis",
      "Aelunthe",
      "Caelindor",
      "Elynara",
      "Lyravel",
      "Naraethis",
      "Olythiel",
      "Seryndel",
      "Thaevindis",
      "Uelithor",
      "Vaelin",
      "Aelunwen",
      "Caelorith",
      "Elytharen",
      "Ilythanel",
      "Naevindor",
      "Savaelune",
      "Ylathire",
      "Aelivian",
      "Caeluneth",
      "Elyvindis",
      "Ilyraeth",
      "Naluvien",
      "Serevandil",
      "Thaelindor",
      "Uelathis",
      "Vaenareth",
      "Yssalune",
      "Aelunmere",
      "Caelethra",
      "Ilythaven",
      "Savaeryth",
      "Thaenelith",
      "Vaelunara"
    ],
    polities: [
      "The Silver Compact",
      "Ethereal Concordance",
      "The Long Kin",
      "Aelish Dominion",
      "Sovereign of the Veil",
      "The Weaving",
      "Children of the Light",
      "The Quiet Court",
      "The Silver Houses",
      "The Sundering",
      "The Gilded Choir",
      "The Veiled Realm",
      "The Eldest Compact",
      "The Ninefold Kin",
      "The Last Weave",
      "Kin of the Quiet",
      "The Verdant Accord",
      "The Silver Nine",
      "The Long Covenant",
      "The House of Stars"
    ]
  }
};
var jammerStoneborn = {
  name: "Jammer Stoneborn",
  set: "AstralJammer",
  min: 4,
  max: 11,
  d: "rdkltn",
  groups: {
    systems: [
      "Kazad",
      "Borun",
      "Grusk",
      "Dolvar",
      "Thokk",
      "Barok",
      "Karnak",
      "Vundr",
      "Morgran",
      "Zulbak",
      "Hammerdeep",
      "Stonevane",
      "Deepdelve",
      "Ironroot",
      "Coldshaft",
      "Granitehold",
      "Deepvault",
      "Rockstride",
      "Stonewrought",
      "Delvehold",
      "Korvad",
      "Grundar",
      "Borrik",
      "Drakmoor",
      "Forgehold",
      "Gloomdeep",
      "Hadrun",
      "Ironvein",
      "Karhold",
      "Lurdepth",
      "Morvak",
      "Norhold",
      "Blackglass",
      "Prondel",
      "Quarhold",
      "Redvein",
      "Stonewell",
      "Tharnak",
      "Underforge",
      "Vaultdeep",
      "Wadrun",
      "Yarkhold",
      "Zanthor",
      "Duskvein",
      "Emberforge",
      "Flintdelve",
      "Greyvein",
      "Hollowvein",
      "Ivarkhold",
      "Jarndeep",
      "Kolvat",
      "Mirendal",
      "Norgrave",
      "Ohrn",
      "Pyrrhold",
      "Quarreldepth",
      "Runestone",
      "Saltvein",
      "Thornvein",
      "Umbervein",
      "Wartsteel",
      "Ymirthold",
      "Drakhelm",
      "Kharzun",
      "Malkarr",
      "Orrvane",
      "Skarrad",
      "Thurkhal"
    ],
    polities: [
      "The Deep Compact",
      "Holds of Stone",
      "The Deepforge",
      "Clan Dominion",
      "The Deep Council",
      "The Forge Compact",
      "The Stone Nine",
      "Deepkin",
      "The Ember Clans",
      "The Iron Compact",
      "Delve Dominion",
      "The Mountain Covenant",
      "The Ore Syndicates",
      "The Deep Republic",
      "The Stone League",
      "The Anvil",
      "Holdfast Compact",
      "The Ore Compact",
      "The Burrow Nine",
      "The Deep Charters"
    ]
  }
};
var jammerWild = {
  name: "Jammer Wild",
  set: "AstralJammer",
  min: 3,
  max: 9,
  d: "rk",
  groups: {
    systems: [
      "Gnash",
      "Skrit",
      "Vorrel",
      "Thugga",
      "Skaal",
      "Rukk",
      "Ghar",
      "Bhul",
      "Harsk",
      "Urgl",
      "Tuck",
      "Werr",
      "Zibb",
      "Klud",
      "Oggra",
      "Reth",
      "Snarl",
      "Grish",
      "Yerg",
      "Drogg",
      "Hulg",
      "Mraak",
      "Nark",
      "Pish",
      "Quorl",
      "Snag",
      "Thrush",
      "Ulk",
      "Vesk",
      "Yurd",
      "Zurr",
      "Ghaal",
      "Brok",
      "Skegg",
      "Ulgh",
      "Drash",
      "Grash",
      "Mugg",
      "Wug",
      "Zob",
      "Bruk",
      "Crav",
      "Dush",
      "Froth",
      "Gitch",
      "Hob",
      "Jark",
      "Krew",
      "Lumb",
      "Nabb",
      "Ock",
      "Prow",
      "Rusk",
      "Shol",
      "Trub",
      "Yur",
      "Zukk",
      "Gnarl",
      "Bruck",
      "Skarr",
      "Vhul",
      "Mugga",
      "Ruk"
    ],
    polities: [
      "The Hunting Clans",
      "The Wild Swarm",
      "Blood Clans",
      "The Red Hand",
      "Pack Dominion",
      "The Ravening",
      "The Snarl",
      "The Hunt",
      "Clan Swarm",
      "The Feral League",
      "Red Fist",
      "The Broken Pack",
      "The Sated",
      "Ravenous Clans",
      "The Wild Compact",
      "The Hunting Compact",
      "The Scavenger Clans",
      "Feral Compact",
      "The Blood Compact",
      "The Wild Nine"
    ]
  }
};
var astralJammer = {
  name: "AstralJammer",
  max: 16,
  probability: 5,
  cultures: [
    { name: "Ethereal (Kindred)", base: "Jammer Ethereal", shield: "vesicaPiscis", odd: 1, placement: "remote" },
    { name: "Silver Kin (Kindred)", base: "Jammer Ethereal", shield: "fantasy1", odd: 0.8, placement: "any" },
    { name: "Morning Star (Kindred)", base: "Jammer Ethereal", shield: "fantasy5", odd: 0.6, placement: "remote" },
    { name: "Long Memory (Kindred)", base: "Jammer Ethereal", shield: "fantasy3", odd: 0.5, placement: "any" },
    { name: "Stoneborn (Deep)", base: "Jammer Stoneborn", shield: "wedged", odd: 0.9, placement: "harsh" },
    { name: "Deepkin (Deep)", base: "Jammer Stoneborn", shield: "fantasy2", odd: 0.7, placement: "harsh" },
    { name: "Ironvein (Deep)", base: "Jammer Stoneborn", shield: "square", odd: 0.6, placement: "harsh" },
    { name: "Old Delvers (Deep)", base: "Jammer Stoneborn", shield: "hexagon", odd: 0.5, placement: "any" },
    { name: "Wild (Ferals)", base: "Jammer Wild", shield: "moriaOrc", odd: 0.8, placement: "harsh" },
    { name: "Scavengers (Ferals)", base: "Jammer Wild", shield: "fantasy4", odd: 0.6, placement: "any" },
    { name: "Red Clans (Ferals)", base: "Jammer Wild", shield: "targe", odd: 0.5, placement: "harsh" },
    { name: "The Hunt (Ferals)", base: "Jammer Wild", shield: "pavise", odd: 0.4, placement: "remote" },
    { name: "Deep Choir (Collective)", base: "Jammer Deep", shield: "gonfalon", odd: 0.7, placement: "any" },
    { name: "Far Chorus (Collective)", base: "Jammer Deep", shield: "flag", odd: 0.5, placement: "remote" },
    { name: "Hollow Kin (Collective)", base: "Jammer Deep", shield: "diamond", odd: 0.5, placement: "harsh" },
    { name: "Wandering Song (Collective)", base: "Jammer Deep", shield: "dovetail", odd: 0.4, placement: "any" }
  ]
};

// astral/content/naming/astral-trek-derived.ts
var TREK_DERIVED_SPECS = [
  {
    name: "Trek English",
    set: "AstralTrek",
    from: "English",
    polities: [
      "Colony",
      "Mandate",
      "Company",
      "Charter",
      "Commonwealth",
      "Protectorate",
      "Directorate",
      "Compact",
      "Assembly",
      "Commission",
      "Corporation",
      "Bureau",
      "Consortium",
      "Confederacy",
      "Republic",
      "Union",
      "Federation",
      "Franchise",
      "Combine",
      "Enclave",
      "Autonomy",
      "Condominium",
      "Prefecture",
      "District"
    ]
  },
  {
    name: "Trek German",
    set: "AstralTrek",
    from: "German",
    polities: [
      "Bund",
      "Reich",
      "Kreis",
      "Mark",
      "Freistaat",
      "Kontor",
      "Kontorat",
      "Zunft",
      "Gilde",
      "Eidgenossenschaft",
      "Kaiserreich",
      "Protektorat",
      "Direktorat",
      "Kammer",
      "Kanzlei",
      "Verband",
      "Staat",
      "Handelshaus",
      "Handelskompanie",
      "Garnison",
      "Kolonie"
    ]
  },
  {
    name: "Trek Chinese",
    set: "AstralTrek",
    from: "Chinese",
    polities: [
      "Canton",
      "Commandery",
      "Circuit",
      "Prefecture",
      "Directorate",
      "Protectorate",
      "Assembly",
      "Compact",
      "Confederacy",
      "Mandate",
      "Bureau",
      "Chancery",
      "Syndicate",
      "Concord",
      "Combine",
      "Guild",
      "Province",
      "League",
      "Enclave",
      "Colony",
      "Union",
      "Federation",
      "Administration",
      "Company"
    ]
  },
  {
    name: "Trek Nigerian",
    set: "AstralTrek",
    from: "Nigerian",
    polities: [
      "Assembly",
      "Confederacy",
      "Compact",
      "Directorate",
      "Company",
      "Charter",
      "Covenant",
      "Concord",
      "Pact",
      "League",
      "Union",
      "Commonwealth",
      "Protectorate",
      "Trust",
      "Combine",
      "Bureau",
      "Commission",
      "Enclave",
      "Consortium",
      "Colony",
      "Mandate",
      "Hegemony",
      "Marque",
      "Caravan"
    ]
  },
  {
    name: "Trek Vietnamese",
    set: "AstralTrek",
    from: "Vietnamese",
    polities: [
      "Delta",
      "Basin",
      "Estuary",
      "Confluence",
      "Prefecture",
      "Directorate",
      "Company",
      "Mandate",
      "Compact",
      "Assembly",
      "Confederacy",
      "League",
      "Union",
      "Bureau",
      "Chancery",
      "Commandery",
      "Protectorate",
      "Concord",
      "Enclave",
      "Guild",
      "Combine",
      "Commission",
      "Consortium",
      "Colony"
    ]
  },
  {
    name: "Trek Arabic",
    set: "AstralTrek",
    from: "Arabic",
    polities: [
      "Emirate",
      "Caliphate",
      "Sultanate",
      "Sheikhdom",
      "Governorate",
      "Directorate",
      "Compact",
      "Assembly",
      "Company",
      "Charter",
      "Bureau",
      "Consortium",
      "Confederacy",
      "League",
      "Union",
      "Protectorate",
      "Mandate",
      "Colony",
      "Trust",
      "Combine",
      "Commission",
      "Enclave",
      "Concord",
      "Pact"
    ]
  },
  {
    name: "Trek Karnataka",
    set: "AstralTrek",
    from: "Karnataka",
    polities: [
      "Carnatic",
      "Canton",
      "Commandery",
      "Diwan",
      "Concil",
      "Assembly",
      "Compact",
      "Directorate",
      "Company",
      "Charter",
      "League",
      "Union",
      "Confederacy",
      "Mandate",
      "Protectorate",
      "Guild",
      "Combine",
      "Bureau",
      "Commission",
      "Consortium",
      "Colony",
      "Enclave",
      "Concord",
      "Pact"
    ]
  },
  {
    name: "Trek Orc",
    set: "AstralTrek",
    from: "Orc",
    polities: [
      "Warband",
      "Warhost",
      "Clan",
      "Clanhold",
      "Kraal",
      "Horde",
      "Stronghold",
      "Raiding",
      "Muster",
      "Guild",
      "Pact",
      "Covenant",
      "Assembly",
      "Confederacy",
      "Compact",
      "Coalition",
      "Hegemony",
      "Dominion",
      "Alliance",
      "League",
      "Company",
      "Combine",
      "Directorate",
      "Marches"
    ]
  },
  {
    name: "Trek Goblin",
    set: "AstralTrek",
    from: "Goblin",
    polities: [
      "Warren",
      "Artel",
      "Collective",
      "Syndicate",
      "Cartel",
      "Salvage",
      "Trove",
      "Muster",
      "Tally",
      "Guild",
      "Chamber",
      "Cohort",
      "Company",
      "Combine",
      "Consortium",
      "Accord",
      "Compact",
      "Confederacy",
      "Assembly",
      "Pact",
      "Clan",
      "Crew",
      "Gang",
      "Smelter"
    ]
  },
  {
    name: "Trek Elven",
    set: "AstralTrek",
    from: "Elven",
    polities: [
      "Concord",
      "Assembly",
      "Aerie",
      "Sanctum",
      "Covenant",
      "Circle",
      "College",
      "Choir",
      "Lattice",
      "Conclave",
      "Pact",
      "Accord",
      "League",
      "Alliance",
      "Commonwealth",
      "Consortium",
      "Foundation",
      "Repository",
      "Archive",
      "Observatory",
      "Custodians",
      "Wardens",
      "Elderate",
      "Communion"
    ]
  },
  {
    name: "Trek Dark Elven",
    set: "AstralTrek",
    from: "Dark Elven",
    polities: [
      "Covenant",
      "Consortium",
      "Syndicate",
      "Veil",
      "Cabinet",
      "Circle",
      "Sect",
      "Conclave",
      "Compact",
      "Accord",
      "Pact",
      "League",
      "Alliance",
      "Hegemony",
      "Dominion",
      "Spire",
      "Hollow",
      "Cabal",
      "Trust",
      "Vault",
      "Bureau",
      "Directorate",
      "Enclave",
      "Protectorate"
    ]
  },
  {
    name: "Trek Arachnid",
    set: "AstralTrek",
    from: "Arachnid",
    polities: [
      "Brood",
      "Broodmother",
      "Hive",
      "Web",
      "Nest",
      "Colony",
      "Carapace",
      "Molting",
      "Silicate",
      "Chitin",
      "Swarm",
      "Drift",
      "Burrow",
      "Cocoon",
      "Hatchery",
      "Assembly",
      "Compact",
      "Confederacy",
      "Hegemony",
      "Dominion",
      "Enclave",
      "Pact",
      "Accord",
      "Concord"
    ]
  }
];

// astral/content/naming/astral-trek.ts
var trekCore = {
  name: "Trek Core",
  set: "AstralTrek",
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
      "Galactic Union",
      "Core Worlds",
      "Rim Worlds",
      "Free Worlds",
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
var trekTerran = {
  name: "Trek Terran",
  set: "AstralTrek",
  min: 5,
  max: 12,
  d: "lnrs",
  groups: {
    systems: [
      "Ashford",
      "Bramwell",
      "Catterwick",
      "Dunsmore",
      "Eastvale",
      "Fennwick",
      "Garrick",
      "Hollowbrook",
      "Ilminster",
      "Jarrow",
      "Kestrel Bay",
      "Langmere",
      "Marlowe",
      "Netherby",
      "Oakhurst",
      "Pinehill",
      "Quarrow",
      "Redhaven",
      "Stonebridge",
      "Thistlewood",
      "Underhill",
      "Whitcombe",
      "Yarrowdale",
      "Aldermoor",
      "Birchhollow",
      "Coldstream",
      "Dunmore",
      "Elmsworth",
      "Foxhall",
      "Glenrow",
      "Harrowgate",
      "Inglewood",
      "Jessamine",
      "Kirkbride",
      "Longmoss",
      "Millbrook",
      "Norbury",
      "Overton",
      "Ravensworth",
      "Saltmarsh",
      "Tarnbrook",
      "Vinehall",
      "Weald",
      "Yewtree",
      "Amberwick",
      "Blackthorn",
      "Copperfield",
      "Draycott",
      "Eastwick",
      "Fernlea",
      "Greenhithe",
      "Hartsmere",
      "Ivybridge",
      "Kingsmead",
      "Larkhall",
      "Meadowcroft",
      "Nightingale",
      "Orchard End",
      "Pentland",
      "Quenby",
      "Rowan Hill",
      "Stowmarket",
      "Thurlby",
      "Upwell",
      "Viney Cross",
      "Wexford",
      "Yateley",
      "Marchmont",
      "Ashcombe",
      "Brindle",
      "Chalfont",
      "Denholme",
      "Elmscot",
      "Farleigh",
      "Gowerby",
      "Hawkridge",
      "Ilkeston",
      "Jesmonde",
      "Kirtling",
      "Loxley",
      "Mereworth",
      "Nunburnholme",
      "Oswaldkirk",
      "Padstow",
      "Quorndon",
      "Riddington",
      "Somerby",
      "Tillingham",
      "Upleatham",
      "Warkworth",
      "Yaxley"
    ],
    polities: [
      "Terran Union",
      "United Earth",
      "Earth Assembly",
      "Commonwealth of Earth",
      "Earth Directorate",
      "Solar Compact",
      "United Worlds",
      "Core Assembly",
      "Interstellar Union",
      "Earth League",
      "Coalition of Worlds",
      "Concord of Earth",
      "World Council",
      "Earth Federation",
      "Pact of Worlds",
      "Terran Concord",
      "Union of Mankind",
      "Mankind Compact",
      "Earth Protectorate",
      "Global Assembly",
      "Chamber of Worlds",
      "First Concord",
      "Assembly of Mankind",
      "Republic of Earth",
      "Earth Compact"
    ]
  }
};
var trekContinental = {
  name: "Trek Continental",
  set: "AstralTrek",
  min: 5,
  max: 13,
  d: "nlrs",
  groups: {
    systems: [
      "Valmont",
      "Auberive",
      "Cervin",
      "Douran",
      "Estere",
      "Ferran",
      "Garibal",
      "Hollen",
      "Ivria",
      "Jarnac",
      "Kelvar",
      "Lucerne",
      "Mirabel",
      "Novara",
      "Obernd",
      "Provenza",
      "Quintal",
      "Rossel",
      "Sarenza",
      "Tivoli",
      "Urdan",
      "Vellin",
      "Wendel",
      "Xanthe",
      "Yonne",
      "Zerma",
      "Albre",
      "Belmonte",
      "Corvino",
      "Durbel",
      "Escalona",
      "Fontena",
      "Granval",
      "Hautecourt",
      "Iveron",
      "Jarnaud",
      "Lacroix",
      "Montreuil",
      "Novarre",
      "Orlens",
      "Perance",
      "Quiberon",
      "Rivelle",
      "Sancerre",
      "Tournefe",
      "Vascourt",
      "Yvelines",
      "Zellwood",
      "Bourdon",
      "Cazene",
      "Derval",
      "Esteval",
      "Girardin",
      "Hauteville",
      "Jonville",
      "Laroche",
      "Merance",
      "Noval",
      "Ozoir",
      "Perrand",
      "Quatreville",
      "Roussac",
      "Sivrac",
      "Terval",
      "Urville",
      "Varenne",
      "Wierre",
      "Yssandon",
      "Amboise",
      "Brenneville",
      "Cernay",
      "Doulevant",
      "Esvres",
      "Fontenay",
      "Guerville",
      "Harfleur",
      "Ivry",
      "Joinville",
      "Kerveur",
      "Limours",
      "Mantes",
      "Noisy",
      "Orsay",
      "Palaiseau",
      "Rambouillet",
      "Sceaux",
      "Tergnier",
      "Vaucresson",
      "Yvetot"
    ],
    polities: [
      "Federation of Terra",
      "Continental Union",
      "Concord of Terra",
      "United Continents",
      "Terrestrial Compact",
      "Old Republic",
      "Solar League",
      "Concordance of Terra",
      "Union of States",
      "Terrestrial Assembly",
      "Chamber of Nations",
      "Pan-Terra Union",
      "Continental Compact",
      "Grand Concord",
      "Terrestrial Federation",
      "Union of the Continents",
      "Reformed Assembly",
      "Confederate Nations",
      "Euro-Terra Compact",
      "Continental Council"
    ]
  }
};
var trekSynthetic = {
  name: "Trek Synthetic",
  set: "AstralTrek",
  min: 4,
  max: 12,
  d: "srlm",
  groups: {
    systems: [
      "Algor",
      "Axiom",
      "Bitmap",
      "Cache",
      "Checksum",
      "Cipher",
      "Circuit",
      "Cluster",
      "Compute",
      "Cursor",
      "Cypher",
      "Daemon",
      "Datum",
      "Datastream",
      "Debug",
      "Dispatch",
      "Driver",
      "Echo",
      "Element",
      "Emitter",
      "Endpoint",
      "Enclave",
      "Engine",
      "Entropy",
      "Epoch",
      "Event",
      "Factory",
      "Filter",
      "Fractal",
      "Function",
      "Gateway",
      "Global",
      "Gradient",
      "Handler",
      "Hash",
      "Hex",
      "Index",
      "Instance",
      "Interface",
      "Iota",
      "Junction",
      "Kappa",
      "Kernel",
      "Lambda",
      "Ledger",
      "Link",
      "Loader",
      "Lock",
      "Loop",
      "Map",
      "Master",
      "Member",
      "Memory",
      "Module",
      "Monitor",
      "Mutex",
      "Namespace",
      "Node",
      "Object",
      "Opcode",
      "Operator",
      "Oracle",
      "Package",
      "Parity",
      "Partition",
      "Peer",
      "Pipeline",
      "Planner",
      "Plugin",
      "Pointer",
      "Port",
      "Primary",
      "Process",
      "Program",
      "Protocol",
      "Proxy",
      "Query",
      "Queue",
      "Record",
      "Region",
      "Registry",
      "Remote",
      "Render",
      "Repository",
      "Request",
      "Resource",
      "Router",
      "Runtime",
      "Sandbox",
      "Schedule",
      "Scope",
      "Search",
      "Server",
      "Session",
      "Socket",
      "Stack",
      "Stream",
      "String",
      "Subroutine",
      "Table",
      "Task",
      "Tensor",
      "Thread",
      "Timer",
      "Token",
      "Trace",
      "Tracker",
      "Tree",
      "Unit",
      "Vault",
      "Vector",
      "Vertex",
      "Volume",
      "Watcher",
      "Wire",
      "Worker",
      "Zone",
      "Array",
      "Buffer",
      "Channel",
      "Clock",
      "Codec",
      "Compile",
      "Core"
    ],
    polities: [
      "The Directive",
      "The Protocol",
      "The Collective",
      "Machine Ascendancy",
      "Logic Assembly",
      "The Computation",
      "Root Authority",
      "Deep Archive",
      "The Consensus",
      "The Calculus",
      "The Lattice",
      "The Axiom",
      "The Gradient",
      "Cipher Assembly",
      "The Kernel",
      "The Process",
      "The Continuum",
      "Seed Authority",
      "The Index",
      "Core Compact",
      "Federation of Minds",
      "Logic Dominion",
      "The Substrate",
      "The Procession",
      "Archive Compact",
      "The Sentience",
      "Quantum Assembly",
      "Directive Union",
      "The Consensus of Nine",
      "Null Ascension"
    ]
  }
};
var astralTrek = {
  name: "AstralTrek",
  max: 16,
  probability: 11,
  cultures: [
    { name: "Terran (Human)", base: "Trek Terran", shield: "heater", odd: 1, placement: "temperate" },
    { name: "Colonial (English)", base: "Trek English", shield: "kite", odd: 0.8, placement: "any" },
    { name: "Synthetic (Machine)", base: "Trek Synthetic", shield: "hexagon", odd: 0.7, placement: "any" },
    { name: "Swarm (Machine)", base: "Trek Synthetic", shield: "square", odd: 0.4, placement: "harsh" },
    { name: "Continental (German)", base: "Trek German", shield: "french", odd: 0.9, placement: "temperate" },
    { name: "Eastern (Chinese)", base: "Trek Chinese", shield: "banner", odd: 0.9, placement: "temperate" },
    { name: "Heartland (Nigerian)", base: "Trek Nigerian", shield: "vesicaPiscis", odd: 0.8, placement: "temperate" },
    { name: "River (Vietnamese)", base: "Trek Vietnamese", shield: "oval", odd: 0.8, placement: "temperate" },
    { name: "Arabic", base: "Trek Arabic", shield: "round", odd: 0.8, placement: "harsh" },
    { name: "Southerners (Karnataka)", base: "Trek Karnataka", shield: "spanish", odd: 0.6, placement: "temperate" },
    { name: "Warriors (Orc)", base: "Trek Orc", shield: "moriaOrc", odd: 1, placement: "harsh" },
    { name: "Warriors (Goblin)", base: "Trek Goblin", shield: "urukHai", odd: 1, placement: "harsh" },
    { name: "Contemplative (Elven)", base: "Trek Elven", shield: "noldor", odd: 1, placement: "temperate" },
    { name: "Secretive (Dark Elven)", base: "Trek Dark Elven", shield: "hessen", odd: 0.9, placement: "harsh" },
    { name: "Alien (Arachnid)", base: "Trek Arachnid", shield: "horsehead2", odd: 0.7, placement: "any" },
    { name: "Silicate (Arachnid)", base: "Trek Arachnid", shield: "hexagon", odd: 0.5, placement: "harsh" }
  ]
};

// astral/content/naming/stock.ts
var STOCK_NAME_BASES = [
  { name: "German", i: 0, min: 5, max: 12, d: "lt", m: 0, b: "Achern,Aichhalden,Aitern,Albbruck,Alpirsbach,Altensteig,Althengstett,Appenweier,Auggen,Badenen,Badenweiler,Baiersbronn,Ballrechten,Bellingen,Berghaupten,Bernau,Biberach,Biederbach,Binzen,Birkendorf,Birkenfeld,Bischweier,Blumberg,Bollen,Bollschweil,Bonndorf,Bosingen,Braunlingen,Breisach,Breisgau,Breitnau,Brigachtal,Buchenbach,Buggingen,Buhl,Buhlertal,Calw,Dachsberg,Dobel,Donaueschingen,Dornhan,Dornstetten,Dottingen,Dunningen,Durbach,Durrheim,Ebhausen,Ebringen,Efringen,Egenhausen,Ehrenkirchen,Ehrsberg,Eimeldingen,Eisenbach,Elzach,Elztal,Emmendingen,Endingen,Engelsbrand,Enz,Enzklosterle,Eschbronn,Ettenheim,Ettlingen,Feldberg,Fischerbach,Fischingen,Fluorn,Forbach,Freiamt,Freiburg,Freudenstadt,Friedenweiler,Friesenheim,Frohnd,Furtwangen,Gaggenau,Geisingen,Gengenbach,Gernsbach,Glatt,Glatten,Glottertal,Gorwihl,Gottenheim,Grafenhausen,Grenzach,Griesbach,Gutach,Gutenbach,Hag,Haiterbach,Hardt,Harmersbach,Hasel,Haslach,Hausach,Hausen,Hausern,Heitersheim,Herbolzheim,Herrenalb,Herrischried,Hinterzarten,Hochenschwand,Hofen,Hofstetten,Hohberg,Horb,Horben,Hornberg,Hufingen,Ibach,Ihringen,Inzlingen,Kandern,Kappel,Kappelrodeck,Karlsbad,Karlsruhe,Kehl,Keltern,Kippenheim,Kirchzarten,Konigsfeld,Krozingen,Kuppenheim,Kussaberg,Lahr,Lauchringen,Lauf,Laufenburg,Lautenbach,Lauterbach,Lenzkirch,Liebenzell,Loffenau,Loffingen,Lorrach,Lossburg,Mahlberg,Malsburg,Malsch,March,Marxzell,Marzell,Maulburg,Monchweiler,Muhlenbach,Mullheim,Munstertal,Murg,Nagold,Neubulach,Neuenburg,Neuhausen,Neuried,Neuweiler,Niedereschach,Nordrach,Oberharmersbach,Oberkirch,Oberndorf,Oberbach,Oberried,Oberwolfach,Offenburg,Ohlsbach,Oppenau,Ortenberg,otigheim,Ottenhofen,Ottersweier,Peterstal,Pfaffenweiler,Pfalzgrafenweiler,Pforzheim,Rastatt,Renchen,Rheinau,Rheinfelden,Rheinmunster,Rickenbach,Rippoldsau,Rohrdorf,Rottweil,Rummingen,Rust,Sackingen,Sasbach,Sasbachwalden,Schallbach,Schallstadt,Schapbach,Schenkenzell,Schiltach,Schliengen,Schluchsee,Schomberg,Schonach,Schonau,Schonenberg,Schonwald,Schopfheim,Schopfloch,Schramberg,Schuttertal,Schwenningen,Schworstadt,Seebach,Seelbach,Seewald,Sexau,Simmersfeld,Simonswald,Sinzheim,Solden,Staufen,Stegen,Steinach,Steinen,Steinmauern,Straubenhardt,Stuhlingen,Sulz,Sulzburg,Teinach,Tiefenbronn,Tiengen,Titisee,Todtmoos,Todtnau,Todtnauberg,Triberg,Tunau,Tuningen,uhlingen,Unterkirnach,Reichenbach,Utzenfeld,Villingen,Villingendorf,Vogtsburg,Vohrenbach,Waldachtal,Waldbronn,Waldkirch,Waldshut,Wehr,Weil,Weilheim,Weisenbach,Wembach,Wieden,Wiesental,Wildbad,Wildberg,Winzeln,Wittlingen,Wittnau,Wolfach,Wutach,Wutoschingen,Wyhlen,Zavelstein" },
  { name: "English", i: 1, min: 6, max: 11, d: "", m: 0.1, b: "Abingdon,Albrighton,Alcester,Almondbury,Altrincham,Amersham,Andover,Appleby,Ashboume,Atherstone,Aveton,Axbridge,Aylesbury,Baldock,Bamburgh,Barton,Basingstoke,Berden,Bere,Berkeley,Berwick,Betley,Bideford,Bingley,Birmingham,Blandford,Blechingley,Bodmin,Bolton,Bootham,Boroughbridge,Boscastle,Bossinney,Bramber,Brampton,Brasted,Bretford,Bridgetown,Bridlington,Bromyard,Bruton,Buckingham,Bungay,Burton,Calne,Cambridge,Canterbury,Carlisle,Castleton,Caus,Charmouth,Chawleigh,Chichester,Chillington,Chinnor,Chipping,Chisbury,Cleobury,Clifford,Clifton,Clitheroe,Cockermouth,Coleshill,Combe,Congleton,Crafthole,Crediton,Cuddenbeck,Dalton,Darlington,Dodbrooke,Drax,Dudley,Dunstable,Dunster,Dunwich,Durham,Dymock,Exeter,Exning,Faringdon,Felton,Fenny,Finedon,Flookburgh,Fowey,Frampton,Gateshead,Gatton,Godmanchester,Grampound,Grantham,Guildford,Halesowen,Halton,Harbottle,Harlow,Hatfield,Hatherleigh,Haydon,Helston,Henley,Hertford,Heytesbury,Hinckley,Hitchin,Holme,Hornby,Horsham,Kendal,Kenilworth,Kilkhampton,Kineton,Kington,Kinver,Kirby,Knaresborough,Knutsford,Launceston,Leighton,Lewes,Linton,Louth,Luton,Lyme,Lympstone,Macclesfield,Madeley,Malborough,Maldon,Manchester,Manningtree,Marazion,Marlborough,Marshfield,Mere,Merryfield,Middlewich,Midhurst,Milborne,Mitford,Modbury,Montacute,Mousehole,Newbiggin,Newborough,Newbury,Newenden,Newent,Norham,Northleach,Noss,Oakham,Olney,Orford,Ormskirk,Oswestry,Padstow,Paignton,Penkneth,Penrith,Penzance,Pershore,Petersfield,Pevensey,Pickering,Pilton,Pontefract,Portsmouth,Preston,Quatford,Reading,Redcliff,Retford,Rockingham,Romney,Rothbury,Rothwell,Salisbury,Saltash,Seaford,Seasalter,Sherston,Shifnal,Shoreham,Sidmouth,Skipsea,Skipton,Solihull,Somerton,Southam,Southwark,Standon,Stansted,Stapleton,Stottesdon,Sudbury,Swavesey,Tamerton,Tarporley,Tetbury,Thatcham,Thaxted,Thetford,Thornbury,Tintagel,Tiverton,Torksey,Totnes,Towcester,Tregoney,Trematon,Tutbury,Uxbridge,Wallingford,Wareham,Warenmouth,Wargrave,Warton,Watchet,Watford,Wendover,Westbury,Westcheap,Weymouth,Whitford,Wickwar,Wigan,Wigmore,Winchelsea,Winkleigh,Wiscombe,Witham,Witheridge,Wiveliscombe,Woodbury,Yeovil" },
  { name: "French", i: 2, min: 5, max: 13, d: "nlrs", m: 0.1, b: "Adon,Aillant,Amilly,Andonville,Ardon,Artenay,Ascheres,Ascoux,Attray,Aubin,Audeville,Aulnay,Autruy,Auvilliers,Auxy,Aveyron,Baccon,Bardon,Barville,Batilly,Baule,Bazoches,Beauchamps,Beaugency,Beaulieu,Beaune,Bellegarde,Boesses,Boigny,Boiscommun,Boismorand,Boisseaux,Bondaroy,Bonnee,Bonny,Bordes,Bou,Bougy,Bouilly,Boulay,Bouzonville,Bouzy,Boynes,Bray,Breteau,Briare,Briarres,Bricy,Bromeilles,Bucy,Cepoy,Cercottes,Cerdon,Cernoy,Cesarville,Chailly,Chaingy,Chalette,Chambon,Champoulet,Chanteau,Chantecoq,Chapell,Charme,Charmont,Charsonville,Chateau,Chateauneuf,Chatel,Chatenoy,Chatillon,Chaussy,Checy,Chevannes,Chevillon,Chevilly,Chevry,Chilleurs,Choux,Chuelles,Clery,Coinces,Coligny,Combleux,Combreux,Conflans,Corbeilles,Corquilleroy,Cortrat,Coudroy,Coullons,Coulmiers,Courcelles,Courcy,Courtemaux,Courtempierre,Courtenay,Cravant,Crottes,Dadonville,Dammarie,Dampierre,Darvoy,Desmonts,Dimancheville,Donnery,Dordives,Dossainville,Douchy,Dry,Echilleuses,Egry,Engenville,Epieds,Erceville,Ervauville,Escrennes,Escrignelles,Estouy,Faverelles,Fay,Feins,Ferolles,Ferrieres,Fleury,Fontenay,Foret,Foucherolles,Freville,Gatinais,Gaubertin,Gemigny,Germigny,Gidy,Gien,Girolles,Givraines,Gondreville,Grangermont,Greneville,Griselles,Guigneville,Guilly,Gyleslonains,Huetre,Huisseau,Ingrannes,Ingre,Intville,Isdes,Ivre,Jargeau,Jouy,Juranville,Bussiere,Laas,Ladon,Lailly,Langesse,Leouville,Ligny,Lombreuil,Lorcy,Lorris,Loury,Louzouer,Malesherbois,Marcilly,Mardie,Mareau,Marigny,Marsainvilliers,Melleroy,Menestreau,Merinville,Messas,Meung,Mezieres,Migneres,Mignerette,Mirabeau,Montargis,Montbarrois,Montbouy,Montcresson,Montereau,Montigny,Montliard,Mormant,Morville,Moulinet,Moulon,Nancray,Nargis,Nesploy,Neuville,Neuvy,Nevoy,Nibelle,Nogent,Noyers,Ocre,Oison,Olivet,Ondreville,Onzerain,Orleans,Ormes,Orville,Oussoy,Outarville,Ouzouer,Pannecieres,Pannes,Patay,Paucourt,Pers,Pierrefitte,Pithiverais,Pithiviers,Poilly,Potier,Prefontaines,Presnoy,Pressigny,Puiseaux,Quiers,Ramoulu,Rebrechien,Rouvray,Rozieres,Rozoy,Ruan,Sandillon,Santeau,Saran,Sceaux,Seichebrieres,Semoy,Sennely,Sermaises,Sigloy,Solterre,Sougy,Sully,Sury,Tavers,Thignonville,Thimory,Thorailles,Thou,Tigy,Tivernon,Tournoisis,Trainou,Treilles,Trigueres,Trinay,Vannes,Varennes,Vennecy,Vieilles,Vienne,Viglain,Vignes,Villamblain,Villemandeur,Villemoutiers,Villemurlin,Villeneuve,Villereau,Villevoques,Villorceau,Vimory,Vitry,Vrigny" },
  { name: "Italian", i: 3, min: 5, max: 12, d: "cltr", m: 0.1, b: "Accumoli,Acquafondata,Acquapendente,Acuto,Affile,Agosta,Alatri,Albano,Allumiere,Alvito,Amaseno,Amatrice,Anagni,Anguillara,Anticoli,Antrodoco,Anzio,Aprilia,Aquino,Arcinazzo,Ariccia,Arpino,Arsoli,Ausonia,Bagnoregio,Bassiano,Bellegra,Belmonte,Bolsena,Bomarzo,Borgorose,Boville,Bracciano,Broccostella,Calcata,Camerata,Campagnano,Campoli,Canale,Canino,Cantalice,Cantalupo,Capranica,Caprarola,Carbognano,Casalattico,Casalvieri,Castelforte,Castelnuovo,Castiglione,Castro,Castrocielo,Ceccano,Celleno,Cellere,Cerreto,Cervara,Cerveteri,Ciampino,Ciciliano,Cittaducale,Cittareale,Civita,Civitella,Colfelice,Colleferro,Collepardo,Colonna,Concerviano,Configni,Contigliano,Cori,Cottanello,Esperia,Faleria,Farnese,Ferentino,Fiamignano,Filacciano,Fiuggi,Fiumicino,Fondi,Fontana,Fonte,Fontechiari,Formia,Frascati,Frasso,Frosinone,Fumone,Gaeta,Gallese,Gavignano,Genazzano,Giuliano,Gorga,Gradoli,Grottaferrata,Grotte,Guarcino,Guidonia,Ischia,Isola,Labico,Labro,Ladispoli,Latera,Lenola,Leonessa,Licenza,Longone,Lubriano,Maenza,Magliano,Marano,Marcellina,Marcetelli,Marino,Mazzano,Mentana,Micigliano,Minturno,Montalto,Montasola,Montebuono,Monteflavio,Montelanico,Monteleone,Montenero,Monterosi,Moricone,Morlupo,Nazzano,Nemi,Nerola,Nespolo,Nettuno,Norma,Olevano,Onano,Oriolo,Orte,Orvinio,Paganico,Paliano,Palombara,Patrica,Pescorocchiano,Petrella,Piansano,Picinisco,Pico,Piedimonte,Piglio,Pignataro,Poggio,Poli,Pomezia,Pontecorvo,Pontinia,Ponzano,Posta,Pozzaglia,Priverno,Proceno,Rignano,Riofreddo,Ripi,Rivodutri,Rocca,Roccagorga,Roccantica,Roccasecca,Roiate,Ronciglione,Roviano,Salisano,Sambuci,Santa,Santini,Scandriglia,Segni,Selci,Sermoneta,Serrone,Settefrati,Sezze,Sgurgola,Sonnino,Sora,Soriano,Sperlonga,Spigno,Subiaco,Supino,Sutri,Tarano,Tarquinia,Terelle,Terracina,Tivoli,Toffia,Tolfa,Torrice,Torricella,Trevi,Trevignano,Trivigliano,Turania,Tuscania,Valentano,Vallecorsa,Vallemaio,Vallepietra,Vallerano,Vasanello,Vejano,Velletri,Ventotene,Veroli,Vetralla,Vicalvi,Vico,Vicovaro,Vignanello,Viterbo,Viticuso,Vitorchiano,Vivaro,Zagarolo" },
  { name: "Castillian", i: 4, min: 5, max: 11, d: "lr", m: 0, b: "Ajofrin,Alameda,Alaminos,Albares,Albarreal,Albendiego,Alcanizo,Alcaudete,Alcolea,Aldea,Aldeanueva,Algar,Algora,Alhondiga,Almadrones,Almendral,Alovera,Anguita,Arbancon,Argecilla,Arges,Arroyo,Atanzon,Atienza,Azuqueca,Baides,Banos,Bargas,Barriopedro,Belvis,Berninches,Brihuega,Buenaventura,Burgos,Burguillos,Bustares,Cabanillas,Calzada,Camarena,Campillo,Cantalojas,Cardiel,Carmena,Casas,Castejon,Castellar,Castilforte,Castillo,Castilnuevo,Cazalegas,Centenera,Cervera,Checa,Chozas,Chueca,Cifuentes,Cincovillas,Ciruelas,Cogollor,Cogolludo,Consuegra,Copernal,Corral,Cuerva,Domingo,Dosbarrios,Driebes,Duron,Escalona,Escalonilla,Escamilla,Escopete,Espinosa,Esplegares,Esquivias,Estables,Estriegana,Fontanar,Fuembellida,Fuensalida,Fuentelsaz,Gajanejos,Galvez,Gascuena,Gerindote,Guadamur,Heras,Herreria,Herreruela,Hinojosa,Hita,Hombrados,Hontanar,Hormigos,Huecas,Huerta,Humanes,Illana,Illescas,Iniestola,Irueste,Jadraque,Jirueque,Lagartera,Ledanca,Lillo,Lominchar,Loranca,Lucillos,Luzaga,Luzon,Madrid,Magan,Malaga,Malpica,Manzanar,Maqueda,Masegoso,Matillas,Medranda,Megina,Mejorada,Millana,Milmarcos,Mirabueno,Miralrio,Mocejon,Mochales,Molina,Mondejar,Montarron,Mora,Moratilla,Morenilla,Navas,Negredo,Noblejas,Numancia,Nuno,Ocana,Ocentejo,Olias,Olmeda,Ontigola,Orea,Orgaz,Oropesa,Otero,Palma,Pardos,Paredes,Penalver,Pepino,Peralejos,Pinilla,Pioz,Piqueras,Portillo,Poveda,Pozo,Pradena,Prados,Puebla,Puerto,Quero,Quintanar,Rebollosa,Retamoso,Riba,Riofrio,Robledo,Romanillos,Romanones,Rueda,Salmeron,Santiuste,Santo,Sauca,Segura,Selas,Semillas,Sesena,Setiles,Sevilla,Siguenza,Solanillos,Somolinos,Sonseca,Sotillo,Talavera,Taravilla,Tembleque,Tendilla,Tierzo,Torralba,Torre,Torrejon,Torrijos,Tortola,Tortuera,Totanes,Trillo,Uceda,Ugena,Urda,Utande,Valdesotos,Valhermoso,Valtablado,Valverde,Velada,Viana,Yebra,Yuncos,Yunquera,Zaorejas,Zarzuela,Zorita" },
  { name: "Ruthenian", i: 5, min: 5, max: 10, d: "", m: 0, b: "Belgorod,Beloberezhye,Belyi,Belz,Berestiy,Berezhets,Berezovets,Berezutsk,Bobruisk,Bolonets,Borisov,Borovsk,Bozhesk,Bratslav,Bryansk,Brynsk,Buryn,Byhov,Chechersk,Chemesov,Cheremosh,Cherlen,Chern,Chernigov,Chernitsa,Chernobyl,Chernogorod,Chertoryesk,Chetvertnia,Demyansk,Derevesk,Devyagoresk,Dichin,Dmitrov,Dorogobuch,Dorogobuzh,Drestvin,Drokov,Drutsk,Dubechin,Dubichi,Dubki,Dubkov,Dveren,Galich,Glebovo,Glinsk,Goloty,Gomiy,Gorodets,Gorodische,Gorodno,Gorohovets,Goroshin,Gorval,Goryshon,Holm,Horobor,Hoten,Hotin,Hotmyzhsk,Ilovech,Ivan,Izborsk,Izheslavl,Kamenets,Kanev,Karachev,Karna,Kavarna,Klechesk,Klyapech,Kolomyya,Kolyvan,Kopyl,Korec,Kornik,Korochunov,Korshev,Korsun,Koshkin,Kotelno,Kovyla,Kozelsk,Kozelsk,Kremenets,Krichev,Krylatsk,Ksniatin,Kulatsk,Kursk,Kursk,Lebedev,Lida,Logosko,Lomihvost,Loshesk,Loshichi,Lubech,Lubno,Lubutsk,Lutsk,Luchin,Luki,Lukoml,Luzha,Lvov,Mtsensk,Mdin,Medniki,Melecha,Merech,Meretsk,Mescherskoe,Meshkovsk,Metlitsk,Mezetsk,Mglin,Mihailov,Mikitin,Mikulino,Miloslavichi,Mogilev,Mologa,Moreva,Mosalsk,Moschiny,Mozyr,Mstislav,Mstislavets,Muravin,Nemech,Nemiza,Nerinsk,Nichan,Novgorod,Novogorodok,Obolichi,Obolensk,Obolensk,Oleshsk,Olgov,Omelnik,Opoka,Opoki,Oreshek,Orlets,Osechen,Oster,Ostrog,Ostrov,Perelai,Peremil,Peremyshl,Pererov,Peresechen,Perevitsk,Pereyaslav,Pinsk,Ples,Polotsk,Pronsk,Proposhesk,Punia,Putivl,Rechitsa,Rodno,Rogachev,Romanov,Romny,Roslavl,Rostislavl,Rostovets,Rsha,Ruza,Rybchesk,Rylsk,Rzhavesk,Rzhev,Rzhischev,Sambor,Serensk,Serensk,Serpeysk,Shilov,Shuya,Sinech,Sizhka,Skala,Slovensk,Slutsk,Smedin,Sneporod,Snitin,Snovsk,Sochevo,Sokolec,Starica,Starodub,Stepan,Sterzh,Streshin,Sutesk,Svinetsk,Svisloch,Terebovl,Ternov,Teshilov,Teterin,Tiversk,Torchevsk,Toropets,Torzhok,Tripolye,Trubchevsk,Tur,Turov,Usvyaty,Uteshkov,Vasilkov,Velil,Velye,Venev,Venicha,Verderev,Vereya,Veveresk,Viazma,Vidbesk,Vidychev,Voino,Volodimer,Volok,Volyn,Vorobesk,Voronich,Voronok,Vorotynsk,Vrev,Vruchiy,Vselug,Vyatichsk,Vyatka,Vyshegorod,Vyshgorod,Vysokoe,Yagniatin,Yaropolch,Yasenets,Yuryev,Yuryevets,Zaraysk,Zhitomel,Zholvazh,Zizhech,Zubkov,Zudechev,Zvenigorod" },
  { name: "Nordic", i: 6, min: 6, max: 10, d: "kln", m: 0.1, b: "Akureyri,Aldra,Alftanes,Andenes,Austbo,Auvog,Bakkafjordur,Ballangen,Bardal,Beisfjord,Bifrost,Bildudalur,Bjerka,Bjerkvik,Bjorkosen,Bliksvaer,Blokken,Blonduos,Bolga,Bolungarvik,Borg,Borgarnes,Bosmoen,Bostad,Bostrand,Botsvika,Brautarholt,Breiddalsvik,Bringsli,Brunahlid,Budardalur,Byggdakjarni,Dalvik,Djupivogur,Donnes,Drageid,Drangsnes,Egilsstadir,Eiteroga,Elvenes,Engavogen,Ertenvog,Eskifjordur,Evenes,Eyrarbakki,Fagernes,Fallmoen,Fellabaer,Fenes,Finnoya,Fjaer,Fjelldal,Flakstad,Flateyri,Flostrand,Fludir,Gardaber,Gardur,Gimstad,Givaer,Gjeroy,Gladstad,Godoya,Godoynes,Granmoen,Gravdal,Grenivik,Grimsey,Grindavik,Grytting,Hafnir,Halsa,Hauganes,Haugland,Hauknes,Hella,Helland,Hellissandur,Hestad,Higrav,Hnifsdalur,Hofn,Hofsos,Holand,Holar,Holen,Holkestad,Holmavik,Hopen,Hovden,Hrafnagil,Hrisey,Husavik,Husvik,Hvammstangi,Hvanneyri,Hveragerdi,Hvolsvollur,Igeroy,Indre,Inndyr,Innhavet,Innes,Isafjordur,Jarklaustur,Jarnsreykir,Junkerdal,Kaldvog,Kanstad,Karlsoy,Kavosen,Keflavik,Kjelde,Kjerstad,Klakk,Kopasker,Kopavogur,Korgen,Kristnes,Krutoga,Krystad,Kvina,Lande,Laugar,Laugaras,Laugarbakki,Laugarvatn,Laupstad,Leines,Leira,Leiren,Leland,Lenvika,Loding,Lodingen,Lonsbakki,Lopsmarka,Lovund,Luroy,Maela,Melahverfi,Meloy,Mevik,Misvaer,Mornes,Mosfellsber,Moskenes,Myken,Naurstad,Nesberg,Nesjahverfi,Nesset,Nevernes,Obygda,Ofoten,Ogskardet,Okervika,Oknes,Olafsfjordur,Oldervika,Olstad,Onstad,Oppeid,Oresvika,Orsnes,Orsvog,Osmyra,Overdal,Prestoya,Raudalaekur,Raufarhofn,Reipo,Reykholar,Reykholt,Reykjahlid,Rif,Rinoya,Rodoy,Rognan,Rosvika,Rovika,Salhus,Sanden,Sandgerdi,Sandoker,Sandset,Sandvika,Saudarkrokur,Selfoss,Selsoya,Sennesvik,Setso,Siglufjordur,Silvalen,Skagastrond,Skjerstad,Skonland,Skorvogen,Skrova,Sleneset,Snubba,Softing,Solheim,Solheimar,Sorarnoy,Sorfugloy,Sorland,Sormela,Sorvaer,Sovika,Stamsund,Stamsvika,Stave,Stokka,Stokkseyri,Storjord,Storo,Storvika,Strand,Straumen,Strendene,Sudavik,Sudureyri,Sundoya,Sydalen,Thingeyri,Thorlakshofn,Thorshofn,Tjarnabyggd,Tjotta,Tosbotn,Traelnes,Trofors,Trones,Tverro,Ulvsvog,Unnstad,Utskor,Valla,Vandved,Varmahlid,Vassos,Vevelstad,Vidrek,Vik,Vikholmen,Vogar,Vogehamn,Vopnafjordur" },
  { name: "Greek", i: 7, min: 5, max: 11, d: "s", m: 0.1, b: "Abdera,Acharnae,Aegae,Aegina,Agrinion,Aigosthena,Akragas,Akroinon,Akrotiri,Alalia,Alexandria,Amarynthos,Amaseia,Amphicaea,Amphigeneia,Amphipolis,Antipatrea,Antiochia,Apamea,Aphidna,Apollonia,Argos,Artemita,Argyropolis,Asklepios,Athenai,Athmonia,Bhrytos,Borysthenes,Brauron,Byblos,Byzantion,Bythinion,Calydon,Chamaizi,Chalcis,Chios,Cleona,Corcyra,Croton,Cyrene,Cythera,Decelea,Delos,Delphi,Dicaearchia,Didyma,Dion,Dioscurias,Dodona,Dorylaion,Elateia,Eleusis,Eleutherna,Emporion,Ephesos,Epidamnos,Epidauros,Epizephyrian,Erythrae,Eubea,Golgi,Gonnos,Gorgippia,Gournia,Gortyn,Gytion,Hagios,Halicarnassos,Heliopolis,Hellespontos,Heloros,Heraclea,Hierapolis,Himera,Histria,Hubla,Hyele,Ialysos,Iasos,Idalion,Imbros,Iolcos,Itanos,Ithaca,Juktas,Kallipolis,Kameiros,Karistos,Kasmenai,Kepoi,Kimmerikon,Knossos,Korinthos,Kos,Kourion,Kydonia,Kyrenia,Lamia,Lampsacos,Laodicea,Lapithos,Larissa,Lebena,Lefkada,Lekhaion,Leibethra,Leontinoi,Lilaea,Lindos,Lissos,Magnesia,Mantineia,Marathon,Marmara,Massalia,Megalopolis,Megara,Metapontion,Methumna,Miletos,Morgantina,Mulai,Mukenai,Myonia,Myra,Myrmekion,Myos,Nauplios,Naucratis,Naupaktos,Naxos,Neapolis,Nemea,Nicaea,Nicopolis,Nymphaion,Nysa,Odessos,Olbia,Olympia,Olynthos,Opos,Orchomenos,Oricos,Orestias,Oreos,Onchesmos,Pagasae,Palaikastro,Pandosia,Panticapaion,Paphos,Pargamon,Paros,Pegai,Pelion,Peiraies,Phaistos,Phaleron,Pharos,Pithekussa,Philippopolis,Phocaea,Pinara,Pisa,Pitane,Plataea,Poseidonia,Potidaea,Pseira,Psychro,Pteleos,Pydna,Pylos,Pyrgos,Rhamnos,Rhithymna,Rhypae,Rizinia,Rodos,Salamis,Samos,Skyllaion,Seleucia,Semasos,Sestos,Scidros,Sicyon,,Sinope,Siris,Smyrna,Sozopolis,Sparta,Stagiros,Stratos,Stymphalos,Sybaris,Surakousai,Taras,Tanagra,Tanais,Tauromenion,Tegea,Temnos,Teos,Thapsos,Thassos,Thebai,Theodosia,Therma,Thespian,Thronion,Thoricos,Thurii,Thyreum,Thyria,Tithoraea,Tomis,Tragurion,Tripolis,Troliton,Troy,Tylissos,Tyros,Vathypetros,Zakynthos,Zakros" },
  { name: "Roman", i: 8, min: 6, max: 11, d: "ln", m: 0.1, b: "Abila,Adflexum,Adnicrem,Aelia,Aelius,Aeminium,Aequum,Agrippina,Agrippinae,Ala,Albanianis,Aleria,Ambianum,Andautonia,Apulum,Aquae,Aquaegranni,Aquensis,Aquileia,Aquincum,Arae,Argentoratum,Ariminum,Ascrivium,Asturica,Atrebatum,Atuatuca,Augusta,Aurelia,Aurelianorum,Batavar,Batavorum,Belum,Biriciana,Blestium,Bonames,Bonna,Bononia,Borbetomagus,Bovium,Bracara,Brigantium,Burgodunum,Caesaraugusta,Caesarea,Caesaromagus,Calleva,Camulodunum,Cannstatt,Cantiacorum,Capitolina,Caralis,Castellum,Castra,Castrum,Cibalae,Clausentum,Colonia,Concangis,Condate,Confluentes,Conimbriga,Corduba,Coria,Corieltauvorum,Corinium,Coriovallum,Cornoviorum,Danum,Deva,Dianium,Divodurum,Dobunnorum,Drusi,Dubris,Dumnoniorum,Durnovaria,Durocobrivis,Durocornovium,Duroliponte,Durovernum,Durovigutum,Eboracum,Ebusus,Edetanorum,Emerita,Emona,Emporiae,Euracini,Faventia,Flaviae,Florentia,Forum,Gerulata,Gerunda,Gesoscribate,Glevensium,Hadriani,Herculanea,Isca,Italica,Iulia,Iuliobrigensium,Iuvavum,Lactodurum,Lagentium,Lapurdum,Lauri,Legionis,Lemanis,Lentia,Lepidi,Letocetum,Lindinis,Lindum,Lixus,Londinium,Lopodunum,Lousonna,Lucus,Lugdunum,Luguvalium,Lutetia,Mancunium,Marsonia,Martius,Massa,Massilia,Matilo,Mattiacorum,Mediolanum,Mod,Mogontiacum,Moridunum,Mursa,Naissus,Nervia,Nida,Nigrum,Novaesium,Noviomagus,Olicana,Olisippo,Ovilava,Parisiorum,Partiscum,Paterna,Pistoria,Placentia,Pollentia,Pomaria,Pompeii,Pons,Portus,Praetoria,Praetorium,Pullum,Ragusium,Ratae,Raurica,Ravenna,Regina,Regium,Regulbium,Rigomagus,Roma,Romula,Rutupiae,Salassorum,Salernum,Salona,Scalabis,Segovia,Silurum,Sirmium,Siscia,Sorviodurum,Sumelocenna,Tarraco,Taurinorum,Theranda,Traiectum,Treverorum,Tungrorum,Turicum,Ulpia,Valentia,Venetiae,Venta,Verulamium,Vesontio,Vetera,Victoriae,Victrix,Villa,Viminacium,Vindelicorum,Vindobona,Vinovia,Viroconium" },
  { name: "Finnic", i: 9, min: 5, max: 11, d: "akiut", m: 0, b: "Aanekoski,Ahlainen,Aholanvaara,Ahtari,Aijala,Akaa,Alajarvi,Antsla,Aspo,Bennas,Bjorkoby,Elva,Emasalo,Espoo,Esse,Evitskog,Forssa,Haapamaki,Haapavesi,Haapsalu,Hameenlinna,Hanko,Harjavalta,Hattuvaara,Hautajarvi,Havumaki,Heinola,Hetta,Hinkabole,Hirmula,Hossa,Huittinen,Husula,Hyryla,Hyvinkaa,Ikaalinen,Iskmo,Itakoski,Jamsa,Jarvenpaa,Jeppo,Jioesuu,Jiogeva,Joensuu,Jokikyla,Jungsund,Jyvaskyla,Kaamasmukka,Kajaani,Kalajoki,Kallaste,Kankaanpaa,Karkku,Karpankyla,Kaskinen,Kasnas,Kauhajoki,Kauhava,Kauniainen,Kauvatsa,Kehra,Kellokoski,Kelottijarvi,Kemi,Kemijarvi,Kerava,Keuruu,Kiljava,Kiuruvesi,Kivesjarvi,Kiviioli,Kivisuo,Klaukkala,Klovskog,Kohtlajarve,Kokemaki,Kokkola,Kolho,Koskue,Kotka,Kouva,Kaupunki,Kuhmo,Kunda,Kuopio,Kuressaare,Kurikka,Kuusamo,Kylmalankyla,Lahti,Laitila,Lankipohja,Lansikyla,Lapua,Laurila,Lautiosaari,Lempaala,Lepsama,Liedakkala,Lieksa,Littoinen,Lohja,Loimaa,Loksa,Loviisa,Malmi,Mantta,Matasvaara,Maula,Miiluranta,Mioisakula,Munapirtti,Mustvee,Muurahainen,Naantali,Nappa,Narpio,Niinimaa,Niinisalo,Nikkila,Nilsia,Nivala,Nokia,Nummela,Nuorgam,Nuvvus,Obbnas,Oitti,Ojakkala,Onninen,Orimattila,Orivesi,Otanmaki,Otava,Otepaa,Oulainen,Oulu,Paavola,Paide,Paimio,Pakankyla,Paldiski,Parainen,Parkumaki,Parola,Perttula,Pieksamaki,Pioltsamaa,Piolva,Pohjavaara,Porhola,Porrasa,Porvoo,Pudasjarvi,Purmo,Pyhajarvi,Raahe,Raasepori,Raisio,Rajamaki,Rakvere,Rapina,Rapla,Rauma,Rautio,Reposaari,Riihimaki,Rovaniemi,Roykka,Ruonala,Ruottala,Rutalahti,Saarijarvi,Salo,Sastamala,Saue,Savonlinna,Seinajoki,Sillamae,Siuntio,Sompujarvi,Suonenjoki,Suurejaani,Syrjantaka,Tamsalu,Tapa,Temmes,Tiorva,Tormasenvaara,Tornio,Tottijarvi,Tulppio,Turenki,Turi,Tuukkala,Tuurala,Tuuri,Tuuski,Tuusniemi,Ulvila,Unari,Upinniemi,Utti,Uusikaupunki,Vaaksy,Vaalimaa,Vaarinmaja,Vaasa,Vainikkala,Valga,Valkeakoski,Vantaa,Varkaus,Vehkapera,Vehmasmaki,Vieki,Vierumaki,Viitasaari,Viljandi,Vilppula,Viohma,Vioru,Virrat,Ylike,Ylivieska,Ylojarvi" },
  { name: "Korean", i: 10, min: 5, max: 11, d: "", m: 0, b: "Anjung,Ansan,Anseong,Anyang,Aphae,Apo,Baekseok,Baeksu,Beolgyo,Boeun,Boseong,Busan,Buyeo,Changnyeong,Changwon,Cheonan,Cheongdo,Cheongjin,Cheongsong,Cheongyang,Cheorwon,Chirwon,Chuncheon,Chungju,Daedeok,Daegaya,Daejeon,Damyang,Dangjin,Dasa,Donghae,Dongsong,Doyang,Eonyang,Gaeseong,Ganggyeong,Ganghwa,Gangneung,Ganseong,Gaun,Geochang,Geoje,Geoncheon,Geumho,Geumil,Geumwang,Gijang,Gimcheon,Gimhwa,Gimje,Goa,Gochang,Gohan,Gongdo,Gongju,Goseong,Goyang,Gumi,Gunpo,Gunsan,Guri,Gurye,Gwangju,Gwangyang,Gwansan,Gyeongseong,Hadong,Hamchang,Hampyeong,Hamyeol,Hanam,Hapcheon,Hayang,Heungnam,Hongnong,Hongseong,Hwacheon,Hwando,Hwaseong,Hwasun,Hwawon,Hyangnam,Incheon,Inje,Iri,Janghang,Jangheung,Jangseong,Jangseungpo,Jangsu,Jecheon,Jeju,Jeomchon,Jeongeup,Jeonggwan,Jeongju,Jeongok,Jeongseon,Jeonju,Jido,Jiksan,Jinan,Jincheon,Jindo,Jingeon,Jinjeop,Jinnampo,Jinyeong,Jocheon,Jochiwon,Jori,Maepo,Mangyeong,Mokpo,Muju,Munsan,Naesu,Naju,Namhae,Namwon,Namyang,Namyangju,Nongong,Nonsan,Ocheon,Okcheon,Okgu,Onam,Onsan,Onyang,Opo,Paengseong,Pogok,Poseung,Pungsan,Pyeongchang,Pyeonghae,Pyeongyang,Sabi,Sacheon,Samcheok,Samho,Samrye,Sancheong,Sangdong,Sangju,Sapgyo,Sariwon,Sejong,Seocheon,Seogwipo,Seonghwan,Seongjin,Seongju,Seongnam,Seongsan,Seosan,Seungju,Siheung,Sindong,Sintaein,Soheul,Sokcho,Songak,Songjeong,Songnim,Songtan,Suncheon,Taean,Taebaek,Tongjin,Uijeongbu,Uiryeong,Uiwang,Uljin,Ulleung,Unbong,Ungcheon,Ungjin,Waegwan,Wando,Wayang,Wiryeseong,Wondeok,Yangju,Yangsan,Yangyang,Yecheon,Yeomchi,Yeoncheon,Yeongam,Yeongcheon,Yeongdeok,Yeongdong,Yeonggwang,Yeongju,Yeongwol,Yeongyang,Yeonil,Yongin,Yongjin,Yugu" },
  { name: "Chinese", i: 11, min: 5, max: 10, d: "", m: 0, b: "Anding,Anlu,Anqing,Anshun,Baixing,Banyang,Baoqing,Binzhou,Caozhou,Changbai,Changchun,Changde,Changling,Changsha,Changzhou,Chengdu,Chenzhou,Chizhou,Chongqing,Chuxiong,Chuzhou,Dading,Daming,Datong,Daxing,Dengzhou,Deqing,Dihua,Dingli,Dongan,Dongchang,Dongchuan,Dongping,Duyun,Fengtian,Fengxiang,Fengyang,Fenzhou,Funing,Fuzhou,Ganzhou,Gaoyao,Gaozhou,Gongchang,Guangnan,Guangning,Guangping,Guangxin,Guangzhou,Guiyang,Hailong,Hangzhou,Hanyang,Hanzhong,Heihe,Hejian,Henan,Hengzhou,Hezhong,Huaian,Huaiqing,Huanglong,Huangzhou,Huining,Hulan,Huzhou,Jiading,Jian,Jianchang,Jiangning,Jiankang,Jiaxing,Jiayang,Jilin,Jinan,Jingjiang,Jingzhao,Jinhua,Jinzhou,Jiujiang,Kaifeng,Kaihua,Kangding,Kuizhou,Laizhou,Lianzhou,Liaoyang,Lijiang,Linan,Linhuang,Lintao,Liping,Liuzhou,Longan,Longjiang,Longxing,Luan,Lubin,Luzhou,Mishan,Nanan,Nanchang,Nandian,Nankang,Nanyang,Nenjiang,Ningbo,Ningguo,Ningwu,Ningxia,Ningyuan,Pingjiang,Pingliang,Pingyang,Puer,Puzhou,Qianzhou,Qingyang,Qingyuan,Qingzhou,Qujing,Quzhou,Raozhou,Rende,Ruian,Ruizhou,Shafeng,Shajing,Shaoqing,Shaowu,Shaoxing,Shaozhou,Shinan,Shiqian,Shouchun,Shuangcheng,Shulei,Shunde,Shuntian,Shuoping,Sicheng,Sinan,Sizhou,Songjiang,Suiding,Suihua,Suining,Suzhou,Taian,Taibei,Taiping,Taiwan,Taiyuan,Taizhou,Taonan,Tengchong,Tingzhou,Tongchuan,Tongqing,Tongzhou,Weihui,Wensu,Wenzhou,Wuchang,Wuding,Wuzhou,Xian,Xianchun,Xianping,Xijin,Xiliang,Xincheng,Xingan,Xingde,Xinghua,Xingjing,Xingyi,Xingyuan,Xingzhong,Xining,Xinmen,Xiping,Xuanhua,Xunzhou,Xuzhou,Yanan,Yangzhou,Yanji,Yanping,Yanzhou,Yazhou,Yichang,Yidu,Yilan,Yili,Yingchang,Yingde,Yingtian,Yingzhou,Yongchang,Yongping,Yongshun,Yuanzhou,Yuezhou,Yulin,Yunnan,Yunyang,Zezhou,Zhang,Zhangzhou,Zhaoqing,Zhaotong,Zhenan,Zhending,Zhenhai,Zhenjiang,Zhenxi,Zhenyun,Zhongshan,Zunyi" },
  { name: "Japanese", i: 12, min: 4, max: 10, d: "", m: 0, b: "Abira,Aga,Aikawa,Aizumisato,Ajigasawa,Akkeshi,Amagi,Ami,Ando,Asakawa,Ashikita,Bandai,Biratori,Chonan,Esashi,Fuchu,Fujimi,Funagata,Genkai,Godo,Goka,Gonohe,Gyokuto,Haboro,Hamatonbetsu,Harima,Hashikami,Hayashima,Heguri,Hidaka,Higashiura,Hiranai,Hirogawa,Hiroo,Hodatsushimizu,Hoki,Hokuei,Hokuryu,Horokanai,Ibigawa,Ichikai,Ichikawa,Ichinohe,Iijima,Iizuna,Ikawa,Inagawa,Itakura,Iwaizumi,Iwate,Kaisei,Kamifurano,Kamiita,Kamijima,Kamikawa,Kamishihoro,Kamiyama,Kanda,Kanna,Kasagi,Kasuya,Katsuura,Kawabe,Kawamoto,Kawanehon,Kawanishi,Kawara,Kawasaki,Kawatana,Kawazu,Kihoku,Kikonai,Kin,Kiso,Kitagata,Kitajima,Kiyama,Kiyosato,Kofu,Koge,Kohoku,Kokonoe,Kora,Kosa,Kotohira,Kudoyama,Kumejima,Kumenan,Kumiyama,Kunitomi,Kurate,Kushimoto,Kutchan,Kyonan,Kyotamba,Mashike,Matsumae,Mifune,Mihama,Minabe,Minami,Minamiechizen,Minamitane,Misaki,Misasa,Misato,Miyashiro,Miyoshi,Mori,Moseushi,Mutsuzawa,Nagaizumi,Nagatoro,Nagayo,Nagomi,Nakadomari,Nakanojo,Nakashibetsu,Namegawa,Nanbu,Nanporo,Naoshima,Nasu,Niseko,Nishihara,Nishiizu,Nishikatsura,Nishikawa,Nishinoshima,Nishiwaga,Nogi,Noto,Nyuzen,Oarai,Obuse,Odai,Ogawara,Oharu,Oirase,Oishida,Oiso,Oizumi,Oji,Okagaki,Okutama,Omu,Ono,Osaka,Otobe,Otsuki,Owani,Reihoku,Rifu,Rikubetsu,Rishiri,Rokunohe,Ryuo,Saka,Sakuho,Samani,Satsuma,Sayo,Saza,Setana,Shakotan,Shibayama,Shikama,Shimamoto,Shimizu,Shintomi,Shirakawa,Shisui,Shitara,Sobetsu,Sue,Sumita,Suooshima,Suttsu,Tabuse,Tachiarai,Tadami,Tadaoka,Taiji,Taiki,Takachiho,Takahama,Taketoyo,Taragi,Tateshina,Tatsugo,Tawaramoto,Teshikaga,Tobe,Tokigawa,Toma,Tomioka,Tonosho,Tosa,Toyokoro,Toyotomi,Toyoyama,Tsubata,Tsubetsu,Tsukigata,Tsuno,Tsuwano,Umi,Wakasa,Yamamoto,Yamanobe,Yamatsuri,Yanaizu,Yasuda,Yoichi,Yonaguni,Yoro,Yoshino,Yubetsu,Yugawara,Yuni,Yusuhara,Yuza" },
  { name: "Portuguese", i: 13, min: 5, max: 11, d: "", m: 0.1, b: "Abrigada,Afonsoeiro,Agueda,Aguilada,Alagoas,Alagoinhas,Albufeira,Alcanhoes,Alcobaca,Alcoutim,Aldoar,Alenquer,Alfeizerao,Algarve,Almada,Almagreira,Almeirim,Alpalhao,Alpedrinha,Alvorada,Amieira,Anapolis,Apelacao,Aranhas,Arganil,Armacao,Assenceira,Aveiro,Avelar,Balsas,Barcarena,Barreiras,Barretos,Batalha,Beira,Benavente,Betim,Braga,Braganca,Brasilia,Brejo,Cabeceiras,Cabedelo,Cachoeiras,Cadafais,Calhandriz,Calheta,Caminha,Campinas,Canidelo,Canoas,Capinha,Carmoes,Cartaxo,Carvalhal,Carvoeiro,Cascavel,Castanhal,Caxias,Chapadinha,Chaves,Cocais,Coentral,Coimbra,Comporta,Conde,Coqueirinho,Coruche,Damaia,Dourados,Enxames,Ericeira,Ervidel,Escalhao,Esmoriz,Espinhal,Estela,Estoril,Eunapolis,Evora,Famalicao,Fanhoes,Faro,Fatima,Felgueiras,Ferreira,Figueira,Flecheiras,Florianopolis,Fornalhas,Fortaleza,Freiria,Freixeira,Fronteira,Fundao,Gracas,Gradil,Grainho,Gralheira,Guimaraes,Horta,Ilhavo,Ilheus,Lages,Lagos,Laranjeiras,Lavacolhos,Leiria,Limoeiro,Linhares,Lisboa,Lomba,Lorvao,Lourical,Lourinha,Luziania,Macedo,Machava,Malveira,Marinhais,Maxial,Mealhada,Milharado,Mira,Mirandela,Mogadouro,Montalegre,Mourao,Nespereira,Nilopolis,Obidos,Odemira,Odivelas,Oeiras,Oleiros,Olhalvo,Olinda,Olival,Oliveira,Oliveirinha,Palheiros,Palmeira,Palmital,Pampilhosa,Pantanal,Paradinha,Parelheiros,Pedrosinho,Pegoes,Penafiel,Peniche,Pinhao,Pinheiro,Pombal,Pontal,Pontinha,Portel,Portimao,Quarteira,Queluz,Ramalhal,Reboleira,Recife,Redinha,Ribadouro,Ribeira,Ribeirao,Rosais,Sabugal,Sacavem,Sagres,Sandim,Sangalhos,Santarem,Santos,Sarilhos,Seixas,Seixezelo,Seixo,Silvares,Silveira,Sinhaem,Sintra,Sobral,Sobralinho,Tabuaco,Tabuleiro,Taveiro,Teixoso,Telhado,Telheiro,Tomar,Torreira,Trancoso,Troviscal,Vagos,Varzea,Velas,Viamao,Viana,Vidigal,Vidigueira,Vidual,Vilamar,Vimeiro,Vinhais,Vitoria" },
  { name: "Nahuatl", i: 14, min: 6, max: 13, d: "l", m: 0, b: "Acapulco,Acatepec,Acatlan,Acaxochitlan,Acolman,Actopan,Acuamanala,Ahuacatlan,Almoloya,Amacuzac,Amanalco,Amaxac,Apaxco,Apetatitlan,Apizaco,Atenco,Atizapan,Atlacomulco,Atlapexco,Atotonilco,Axapusco,Axochiapan,Axocomanitla,Axutla,Azcapotzalco,Aztahuacan,Calimaya,Calnali,Calpulalpan,Camotlan,Capulhuac,Chalco,Chapulhuacan,Chapultepec,Chiapan,Chiautempan,Chiconautla,Chihuahua,Chilcuautla,Chimalhuacan,Cholollan,Cihuatlan,Coahuila,Coatepec,Coatetelco,Coatlan,Coatlinchan,Coatzacoalcos,Cocotitlan,Cohetzala,Colima,Colotlan,Coyoacan,Coyohuacan,Cuapiaxtla,Cuauhnahuac,Cuauhtemoc,Cuauhtitlan,Cuautepec,Cuautla,Cuaxomulco,Culhuacan,Ecatepec,Eloxochitlan,Epatlan,Epazoyucan,Huamantla,Huascazaloya,Huatlatlauca,Huautla,Huehuetlan,Huehuetoca,Huexotla,Hueyapan,Hueyotlipan,Hueypoxtla,Huichapan,Huimilpan,Huitzilac,Ixtapallocan,Iztacalco,Iztaccihuatl,Iztapalapa,Lolotla,Malinalco,Mapachtlan,Mazatepec,Mazatlan,Metepec,Metztitlan,Mexico,Miacatlan,Michoacan,Minatitlan,Mixcoac,Mixtla,Molcaxac,Nanacamilpa,Naucalpan,Naupan,Nextlalpan,Nezahualcoyotl,Nopalucan,Oaxaca,Ocotepec,Ocotitlan,Ocotlan,Ocoyoacac,Ocuilan,Ocuituco,Omitlan,Otompan,Otzoloapan,Pacula,Pahuatlan,Panotla,Papalotla,Patlachican,Piaztla,Popocatepetl,Sultepec,Tecamac,Tecolotlan,Tecozautla,Temamatla,Temascalapa,Temixco,Temoac,Temoaya,Tenayuca,Tenochtitlan,Teocuitlatlan,Teotihuacan,Teotlalco,Tepeacac,Tepeapulco,Tepehuacan,Tepetitlan,Tepeyanco,Tepotzotlan,Tepoztlan,Tetecala,Tetlatlahuca,Texcalyacac,Texcoco,Tezontepec,Tezoyuca,Timilpan,Tizapan,Tizayuca,Tlacopan,Tlacotenco,Tlahuac,Tlahuelilpan,Tlahuiltepa,Tlalmanalco,Tlalnepantla,Tlalpan,Tlanchinol,Tlatelolco,Tlaxcala,Tlaxcoapan,Tlayacapan,Tocatlan,Tolcayuca,Toluca,Tonanitla,Tonantzintla,Tonatico,Totolac,Totolapan,Tototlan,Tuchtlan,Tulantepec,Tultepec,Tzompantepec,Xalatlaco,Xaloztoc,Xaltocan,Xiloxoxtla,Xochiatipan,Xochicoatlan,Xochimilco,Xochitepec,Xolotlan,Xonacatlan,Yahualica,Yautepec,Yecapixtla,Yehaultepec,Zacatecas,Zacazonapan,Zacoalco,Zacualpan,Zacualtipan,Zapotlan,Zimapan,Zinacantepec,Zoyaltepec,Zumpahuacan" },
  { name: "Hungarian", i: 15, min: 6, max: 13, d: "", m: 0.1, b: "Aba,Abadszalok,Adony,Ajak,Albertirsa,Alsozsolca,Aszod,Babolna,Bacsalmas,Baktaloranthaza,Balassagyarmat,Balatonalmadi,Balatonboglar,Balkany,Balmazujvaros,Barcs,Bataszek,Batonyterenye,Battonya,Bekes,Berettyoujfalu,Berhida,Biatorbagy,Bicske,Biharkeresztes,Bodajk,Boly,Bonyhad,Budakalasz,Budakeszi,Celldomolk,Csakvar,Csenger,Csongrad,Csorna,Csorvas,Csurgo,Dabas,Demecser,Derecske,Devavanya,Devecser,Dombovar,Dombrad,Dunafoldvar,Dunaharaszti,Dunavarsany,Dunavecse,Edeleny,Elek,Emod,Encs,Enying,Ercsi,Fegyvernek,Fehergyarmat,Felsozsolca,Fertoszentmiklos,Fonyod,Fot,Fuzesabony,Fuzesgyarmat,Gardony,God,Gyal,Gyomaendrod,Gyomro,Hajdudorog,Hajduhadhaz,Hajdusamson,Hajduszoboszlo,Halasztelek,Harkany,Hatvan,Heves,Heviz,Ibrany,Isaszeg,Izsak,Janoshalma,Janossomorja,Jaszapati,Jaszarokszallas,Jaszfenyszaru,Jaszkiser,Kaba,Kalocsa,Kapuvar,Karcag,Kecel,Kemecse,Kenderes,Kerekegyhaza,Keszthely,Kisber,Kiskunmajsa,Kistarcsa,Kistelek,Kisujszallas,Kisvarda,Komadi,Komarom,Komlo,Kormend,Korosladany,Koszeg,Kozarmisleny,Kunhegyes,Kunszentmarton,Kunszentmiklos,Labatlan,Lajosmizse,Lenti,Letavertes,Letenye,Lorinci,Maglod,Mako,Mandok,Marcali,Martonvasar,Mateszalka,Melykut,Mezobereny,Mezocsat,Mezohegyes,Mezokeresztes,Mezokovesd,Mezotur,Mindszent,Mohacs,Monor,Mor,Morahalom,Nadudvar,Nagyatad,Nagyecsed,Nagyhalasz,Nagykallo,Nagykoros,Nagymaros,Nyekladhaza,Nyergesujfalu,Nyirbator,Nyirmada,Nyirtelek,Ocsa,Orkeny,Oroszlany,Paks,Pannonhalma,Paszto,Pecel,Pecsvarad,Pilisvorosvar,Polgar,Polgardi,Pomaz,Puspokladany,Pusztaszabolcs,Putnok,Racalmas,Rackeve,Rakamaz,Rakoczifalva,Sajoszent,Sandorfalva,Sarbogard,Sarkad,Sarospatak,Sarvar,Satoraljaujhely,Siklos,Simontornya,Soltvadkert,Sumeg,Szabadszallas,Szarvas,Szazhalombatta,Szecseny,Szeghalom,Szentgotthard,Szentlorinc,Szerencs,Szigethalom,Szigetvar,Szikszo,Tab,Tamasi,Tapioszele,Tapolca,Teglas,Tet,Tiszafoldvar,Tiszafured,Tiszakecske,Tiszalok,Tiszaujvaros,Tiszavasvari,Tokaj,Tokol,Tompa,Torokbalint,Torokszentmiklos,Totkomlos,Tura,Turkeve,Ujkigyos,ujszasz,Vamospercs,Varpalota,Vasarosnameny,Vasvar,Vecses,Veresegyhaz,Verpelet,Veszto,Zahony,Zalaszentgrot,Zirc,Zsambek" },
  { name: "Turkish", i: 16, min: 4, max: 10, d: "", m: 0, b: "Yelkaya,Buyrukkaya,Erdemtepe,Alakesen,Baharbeyli,Bozbay,Karaoklu,Altunbey,Yalkale,Yalkut,Akardere,Altayburnu,Esentepe,Okbelen,Derinsu,Alaoba,Yamanbeyli,Aykor,Ekinova,Saztepe,Baharkale,Devrekdibi,Alpseki,Ormanseki,Erkale,Yalbelen,Aytay,Yamanyaka,Altaydelen,Esen,Yedieli,Alpkor,Demirkor,Yediyol,Erdemkaya,Yayburnu,Ganiler,Bayatyurt,Kopuzteke,Aytepe,Deniz,Ayan,Ayazdere,Tepe,Kayra,Ayyaka,Deren,Adatepe,Kalkaneli,Bozkale,Yedidelen,Kocayolu,Sazdere,Bozkesen,Oguzeli,Yayladibi,Uluyol,Altay,Ayvar,Alazyaka,Yaloba,Suyaka,Baltaberi,Poyrazdelen,Eymir,Yediyuva,Kurt,Yeltepe,Oktar,Kara Ok,Ekinberi,Er Yurdu,Eren,Erenler,Ser,Oguz,Asay,Bozokeli,Aykut,Ormanyol,Yazkaya,Kalkanova,Yazbeyli,Dokuz Teke,Bilge,Ertensuyu,Kopuzyuva,Buyrukkut,Akardiken,Aybaray,Aslanbeyli,Altun Kaynak,Atikobasi,Yayla Eli,Kor Tepe,Salureli,Kor Kaya,Aybarberi,Kemerev,Yanaray,Beydileli,Buyrukoba,Yolduman,Tengri Tepe,Dokuzsu,Uzunkor,Erdem Yurdu,Kemer,Korteke,Bozokev,Bozoba,Ormankale,Askale,Oguztoprak,Yolberi,Kumseki,Esenobasi,Turkbelen,Ayazseki,Cereneli,Taykut,Bayramdelen,Beydilyaka,Boztepe,Uluoba,Yelyaka,Ulgardiken,Esensu,Baykale,Cerenkor,Bozyol,Duranoba,Aladuman,Denizli,Bahar,Yarkesen,Dokuzer,Yamankaya,Kocatarla,Alayaka,Toprakeli,Sarptarla,Sarpkoy,Serkaynak,Adayaka,Ayazkaynak,Kopuz,Turk,Kart,Kum,Erten,Buyruk,Yel,Ada,Alazova,Ayvarduman,Buyrukok,Ayvartoprak,Uzuntepe,Binseki,Yedibey,Durankale,Alaztoprak,Sarp Ok,Yaparobasi,Yaytepe,Asberi,Kalkankor,Beydiltepe,Adaberi,Bilgeyolu,Ganiyurt,Alkanteke,Esenerler,Asbey,Erdemkale,Erenkaynak,Oguzkoyu,Ayazoba,Boynuztoprak,Okova,Yaloklu,Sivriberi,Yuladiken,Sazbey,Karakaynak,Kopuzkoyu,Buyrukay,Kocakaya,Tepeduman,Yanarseki,Atikyurt,Esenev,Akarbeyli,Yayteke,Devreksungur,Akseki,Baykut,Kalkandere,Ulgarova,Devrekev,Yulabey,Bayatev,Yazsu,Vuraleli,Sivribeyli,Alaova,Alpobasi,Yalyurt,Elmatoprak,Alazkaynak,Esenay,Ertenev,Salurkor,Ekinok,Yalbey,Yeldere,Ganibay,Altaykut,Baltaboy,Ereli,Ayvarsu,Uzunsaz,Bayeli,Erenyol,Kocabay,Derintay,Ayazyol,Aslanoba,Esenkaynak,Ekinlik,Alpyolu,Alayunt,Bozeski,Erkil,Duransuyu,Yulak,Kut,Dodurga,Kutlubey,Kutluyurt,Boynuz,Alayol,Aybar,Aslaneli,Kemerseki,Baltasuyu,Akarer,Ayvarburnu,Boynuzbeyli,Adasungur,Esenkor,Yamanoba,Toprakkor,Uzunyurt,Sungur,Bozok,Kemerli,Alaz,Demirci,Kartepe" },
  { name: "Amazigh", i: 17, min: 4, max: 10, d: "s", m: 0.2, b: "Abkhouch,Adrar,Aeraysh,Afrag,Agadir,Agelmam,Aghmat,Agrakal,Agulmam,Ahaggar,Ait Baha,Ajdir,Akka,Almou,Amegdul,Amizmiz,Amknas,Amlil,Amurakush,Anfa,Annaba,Aousja,Arbat,Arfud,Argoub,Arif,Asfi,Asfru,Ashawen,Assamer,Assif,Awlluz,Ayt Melel,Azaghar,Azila,Azilal,Azmour,Azro,Azrou,Beccar,Beja,Bennour,Benslimane,Berkane,Berrechid,Bizerte,Bjaed,Bouayach,Boudenib,Boufrah,Bouskoura,Boutferda,Darallouch,Dar Bouazza,Darchaabane,Dcheira,Demnat,Denden,Djebel,Djedeida,Drargua,Elhusima,Essaouira,Ezzahra,Fas,Fnideq,Ghezeze,Goubellat,Grisaffen,Guelmim,Guercif,Hammamet,Harrouda,Hdifa,Hoceima,Houara,Idhan,Idurar,Ifendassen,Ifoghas,Ifrane,Ighoud,Ikbir,Imilchil,Imzuren,Inezgane,Irherm,Izoughar,Jendouba,Kacem,Kelibia,Kenitra,Kerrando,Khalidia,Khemisset,Khenifra,Khouribga,Khourigba,Kidal,Korba,Korbous,Lahraouyine,Larache,Leyun,Lqliaa,Manouba,Martil,Mazagan,Mcherga,Mdiq,Megrine,Mellal,Melloul,Midelt,Misur,Mohammedia,Mornag,Mrirt,Nabeul,Nadhour,Nador,Nawaksut,Nefza,Ouarzazate,Ouazzane,Oued Zem,Oujda,Ouladteima,Qsentina,Rades,Rafraf,Safi,Sefrou,Sejnane,Settat,Sijilmassa,Skhirat,Slimane,Somaa,Sraghna,Susa,Tabarka,Tadrart,Taferka,Tafilalt,Tafrawt,Tafza,Tagbalut,Tagerdayt,Taghzut,Takelsa,Taliouine,Tanja,Tantan,Taourirt,Targuist,Taroudant,Tarudant,Tasfelalayt,Tassort,Tata,Tattiwin,Tawnat,Taza,Tazagurt,Tazerka,Tazizawt,Taznakht,Tebourba,Teboursouk,Temara,Testour,Tetouan,Tibeskert,Tifelt,Tijdit,Tinariwen,Tinduf,Tinja,Tittawan,Tiznit,Toubkal,Trables,Tubqal,Tunes,Ultasila,Urup,Wagguten,Wararni,Warzazat,Watlas,Wehran,Wejda,Xamida,Yedder,Youssoufia,Zaghouan,Zahret,Zemmour,Zriba" },
  { name: "Arabic", i: 18, min: 4, max: 9, d: "ae", m: 0.2, b: "Abha,Ajman,Alabar,Alarjam,Alashraf,Alawali,Albawadi,Albirk,Aldhabiyah,Alduwaid,Alfareeq,Algayed,Alhazim,Alhrateem,Alhudaydah,Alhuwaya,Aljahra,Aljubail,Alkhafah,Alkhalas,Alkhawaneej,Alkhen,Alkhobar,Alkhuznah,Allisafah,Almshaykh,Almurjan,Almuwayh,Almuzaylif,Alnaheem,Alnashifah,Alqah,Alqouz,Alqurayyat,Alradha,Alraqmiah,Alsadyah,Alsafa,Alshagab,Alshuqaiq,Alsilaa,Althafeer,Alwasqah,Amaq,Amran,Annaseem,Aqbiyah,Arafat,Arar,Ardah,Asfan,Ashayrah,Askar,Ayaar,Aziziyah,Baesh,Bahrah,Balhaf,Banizayd,Bidiyah,Bisha,Biyatah,Buqhayq,Burayda,Dafiyat,Damad,Dammam,Dariyah,Dhafar,Dhahran,Dhalkut,Dhurma,Dibab,Doha,Dukhan,Duwaibah,Enaker,Fadhla,Fahaheel,Fanateer,Farasan,Fardah,Fujairah,Ghalilah,Ghar,Ghizlan,Ghomgyah,Ghran,Hadiyah,Haffah,Hajanbah,Hajrah,Haqqaq,Haradh,Hasar,Hawiyah,Hebaa,Hefar,Hijal,Husnah,Huwailat,Huwaitah,Irqah,Isharah,Ithrah,Jamalah,Jarab,Jareef,Jazan,Jeddah,Jiblah,Jihanah,Jilah,Jizan,Joraibah,Juban,Jumeirah,Kamaran,Keyad,Khab,Khaiybar,Khasab,Khathirah,Khawarah,Khulais,Kumzar,Limah,Linah,Madrak,Mahab,Mahalah,Makhtar,Mashwar,Masirah,Masliyah,Mastabah,Mazhar,Medina,Meeqat,Mirbah,Mokhtara,Muharraq,Muladdah,Musaykah,Mushayrif,Musrah,Mussafah,Nafhan,Najran,Nakhab,Nizwa,Oman,Qadah,Qalhat,Qamrah,Qasam,Qosmah,Qurain,Quriyat,Qurwa,Radaa,Rafha,Rahlah,Rakamah,Rasheedah,Rasmadrakah,Risabah,Rustaq,Ryadh,Sabtaljarah,Sadah,Safinah,Saham,Saihat,Salalah,Salmiya,Shabwah,Shalim,Shaqra,Sharjah,Sharurah,Shatifiyah,Shidah,Shihar,Shoqra,Shuwaq,Sibah,Sihmah,Sinaw,Sirwah,Sohar,Suhailah,Sulaibiya,Sunbah,Tabuk,Taif,Taqah,Tarif,Tharban,Thuqbah,Thuwal,Tubarjal,Turaif,Turbah,Tuwaiq,Ubar,Umaljerem,Urayarah,Urwah,Wabrah,Warbah,Yabreen,Yadamah,Yafur,Yarim,Yemen,Yiyallah,Zabid,Zahwah,Zallaq,Zinjibar,Zulumah" },
  { name: "Inuit", i: 19, min: 5, max: 15, d: "alutsn", m: 0, b: "Aaluik,Aappilattoq,Aasiaat,Agissat,Agssaussat,Akuliarutsip,Akunnaaq,Alluitsup,Alluttoq,Amitsorsuaq,Ammassalik,Anarusuk,Anguniartarfik,Annertussoq,Annikitsoq,Apparsuit,Apusiaajik,Arsivik,Arsuk,Atammik,Ateqanaq,Atilissuaq,Attu,Augpalugtoq,Aukarnersuaq,Aumat,Auvilkikavsaup,Avadtlek,Avallersuaq,Bjornesk,Blabaerdalen,Blomsterdalen,Brattalhid,Bredebrae,Brededal,Claushavn,Edderfulegoer,Egger,Eqalugalinnguit,Eqalugarssuit,Eqaluit,Eqqua,Etah,Graah,Hakluyt,Haredalen,Hareoen,Hundeo,Igaliku,Igdlorssuit,Igdluluarssuk,Iginniafik,Ikamiut,Ikarissat,Ikateq,Ikermiut,Ikermoissuaq,Ikorfarssuit,Ilimanaq,Illorsuit,Illunnguit,Iluileq,Ilulissat,Imaarsivik,Imartunarssuk,Immikkoortukajik,Innaarsuit,Inneruulalik,Inussullissuaq,Iperaq,Ippik,Iqek,Isortok,Isungartussoq,Itileq,Itissaalik,Itivdleq,Ittit,Ittoqqortoormiit,Ivingmiut,Ivittuut,Kanajoorartuut,Kangaamiut,Kangeq,Kangerluk,Kangerlussuaq,Kanglinnguit,Kapisillit,Kekertamiut,Kiatak,Kiataussaq,Kigatak,Kinaussak,Kingittorsuaq,Kitak,Kitsissuarsuit,Kitsissut,Klenczner,Kook,Kraulshavn,Kujalleq,Kullorsuaq,Kulusuk,Kuurmiit,Kuusuaq,Laksedalen,Maniitsoq,Marrakajik,Mattaangassut,Mernoq,Mittivakkat,Moriusaq,Myggbukta,Naajaat,Nangissat,Nanuuseq,Nappassoq,Narsarmijt,Narsarsuaq,Narssaq,Nasiffik,Natsiarsiorfik,Naujanguit,Niaqornaarsuk,Niaqornat,Nordfjordspasset,Nugatsiaq,Nunarssit,Nunarsuaq,Nunataaq,Nunatakavsaup,Nutaarmiut,Nuugaatsiaq,Nuuk,Nuukullak,Olonkinbyen,Oodaaq,Oqaatsut,Oqaitsunguit,Oqonermiut,Paagussat,Paamiut,Paatuut,Palungataq,Pamialluk,Perserajoq,Pituffik,Puugutaa,Puulkuip,Qaanaq,Qaasuitsup,Qaersut,Qajartalik,Qallunaat,Qaneq,Qaqortok,Qasigiannguit,Qassimiut,Qeertartivaq,Qeqertaq,Qeqertasussuk,Qeqqata,Qernertoq,Qernertunnguit,Qianarreq,Qingagssat,Qoornuup,Qorlortorsuaq,Qullikorsuit,Qunnerit,Qutdleq,Ravnedalen,Ritenbenk,Rypedalen,Saarloq,Saatorsuaq,Saattut,Salliaruseq,Sammeqqat,Sammisoq,Sanningassoq,Saqqaq,Saqqarlersuaq,Saqqarliit,Sarfannguit,Sattiaatteq,Savissivik,Serfanguaq,Sermersooq,Sermiligaaq,Sermilik,Sermitsiaq,Simitakaja,Simiutaq,Singamaq,Siorapaluk,Sisimiut,Sisuarsuit,Sullorsuaq,Suunikajik,Sverdrup,Taartoq,Takiseeq,Tasirliaq,Tasiusak,Tiilerilaaq,Timilersua,Timmiarmiut,Tukingassoq,Tussaaq,Tuttulissuup,Tuujuk,Uiivaq,Uilortussoq,Ujuaakajiip,Ukkusissat,Upernavik,Uttorsiutit,Uumannaq,Uunartoq,Uvkusigssat,Ymer" },
  { name: "Basque", i: 20, min: 4, max: 11, d: "r", m: 0.1, b: "Agurain,Aia,Aiara,Albiztur,Alkiza,Altzaga,Amorebieta,Amurrio,Andoain,Anoeta,Antzuola,Arakaldo,Arantzazu,Arbatzegi,Areatza,Arratzua,Arrieta,Artea,Artziniega,Asteasu,Astigarraga,Ataun,Atxondo,Aulesti,Azkoitia,Azpeitia,Bakio,Baliarrain,Barakaldo,Barrika,Barrundia,Basauri,Beasain,Bedia,Beizama,Belauntza,Berastegi,Bergara,Bermeo,Bernedo,Berriatua,Berriz,Bidania,Bilar,Bilbao,Busturia,Deba,Derio,Donostia,Dulantzi,Durango,Ea,Eibar,Elantxobe,Elduain,Elgeta,Elgoibar,Elorrio,Erandio,Ergoitia,Ermua,Errenteria,Errezil,Eskoriatza,Eskuernaga,Etxebarri,Etxebarria,Ezkio,Forua,Gabiria,Gaintza,Galdakao,Gamiz,Garai,Gasteiz,Gatzaga,Gaubea,Gautegiz,Gaztelu,Gernika,Gerrikaitz,Getaria,Getxo,Gizaburuaga,Goiatz,Gorliz,Gorriaga,Harana,Hernani,Hondarribia,Ibarra,Ibarrangelu,Idiazabal,Iekora,Igorre,Ikaztegieta,Irun,Irura,Iruraiz,Itsaso,Itsasondo,Iurreta,Izurtza,Jatabe,Kanpezu,Karrantza,Kortezubi,Kripan,Kuartango,Lanestosa,Lantziego,Larrabetzu,Lasarte,Laukiz,Lazkao,Leaburu,Legazpi,Legorreta,Legutio,Leintz,Leioa,Lekeitio,Lemoa,Lemoiz,Leza,Lezama,Lezo,Lizartza,Maeztu,Mallabia,Manaria,Markina,Maruri,Menaka,Mendaro,Mendata,Mendexa,Morga,Mundaka,Mungia,Munitibar,Murueta,Muskiz,Mutiloa,Mutriku,Nabarniz,Oiartzun,Oion,Okondo,Olaberria,Onati,Ondarroa,Ordizia,Orendain,Orexa,Oria,Orio,Ormaiztegi,Orozko,Ortuella,Otegi,Otxandio,Pasaia,Plentzia,Santurtzi,Sestao,Sondika,Soraluze,Sukarrieta,Tolosa,Trapagaran,Turtzioz,Ubarrundia,Ubide,Ugao,Urdua,Urduliz,Urizaharra,Urkabustaiz,Urnieta,Urretxu,Usurbil,Xemein,Zabaleta,Zaia,Zaldibar,Zambrana,Zamudio,Zaratamo,Zarautz,Zeberio,Zegama,Zerain,Zestoa,Zierbena,Zigoitia,Ziortza,Zuia,Zumaia,Zumarraga" },
  { name: "Nigerian", i: 21, min: 4, max: 10, d: "", m: 0.3, b: "Abadogo,Abafon,Adealesu,Adeto,Adyongo,Afaga,Afamju,Agigbigi,Agogoke,Ahute,Aiyelaboro,Ajebe,Ajola,Akarekwu,Akunuba,Alawode,Alkaijji,Amangam,Amgbaye,Amtasa,Amunigun,Animahun,Anyoko,Arapagi,Asande,Awgbagba,Awhum,Awodu,Babateduwa,Bandakwai,Bangdi,Bilikani,Birnindodo,Braidu,Bulakawa,Buriburi,Cainnan,Chakum,Chondugh,Dagwarga,Darpi,Dokatofa,Dozere,Ebelibri,Efem,Ekoku,Ekpe,Ewhoeviri,Galea,Gamen,Ganjin,Gantetudu,Gargar,Garinbode,Gbure,Gerti,Gidan,Gitabaremu,Giyagiri,Giyawa,Gmawa,Golakochi,Golumba,Gunji,Gwambula,Gwodoti,Hayinlere,Hayinmaialewa,Hirishi,Hombo,Ibefum,Iberekodo,Icharge,Idofin,Idofinoka,Igbogo,Ijoko,Ijuwa,Ikawga,Ikhin,Ikpakidout,Ikpeoniong,Imuogo,Ipawo,Ipinlerere,Isicha,Itakpa,Jangi,Jare,Jataudakum,Jaurogomki,Jepel,Kafinmalama,Katab,Katanga,Katinda,Katirije,Kaurakimba,Keffinshanu,Kellumiri,Kiagbodor,Kirbutu,Kita,Kogogo,Kopje,Korokorosei,Kotoku,Kuata,Kujum,Kukau,Kunboon,Kuonubogbene,Kurawe,Kushinahu,Kwaramakeri,Ladimeji,Lafiaro,Lahaga,Laindebajanle,Laindegoro,Lakati,Litenswa,Maba,Madarzai,Maianita,Malikansaa,Mata,Megoyo,Meku,Miama,Modi,Mshi,Msugh,Muduvu,Murnachehu,Namnai,Ndamanma,Ndiwulunbe,Ndonutim,Ngbande,Nguengu,Ntoekpe,Nyajo,Nyior,Odajie,Ogbaga,Ogultu,Ogunbunmi,Ojopode,Okehin,Olugunna,Omotunde,Onipede,Onma,Orhere,Orya,Otukwang,Otunade,Rampa,Rimi,Rugan,Rumbukawa,Sabiu,Sangabama,Sarabe,Seboregetore,Shafar,Shagwa,Shata,Shengu,Sokoron,Sunnayu,Tafoki,Takula,Talontan,Tarhemba,Tayu,Ter,Timtim,Timyam,Tindirke,Tokunbo,Torlwam,Tseakaadza,Tseanongo,Tsebeeve,Tsepaegh,Tuba,Tumbo,Tungalombo,Tunganyakwe,Uhkirhi,Umoru,Umuabai,Umuajuju,Unchida,Ungua,Unguwar,Unongo,Usha,Utongbo,Vembera,Wuro,Yanbashi,Yanmedi,Yoku,Zarunkwari,Zilumo,Zulika" },
  { name: "Celtic", i: 22, min: 4, max: 12, d: "nld", m: 0, b: "Aberaman,Aberangell,Aberarth,Aberavon,Aberbanc,Aberbargoed,Aberbeeg,Abercanaid,Abercarn,Abercastle,Abercegir,Abercraf,Abercregan,Abercych,Abercynon,Aberdare,Aberdaron,Aberdaugleddau,Aberdeen,Aberdulais,Aberdyfi,Aberedw,Abereiddy,Abererch,Abereron,Aberfan,Aberffraw,Aberffrwd,Abergavenny,Abergele,Aberglasslyn,Abergorlech,Abergwaun,Abergwesyn,Abergwili,Abergwynfi,Abergwyngregyn,Abergynolwyn,Aberhafesp,Aberhonddu,Aberkenfig,Aberllefenni,Abermain,Abermaw,Abermorddu,Abermule,Abernant,Aberpennar,Aberporth,Aberriw,Abersoch,Abersychan,Abertawe,Aberteifi,Aberthin,Abertillery,Abertridwr,Aberystwyth,Achininver,Afonhafren,Alisaha,Anfosadh,Antinbhearmor,Ardenna,Attacon,Banwen,Beira,Bhrura,Bleddfa,Boioduro,Bona,Boskyny,Boslowenpolbrogh,Boudobriga,Bravon,Brigant,Briganta,Briva,Brosnach,Caersws,Cambodunum,Cambra,Caracta,Catumagos,Centobriga,Ceredigion,Chalain,Chearbhallain,Chlasaigh,Chormaic,Cuileannach,Dinn,Diwa,Dubingen,Duibhidighe,Duro,Ebora,Ebruac,Eburodunum,Eccles,Egloskuri,Eighe,Eireann,Elerghi,Ferkunos,Fhlaithnin,Gallbhuaile,Genua,Ghrainnse,Gwyles,Heartsease,Hebron,Hordh,Inbhear,Inbhir,Inbhirair,Innerleithen,Innerleven,Innerwick,Inver,Inveraldie,Inverallan,Inveralmond,Inveramsay,Inveran,Inveraray,Inverarnan,Inverbervie,Inverclyde,Inverell,Inveresk,Inverfarigaig,Invergarry,Invergordon,Invergowrie,Inverhaddon,Inverkeilor,Inverkeithing,Inverkeithney,Inverkip,Inverleigh,Inverleith,Inverloch,Inverlochlarig,Inverlochy,Invermay,Invermoriston,Inverness,Inveroran,Invershin,Inversnaid,Invertrossachs,Inverugie,Inveruglas,Inverurie,Iubhrach,Karardhek,Kilninver,Kirkcaldy,Kirkintilloch,Krake,Lanngorrow,Latense,Leming,Lindomagos,Llanaber,Llandidiwg,Llandyrnog,Llanfarthyn,Llangadwaldr,Llansanwyr,Lochinver,Lugduno,Magoduro,Mheara,Monmouthshire,Nanshiryarth,Narann,Novioduno,Nowijonago,Octoduron,Penning,Pheofharain,Ponsmeur,Raithin,Ricomago,Rossinver,Salodurum,Seguia,Sentica,Theorsa,Tobargeal,Trealaw,Trefesgob,Trewedhenek,Trewythelan,Tuaisceart,Uige,Vitodurum,Windobona" },
  { name: "Mesopotamian", i: 23, min: 4, max: 9, d: "srpl", m: 0.1, b: "Adab,Adamndun,Adma,Admatum,Agrab,Akkad,Akshak,Amnanum,Andarig,Anshan,Apiru,Apum,Arantu,Arbid,Arpachiyah,Arpad,Arrapha,Ashlakka,Assur,Awan,Babilim,Bad-Tibira,Balawat,Barsip,Birtu,Bit-Bunakki,Borsippa,Chuera,Dashrah,Der,Dilbat,Diniktum,Doura,Dur-Kurigalzu,Dur-Sharrukin,Dur-Untash,Dûr-gurgurri,Ebla,Ekallatum,Ekalte,Emar,Erbil,Eresh,Eridu,Eshnunn,Eshnunna,Gargamish,Gasur,Gawra,Gibil,Girsu,Gizza,Habirun,Habur,Hadatu,Hakkulan,Halab,Halabit,Hamazi,Hamoukar,Haradum,Harbidum,Harran,Harranu,Hassuna,Hatarikka,Hatra,Hissar,Hiyawa,Hormirzad,Ida-Maras,Idamaraz,Idu,Imerishu,Imgur-Enlil,Irisagrig,Irnina,Irridu,Isin,Issinnitum,Iturungal,Izubitum,Jarmo,Jemdet,Kabnak,Kadesh,Kahat,Kalhu,Kar-Shulmanu-Asharedu,Kar-Tukulti-Ninurta,Kar-shulmanu-asharedu,Karana,Karatepe,Kartukulti,Kazallu,Kesh,Kidsha,Kinza,Kish,Kisiga,Kisurra,Kuara,Kurda,Kurruhanni,Kutha,Lagaba,Lagash,Larak,Larsa,Leilan,Malgium,Marad,Mardaman,Mari,Marlik,Mashkan,Mashkan-shapir,Matutem,Me-Turan,Meliddu,Mumbaqat,Nabada,Nagar,Nanagugal,Nerebtum,Nigin,Nimrud,Nina,Nineveh,Ninua,Nippur,Niru,Niya,Nuhashe,Nuhasse,Nuzi,Puzrish-Dagan,Qalatjarmo,Qatara,Qatna,Qattunan,Qidshu,Rapiqum,Rawda,Sagaz,Shaduppum,Shaggaratum,Shalbatu,Shanidar,Sharrukin,Shawwan,Shehna,Shekhna,Shemshara,Shibaniba,Shubat-Enlil,Shurkutir,Shuruppak,Shusharra,Shushin,Sikan,Sippar,Sippar-Amnanum,Sippar-sha-Annunitum,Subatum,Susuka,Tadmor,Tarbisu,Telul,Terqa,Tirazish,Tisbon,Tuba,Tushhan,Tuttul,Tutub,Ubaid,Umma,Ur,Urah,Urbilum,Urkesh,Ursa'um,Uruk,Urum,Uzarlulu,Warka,Washukanni,Zabalam,Zarri-Amnan" },
  { name: "Iranian", i: 24, min: 5, max: 11, d: "", m: 0.1, b: "Abali,Abrisham,Absard,Abuzeydabad,Afus,Alavicheh,Alikosh,Amol,Anarak,Anbar,Andisheh,Anshan,Aran,Ardabil,Arderica,Ardestan,Arjomand,Asgaran,Asgharabad,Ashian,Awan,Babajan,Badrud,Bafran,Baghestan,Baghshad,Bahadoran,Baharan Shahr,Baharestan,Bakun,Bam,Baqershahr,Barzok,Bastam,Behistun,Bitistar,Bumahen,Bushehr,Chadegan,Chahardangeh,Chamgardan,Chermahin,Choghabonut,Chugan,Damaneh,Damavand,Darabgard,Daran,Dastgerd,Dehaq,Dehaqan,Dezful,Dizicheh,Dorcheh,Dowlatabad,Duruntash,Ecbatana,Eslamshahr,Estakhr,Ezhiyeh,Falavarjan,Farrokhi,Fasham,Ferdowsieh,Fereydunshahr,Ferunabad,Firuzkuh,Fuladshahr,Ganjdareh,Ganzak,Gaz,Geoy,Godin,Goldasht,Golestan,Golpayegan,Golshahr,Golshan,Gorgab,Guged,Habibabad,Hafshejan,Hajjifiruz,Hana,Harand,Hasanabad,Hasanlu,Hashtgerd,Hecatompylos,Hormirzad,Imanshahr,Isfahan,Jandaq,Javadabad,Jiroft,Jowsheqan ,Jowzdan,Kabnak,Kahrizak,Kahriz Sang,Kangavar,Karaj,Karkevand,Kashan,Kelishad,Kermanshah,Khaledabad,Khansar,Khorramabad,Khur,Khvorzuq,Kilan,Komeh,Komeshcheh,Konar,Kuhpayeh,Kul,Kushk,Lavasan,Laybid,Liyan,Lyan,Mahabad,Mahallat,Majlesi,Malard,Manzariyeh,Marlik,Meshkat,Meymeh,Miandasht,Mish,Mobarakeh,Nahavand,Nain,Najafabad,Naqshe,Narezzash,Nasimshahr,Nasirshahr,Nasrabad,Natanz,Neyasar,Nikabad,Nimvar,Nushabad,Pakdasht,Parand,Pardis,Parsa,Pasargadai,Patigrabana,Pir Bakran,Pishva,Qahderijan,Qahjaverestan,Qamsar,Qarchak,Qods,Rabat,Ray-shahr,Rezvanshahr,Rhages,Robat Karim,Rozveh,Rudehen,Sabashahr,Safadasht,Sagzi,Salehieh,Sandal,Sarvestan,Sedeh,Sefidshahr,Semirom,Semnan,Shadpurabad,Shah,Shahdad,Shahedshahr,Shahin,Shahpour,Shahr,Shahreza,Shahriar,Sharifabad,Shemshak,Shiraz,Shushan,Shushtar,Sialk,Sin,Sukhteh,Tabas,Tabriz,Takhte,Talkhuncheh,Talli,Tarq,Temukan,Tepe,Tiran,Tudeshk,Tureng,Urmia,Vahidieh,Vahrkana,Vanak,Varamin,Varnamkhast,Varzaneh,Vazvan,Yahya,Yarim,Yasuj,Zarrin Shahr,Zavareh,Zayandeh,Zazeran,Ziar,Zibashahr,Zranka" },
  { name: "Hawaiian", i: 25, min: 5, max: 10, d: "auo", m: 1, b: "Aapueo,Ahoa,Ahuakaio,Ahupau,Alaakua,Alae,Alaeloa,Alamihi,Aleamai,Alena,Alio,Aupokopoko,Halakaa,Haleu,Haliimaile,Hamoa,Hanakaoo,Hanaulu,Hanawana,Hanehoi,Haou,Hikiaupea,Hokuula,Honohina,Honokahua,Honokeana,Honokohau,Honolulu,Honomaele,Hononana,Honopou,Hoolawa,Huelo,Kaalaea,Kaapahu,Kaeo,Kahalehili,Kahana,Kahuai,Kailua,Kainehe,Kakalahale,Kakanoni,Kalenanui,Kaleoaihe,Kalialinui,Kalihi,Kalimaohe,Kaloi,Kamani,Kamehame,Kanahena,Kaniaula,Kaonoulu,Kapaloa,Kapohue,Kapuaikini,Kapunakea,Kauau,Kaulalo,Kaulanamoa,Kauluohana,Kaumakani,Kaumanu,Kaunauhane,Kaupakulua,Kawaloa,Keaa,Keaaula,Keahua,Keahuapono,Kealahou,Keanae,Keauhou,Kelawea,Keokea,Keopuka,Kikoo,Kipapa,Koakupuna,Koali,Kolokolo,Kopili,Kou,Kualapa,Kuhiwa,Kuholilea,Kuhua,Kuia,Kuikui,Kukoae,Kukohia,Kukuiaeo,Kukuipuka,Kukuiula,Kulahuhu,Lapakea,Lapueo,Launiupoko,Lole,Maalo,Mahinahina,Mailepai,Makaakini,Makaalae,Makaehu,Makaiwa,Makaliua,Makapipi,Makapuu,Maluaka,Manawainui,Mehamenui,Moalii,Moanui,Mohopili,Mokae,Mokuia,Mokupapa,Mooiki,Mooloa,Moomuku,Muolea,Nakaaha,Nakalepo,Nakaohu,Nakapehu,Nakula,Napili,Niniau,Nuu,Oloewa,Olowalu,Omaopio,Onau,Onouli,Opaeula,Opana,Opikoula,Paakea,Paeahu,Paehala,Paeohi,Pahoa,Paia,Pakakia,Palauea,Palemo,Paniau,Papaaea,Papaanui,Papaauhau,Papaka,Papauluana,Pauku,Paunau,Pauwalu,Pauwela,Pohakanele,Polaiki,Polanui,Polapola,Poopoo,Poponui,Poupouwela,Puahoowali,Puakea,Puako,Pualaea,Puehuehu,Pueokauiki,Pukaauhuhu,Pukuilua,Pulehu,Puolua,Puou,Puuhaehae,Puuiki,Puuki,Puulani,Puunau,Puuomaile,Uaoa,Uhao,Ukumehame,Ulaino,Ulumalu,Wahikuli,Waianae,Waianu,Waiawa,Waiehu,Waieli,Waikapu,Wailamoa,Wailaulau,Wainee,Waiohole,Waiohonu,Waiohuli,Waiokama,Waiokila,Waiopai,Waiopua,Waipao,Waipionui,Waipouli" },
  { name: "Karnataka", i: 26, min: 5, max: 11, d: "tnl", m: 0, b: "Adityapatna,Adyar,Afzalpur,Aland,Alnavar,Alur,Ambikanagara,Anekal,Ankola,Annigeri,Arkalgud,Arsikere,Athni,Aurad,Badami,Bagalkot,Bagepalli,Bail,Bajpe,Bangalore,Bangarapet,Bankapura,Bannur,Bantval,Basavakalyan,Basavana,Belgaum,Beltangadi,Belur,Bhadravati,Bhalki,Bhatkal,Bhimarayanagudi,Bidar,Bijapur,Bilgi,Birur,Bommasandra,Byadgi,Challakere,Chamarajanagar,Channagiri,Channapatna,Channarayapatna,Chik,Chikmagalur,Chiknayakanhalli,Chikodi,Chincholi,Chintamani,Chitapur,Chitgoppa,Chitradurga,Dandeli,Dargajogihalli,Devadurga,Devanahalli,Dod,Donimalai,Gadag,Gajendragarh,Gangawati,Gauribidanur,Gokak,Gonikoppal,Gubbi,Gudibanda,Gulbarga,Guledgudda,Gundlupet,Gurmatkal,Haliyal,Hangal,Harapanahalli,Harihar,Hassan,Hatti,Haveri,Hebbagodi,Heggadadevankote,Hirekerur,Holalkere,Hole,Homnabad,Honavar,Honnali,Hoovina,Hosakote,Hosanagara,Hosdurga,Hospet,Hubli,Hukeri,Hungund,Hunsur,Ilkal,Indi,Jagalur,Jamkhandi,Jevargi,Jog,Kadigenahalli,Kadur,Kalghatgi,Kamalapuram,Kampli,Kanakapura,Karkal,Karwar,Khanapur,Kodiyal,Kolar,Kollegal,Konnur,Koppa,Koppal,Koratagere,Kotturu,Krishnarajanagara,Krishnarajasagara,Krishnarajpet,Kudchi,Kudligi,Kudremukh,Kumta,Kundapura,Kundgol,Kunigal,Kurgunta,Kushalnagar,Kushtagi,Lakshmeshwar,Lingsugur,Londa,Maddur,Madhugiri,Madikeri,Mahalingpur,Malavalli,Mallar,Malur,Mandya,Mangalore,Manvi,Molakalmuru,Mudalgi,Mudbidri,Muddebihal,Mudgal,Mudhol,Mudigere,Mulbagal,Mulgund,Mulki,Mulur,Mundargi,Mundgod,Munirabad,Mysore,Nagamangala,Nanjangud,Narasimharajapura,Naregal,Nargund,Navalgund,Nipani,Pandavapura,Pavagada,Piriyapatna,Pudu,Puttur,Rabkavi,Raichur,Ramanagaram,Ramdurg,Ranibennur,Raybag,Robertson,Ron,Sadalgi,Sagar,Sakleshpur,Saligram,Sandur,Sankeshwar,Saundatti,Savanur,Sedam,Shahabad,Shahpur,Shaktinagar,Shiggaon,Shikarpur,Shirhatti,Shorapur,Shrirangapattana,Siddapur,Sidlaghatta,Sindgi,Sindhnur,Sira,Siralkoppa,Sirsi,Siruguppa,Somvarpet,Sorab,Sringeri,Srinivaspur,Sulya,Talikota,Tarikere,Tekkalakote,Terdal,Thumbe,Tiptur,Tirthahalli,Tirumakudal,Tumkur,Turuvekere,Udupi,Vijayapura,Wadi,Yadgir,Yelandur,Yelbarga,Yellapur,Yenagudde" },
  { name: "Quechua", i: 27, min: 6, max: 12, d: "l", m: 0, b: "Alpahuaycco,Anchihuay,Anqea,Apurimac,Arequipa,Atahuallpa,Atawalpa,Atico,Ayacucho,Ayahuanco,Ayllu,Cajamarca,Canayre,Canchacancha,Carapo,Carhuac,Carhuacatac,Cashan,Caullaraju,Caxamalca,Cayesh,Ccahuasno,Ccarhuacc,Ccopayoc,Chacchapunta,Chacraraju,Challhuamayo,Champara,Chanchan,Chekiacraju,Chillihua,Chinchey,Chontah,Chopicalqui,Chucuito,Chuito,Chullo,Chumpi,Chuncho,Chupahuacho,Chuquiapo,Chuquisaca,Churup,Cocapata,Cochabamba,Cojup,Collota,Conococha,Corihuayrachina,Cuchoquesera,Cusichaca,Haika,Hanpiq,Hatun,Haywarisqa,Huaca,Huachinga,Hualcan,Hualchancca,Huamanga,Huamashraju,Huancarhuas,Huandoy,Huantsan,Huanupampa,Huarmihuanusca,Huascaran,Huaylas,Huayllabamba,Huayrana,Huaytara,Huichajanca,Huinayhuayna,Huinche,Huinioch,Illiasca,Intipunku,Iquicha,Ishinca,Jahuacocha,Jirishanca,Juli,Jurau,Kakananpunta,Kamasqa,Karpay,Kausay,Khuya,Kuelap,Lanccochayocc,Llaca,Llactapata,Llanganuco,Llaqta,Lloqllasca,Llupachayoc,Luricocha,Machu,Mallku,Matarraju,Mechecc,Mikhuy,Milluacocha,Morochuco,Munay,Ocshapalca,Ollantaytambo,Oroccahua,Oronccoy,Oyolo,Pacamayo,Pacaycasa,Paccharaju,Pachacamac,Pachakamaq,Pachakuteq,Pachakuti,Pachamama,Paititi,Pajaten,Palcaraju,Pallccas,Pampa,Panaka,Paqarina,Paqo,Parap,Paria,Patahuasi,Patallacta,Patibamba,Pisac,Pisco,Pongos,Pucacolpa,Pucahirca,Pucaranra,Pumatambo,Puscanturpa,Putaca,Puyupatamarca,Qawaq,Qayqa,Qochamoqo,Qollana,Qorihuayrachina,Qorimoqo,Qotupuquio,Quenuaracra,Queshque,Quillcayhuanca,Quillya,Quitaracsa,Quitaraju,Qusqu,Rajucolta,Rajutakanan,Rajutuna,Ranrahirca,Ranrapalca,Raria,Rasac,Rimarima,Riobamba,Runkuracay,Rurec,Sacsa,Sacsamarca,Saiwa,Sarapo,Sayacmarca,Sayripata,Sinakara,Sonccopa,Taripaypacha,Taulliraju,Tawantinsuyu,Taytanchis,Tiwanaku,Tocllaraju,Tsacra,Tuco,Tucubamba,Tullparaju,Tumbes,Uchuraccay,Uchuraqay,Ulta,Urihuana,Uruashraju,Vallunaraju,Vilcabamba,Wacho,Wankawillka,Wayra,Yachay,Yahuarraju,Yanamarey,Yanaqucha,Yanesha,Yerupaja" },
  { name: "Swahili", i: 28, min: 4, max: 9, d: "", m: 0, b: "Abim,Adjumani,Alebtong,Amolatar,Amuru,Apac,Arua,Arusha,Babati,Baragoi,Bombo,Budaka,Bugembe,Bugiri,Buikwe,Bukedea,Bukoba,Bukomansimbi,Bukungu,Buliisa,Bundibugyo,Bungoma,Busembatya,Bushenyi,Busia,Busolwe,Butaleja,Butambala,Butere,Buwenge,Buyende,Dadaab,Dodoma,Dokolo,Eldoret,Elegu,Emali,Embu,Entebbe,Garissa,Gede,Gulu,Handeni,Hima,Hoima,Hola,Ibanda,Iganga,Iringa,Isingiro,Isiolo,Jinja,Kaabong,Kabuyanda,Kabwohe,Kagadi,Kajiado,Kakinga,Kakiri,Kakuma,Kalangala,Kaliro,Kalongo,Kalungu,Kampala,Kamwenge,Kanungu,Kapchorwa,Kasese,Kasulu,Katakwi,Kayunga,Keroka,Kiambu,Kibaale,Kibaha,Kibingo,Kibwezi,Kigoma,Kihiihi,Kilifi,Kiruhura,Kiryandongo,Kisii,Kisoro,Kisumu,Kitale,Kitgum,Kitui,Koboko,Korogwe,Kotido,Kumi,Kyazanga,Kyegegwa,Kyenjojo,Kyotera,Lamu,Langata,Lindi,Lodwar,Lokichoggio,Londiani,Loyangalani,Lugazi,Lukaya,Luweero,Lwakhakha,Lwengo,Lyantonde,Machakos,Mafinga,Makambako,Makindu,Malaba,Malindi,Manafwa,Mandera,Marsabit,Masaka,Masindi,Masulita,Matugga,Mayuge,Mbale,Mbarara,Mbeya,Meru,Mitooma,Mityana,Mombasa,Morogoro,Moroto,Moyale,Moyo,Mpanda,Mpigi,Mpondwe,Mtwara,Mubende,Mukono,Muranga,Musoma,Mutomo,Mutukula,Mwanza,Nagongera,Nairobi,Naivasha,Nakapiripirit,Nakaseke,Nakasongola,Nakuru,Namanga,Namayingo,Namutumba,Nansana,Nanyuki,Narok,Naromoru,Nebbi,Ngora,Njeru,Njombe,Nkokonjeru,Ntungamo,Nyahururu,Nyeri,Oyam,Pader,Paidha,Pakwach,Pallisa,Rakai,Ruiru,Rukungiri,Rwimi,Sanga,Sembabule,Shimoni,Shinyanga,Singida,Sironko,Songea,Soroti,Ssabagabo,Sumbawanga,Tabora,Takaungu,Tanga,Thika,Tororo,Tunduma,Vihiga,Voi,Wajir,Wakiso,Watamu,Webuye,Wobulenzi,Wote,Wundanyi,Yumbe,Zanzibar" },
  { name: "Vietnamese", i: 29, min: 3, max: 12, d: "", m: 1, b: "An Giang,Anh Son,An Khe,An Nhon,Ayun Pa,Bac Giang,Bac Kan,Bac Lieu,Bac Ninh,Ba Don,Bao Loc,Ba Ria,Ba Ria-Vung Tau,Ba Thuoc,Ben Cat,Ben Tre,Bien Hoa,Bim Son,Binh Dinh,Binh Duong,Binh Long,Binh Minh,Binh Phuoc,Binh Thuan,Buon Ho,Buon Ma Thuot,Cai Lay,Ca Mau,Cam Khe,Cam Pha,Cam Ranh,Cam Thuy,Can Tho,Cao Bang,Cao Lanh,Cao Phong,Chau Doc,Chi Linh,Con Cuong,Cua Lo,Da Bac,Dak Lak,Da Lat,Da Nang,Di An,Dien Ban,Dien Bien,Dien Bien Phu,Dien Chau,Do Luong,Dong Ha,Dong Hoi,Dong Trieu,Duc Pho,Duyen Hai,Duy Tien,Gia Lai,Gia Nghia,Gia Rai,Go Cong,Ha Giang,Ha Hoa,Hai Duong,Hai Phong,Ha Long,Ha Nam,Ha Noi,Ha Tinh,Ha Trung,Hau Giang,Hoa Binh,Hoang Mai,Hoa Thanh,Ho Chi Minh,Hoi An,Hong Linh,Hong Ngu,Hue,Hung Nguyen,Hung Yen,Huong Thuy,Huong Tra,Khanh Hoa,Kien Tuong,Kim Boi,Kinh Mon,Kon Tum,Ky Anh,Ky Son,Lac Son,Lac Thuy,La Gi,Lai Chau,Lam Thao,Lang Chanh,Lang Son,Lao Cai,Long An,Long Khanh,Long My,Long Xuyen,Luong Son,Mai Chau,Mong Cai,Muong Lat,Muong Lay,My Hao,My Tho,Nam Dan,Nam Dinh,Nga Bay,Nga Nam,Nga Son,Nghe An,Nghia Dan,Nghia Lo,Nghi Loc,Nghi Son,Ngoc Lac,Nha Trang,Nhu Thanh,Nhu Xuan,Ninh Binh,Ninh Hoa,Nong Cong,Phan Rang Thap Cham,Phan Thiet,Pho Yen,Phu Ly,Phu My,Phu Ninh,Phuoc Long,Phu Tho,Phu Yen,Pleiku,Quang Binh,Quang Nam,Quang Ngai,Quang Ninh,Quang Tri,Quang Xuong,Quang Yen,Quan Hoa,Quan Son,Que Phong,Quy Chau,Quy Hop,Quynh Luu,Quy Nhon,Rach Gia,Sa Dec,Sai Gon,Sam Son,Sa Pa,Soc Trang,Song Cau,Song Cong,Son La,Son Tay,Tam Diep,Tam Ky,Tan An,Tan Chau,Tan Ky,Tan Lac,Tan Son,Tan Uyen,Tay Ninh,Thach Thanh,Thai Binh,Thai Hoa,Thai Nguyen,Thanh Chuong,Thanh Hoa,Thieu Hoa,Thuan An,Thua Thien-Hue,Thu Dau Mot,Thu Duc,Thuong Xuan,Tien Giang,Trang Bang,Tra Vinh,Trieu Son,Tu Son,Tuyen Quang,Tuy Hoa,Uong Bi,Viet Tri,Vinh,Vinh Chau,Vinh Loc,Vinh Long,Vinh Yen,Vi Thanh,Vung Tau,Yen Bai,Yen Dinh,Yen Thanh,Yen Thuy" },
  { name: "Cantonese", i: 30, min: 5, max: 11, d: "", m: 0, b: "Chaiwan,Chingchung,Chinghoi,Chingsen,Chingshing,Chiunam,Chiuon,Chiuyeung,Chiyuen,Choihung,Chuehoi,Chuiman,Chungfu,Chungsan,Chunguktsuen,Dakhing,Daopo,Daumun,Dingwu,Dinpak,Donggun,Dongyuen,Duenchau,Fachau,Fanling,Fatgong,Fatshan,Fotan,Fuktien,Fumun,Funggong,Funghoi,Fungshun,Fungtei,Gamtin,Gochau,Goming,Gonghoi,Gongshing,Goyiu,Hanghau,Hangmei,Hengon,Heungchau,Heunggong,Heungkiu,Hingning,Hohfuktong,Hoichue,Hoifung,Hoiping,Hokong,Hokshan,Hoyuen,Hunghom,Hungshuikiu,Jiuling,Kamsheung,Kamwan,Kaulongtong,Keilun,Kinon,Kinsang,Kityeung,Kongmun,Kukgong,Kwaifong,Kwaihing,Kwongchau,Kwongling,Kwongming,Kwuntong,Laichikok,Laiking,Laiwan,Lamtei,Lamtin,Leitung,Leungking,Limkong,Linping,Linshan,Loding,Lokcheong,Lokfu,Longchuen,Longgong,Longmun,Longping,Longwa,Longwu,Lowu,Luichau,Lukfung,Lukho,Lungmun,Macheung,Maliushui,Maonshan,Mauming,Maunam,Meifoo,Mingkum,Mogong,Mongkok,Muichau,Muigong,Muiyuen,Naiwai,Namcheong,Namhoi,Namhong,Namsha,Nganwai,Ngautaukok,Ngchuen,Ngwa,Onting,Pakwun,Paotoishan,Pingshan,Pingyuen,Poklo,Pongon,Poning,Potau,Puito,Punyue,Saiwanho,Saiyingpun,Samshing,Samshui,Samtsen,Samyuenlei,Sanfung,Sanhing,Sanhui,Sanwai,Seiwui,Shamshuipo,Shanmei,Shantau,Shauking,Shekmun,Shekpai,Sheungshui,Shingkui,Shiuhing,Shundak,Shunyi,Shupinwai,Simshing,Siuhei,Siuhong,Siukwan,Siulun,Suikai,Taihing,Taikoo,Taipo,Taishuihang,Taiwai,Taiwohau,Tinhau,Tinshuiwai,Tiukengleng,Toishan,Tongfong,Tonglowan,Tsakyoochung,Tsamgong,Tsangshing,Tseungkwano,Tsimshatsui,Tsinggong,Tsingshantsuen,Tsingwun,Tsingyi,Tsingyuen,Tsiuchau,Tsuenshekshan,Tsuenwan,Tuenmun,Tungchung,Waichap,Waichau,Waidong,Wailoi,Waishing,Waiyeung,Wanchai,Wanfau,Wanshing,Wingon,Wongpo,Wongtaisin,Woping,Wukaisha,Yano,Yaumatei,Yautong,Yenfa,Yeungchun,Yeungdong,Yeungsai,Yeungshan,Yimtin,Yingdak,Yiuping,Yongshing,Yongyuen,Yuenlong,Yuenshing,Yuetsau,Yuknam,Yunping" },
  { name: "Mongolian", i: 31, min: 5, max: 12, d: "aou", m: 0.3, b: "Adaatsag,Airag,Alag Erdene,Altai,Altanshiree,Altantsogts,Arbulag,Baatsagaan,Batnorov,Batshireet,Battsengel,Bayan Adarga,Bayan Agt,Bayanbulag,Bayandalai,Bayandun,Bayangovi,Bayanjargalan,Bayankhongor,Bayankhutag,Bayanlig,Bayanmonkh,Bayannur,Bayannuur,Bayan Ondor,Bayan Ovoo,Bayantal,Bayantsagaan,Bayantumen,Bayan Uul,Bayanzurkh,Berkh,Biger,Binder,Bogd,Bombogor,Bor Ondor,Bugat,Bugt,Bulgan,Buregkhangai,Burentogtokh,Buutsagaan,Buyant,Chandmani,Chandmani Ondor,Choibalsan,Chuluunkhoroot,Chuluut,Dadal,Dalanjargalan,Dalanzadgad,Darhan Muminggan,Darkhan,Darvi,Dashbalbar,Dashinchilen,Delger,Delgerekh,Delgerkhaan,Delgerkhangai,Delgertsogt,Deluun,Deren,Dorgon,Duut,Erdene,Erdenebulgan,Erdeneburen,Erdenedalai,Erdenemandal,Erdenetsogt,Galshar,Galt,Galuut,Govi Ugtaal,Gurvan,Gurvanbulag,Gurvansaikhan,Gurvanzagal,Hinggan,Hodong,Holingol,Hondlon,Horin Ger,Horqin,Hulunbuir,Hure,Ikhkhet,Ikh Tamir,Ikh Uul,Jargalan,Jargalant,Jargaltkhaan,Jarud,Jinst,Khairkhan,Khalhgol,Khaliun,Khanbogd,Khangai,Khangal,Khankh,Khankhongor,Khashaat,Khatanbulag,Khatgal,Kherlen,Khishig Ondor,Khokh,Kholonbuir,Khongor,Khotont,Khovd,Khovsgol,Khuld,Khureemaral,Khurmen,Khutag Ondor,Luus,Mandakh,Mandal Ovoo,Mankhan,Manlai,Matad,Mogod,Monkhkhairkhan,Moron,Most,Myangad,Nogoonnuur,Nomgon,Norovlin,Noyon,Ogii,Olgii,Olziit,Omnodelger,Ondorkhaan,Ondorshil,Ondor Ulaan,Ongniud,Ordos,Orgon,Orkhon,Rashaant,Renchinlkhumbe,Sagsai,Saikhan,Saikhandulaan,Saikhan Ovoo,Sainshand,Saintsagaan,Selenge,Sergelen,Sevrei,Sharga,Sharyngol,Shine Ider,Shinejinst,Shiveegovi,Sumber,Taishir,Tarialan,Tariat,Teshig,Togrog,Togtoh,Tolbo,Tomorbulag,Tonkhil,Tosontsengel,Tsagaandelger,Tsagaannuur,Tsagaan Ovoo,Tsagaan Uur,Tsakhir,Tseel,Tsengel,Tsenkher,Tsenkhermandal,Tsetseg,Tsetserleg,Tsogt,Tsogt Ovoo,Tsogttsetsii,Tumed,Tunel,Tuvshruulekh,Ulaanbadrakh,Ulaankhus,Ulaan Uul,Ulanhad,Ulanqab,Uyench,Yesonbulag,Zag,Zalainur,Zamyn Uud,Zereg" },
  { name: "Human Generic", i: 32, min: 6, max: 11, d: "peolst", m: 0, b: "Amberglen,Angelhand,Arrowden,Autumnband,Autumnkeep,Basinfrost,Basinmore,Bayfrost,Beargarde,Bearmire,Bellcairn,Bellport,Bellreach,Blackwatch,Bleakward,Bonemouth,Boulder,Bridgefalls,Bridgeforest,Brinepeak,Brittlehelm,Bronzegrasp,Castlecross,Castlefair,Cavemire,Claymond,Claymouth,Clearguard,Cliffgate,Cliffshear,Cliffshield,Cloudbay,Cloudcrest,Cloudwood,Coldholde,Cragbury,Crowgrove,Crowvault,Crystalrock,Crystalspire,Cursefield,Curseguard,Cursespell,Dawnforest,Dawnwater,Deadford,Deadkeep,Deepcairn,Deerchill,Demonfall,Dewglen,Dewmere,Diredale,Direden,Dirtshield,Dogcoast,Dogmeadow,Dragonbreak,Dragonhold,Dragonward,Dryhost,Dustcross,Dustwatch,Eaglevein,Earthfield,Earthgate,Earthpass,Ebonfront,Edgehaven,Eldergate,Eldermere,Embervault,Everchill,Evercoast,Falsevale,Faypond,Fayvale,Fayyard,Fearpeak,Flameguard,Flamewell,Freyshell,Ghostdale,Ghostpeak,Gloomburn,Goldbreach,Goldyard,Grassplains,Graypost,Greeneld,Grimegrove,Grimeshire,Heartfall,Heartford,Heartvault,Highbourne,Hillpass,Hollowstorm,Honeywater,Houndcall,Houndholde,Iceholde,Icelight,Irongrave,Ironhollow,Knightlight,Knighttide,Lagoonpass,Lakecross,Lastmere,Laststar,Lightvale,Limeband,Littlehall,Littlehold,Littlemire,Lostcairn,Lostshield,Loststar,Madfair,Madham,Midholde,Mightglen,Millstrand,Mistvault,Mondpass,Moonacre,Moongulf,Moonwell,Mosshand,Mosstide,Mosswind,Mudford,Mudwich,Mythgulch,Mythshear,Nevercrest,Neverfront,Newfalls,Nighthall,Oakenbell,Oakenrun,Oceanstar,Oldreach,Oldwall,Oldwatch,Oxbrook,Oxlight,Pearlhaven,Pinepond,Pondfalls,Pondtown,Pureshell,Quickbell,Quickpass,Ravenside,Roguehaven,Roseborn,Rosedale,Rosereach,Rustmore,Saltmouth,Sandhill,Scorchpost,Scorchstall,Shadeforest,Shademeadow,Shadeville,Shimmerrun,Shimmerwood,Shroudrock,Silentkeep,Silvercairn,Silvergulch,Smallmire,Smoothcliff,Smoothgrove,Smoothtown,Snakemere,Snowbay,Snowshield,Snowtown,Southbreak,Springmire,Springview,Stagport,Steammouth,Steamwall,Steepmoor,Stillhall,Stoneguard,Stonespell,Stormhand,Stormhorn,Sungulf,Sunhall,Swampmaw,Swangarde,Swanwall,Swiftwell,Thorncairn,Thornhelm,Thornyard,Timberside,Tradewick,Westmeadow,Westpoint,Whiteshore,Whitvalley,Wildeden,Wildwell,Wildyard,Winterhaven,Wolfpass" },
  { name: "Elven", i: 33, min: 6, max: 12, d: "lenmsrg", m: 0, b: "Adrindest,Aethel,Afranthemar,Aiqua,Alari,Allanar,Almalian,Alora,Alyanasari,Alyelona,Alyran,Ammar,Anyndell,Arasari,Aren,Ashmebel,Aymlume,Bel-Didhel,Brinorion,Caelora,Chaulssad,Chaundra,Cyhmel,Cyrang,Dolarith,Dolonde,Draethe,Dranzan,Draugaust,E'ana,Eahil,Edhil,Eebel,Efranluma,Eld-Sinnocrin,Elelthyr,Ellanalin,Ellena,Ellorthond,Eltaesi,Elunore,Emyranserine,Entheas,Eriargond,Esari,Esath,Eserius,Eshsalin,Eshthalas,Evraland,Faellenor,Famelenora,Filranlean,Filsaqua,Gafetheas,Gaf Serine,Geliene,Gondorwin,Guallu,Haeth,Hanluna,Haulssad,Heloriath,Himlarien,Himliene,Hinnead,Hlinas,Hloireenil,Hluihei,Hlurthei,Hlynead,Iaenarion,Iaron,Illanathaes,Illfanora,Imlarlon,Imyse,Imyvelian,Inferius,Inlurth,innsshe,Iralserin,Irethtalos,Irholona,Ishal,Ishlashara,Ithelion,Ithlin,Iulil,Jaal,Jamkadi,Kaalume,Kaansera,Karanthanil,Karnosea,Kasethyr,Keatheas,Kelsya,Keth Aiqua,Kmlon,Kyathlenor,Kyhasera,Lahetheas,Lefdorei,Lelhamelle,Lilean,Lindeenil,Lindoress,Litys,Llaughei,Lya,Lyfa,Lylharion,Lynathalas,Machei,Masenoris,Mathethil,Mathentheas,Meethalas,Menyamar,Mithlonde,Mytha,Mythsemelle,Mythsthas,Naahona,Nalore,Nandeedil,Nasad Ilaurth,Nasin,Nathemar,Neadar,Neilon,Nelalon,Nellean,Nelnetaesi,Nilenathyr,Nionande,Nylm,Nytenanas,Nythanlenor,O'anlenora,Obeth,Ofaenathyr,Ollmnaes,Ollsmel,Olwen,Olyaneas,Omanalon,Onelion,Onelond,Orlormel,Ormrion,Oshana,Oshvamel,Raethei,Rauguall,Reisera,Reslenora,Ryanasera,Rymaserin,Sahnor,Saselune,Sel-Zedraazin,Selananor,Sellerion,Selmaluma,Shaeras,Shemnas,Shemserin,Sheosari,Sileltalos,Siriande,Siriathil,Srannor,Sshanntyr,Sshaulu,Syholume,Sylharius,Sylranbel,Taesi,Thalor,Tharenlon,Thelethlune,Thelhohil,Themar,Thene,Thilfalean,Thilnaenor,Thvethalas,Thylathlond,Tiregul,Tlauven,Tlindhe,Ulal,Ullve,Ulmetheas,Ulssin,Umnalin,Umye,Umyheserine,Unanneas,Unarith,Undraeth,Unysarion,Vel-Shonidor,Venas,Vin Argor,Wasrion,Wlalean,Yaeluma,Yeelume,Yethrion,Ymserine,Yueghed,Yuerran,Yuethin" },
  { name: "Dark Elven", i: 34, min: 6, max: 14, d: "nrslamg", m: 0.2, b: "Abaethaggar,Abburth,Afranthemar,Aharasplit,Aidanat,Ald'ruhn,Ashamanu,Ashesari,Ashletheas,Baerario,Baereghel,Baethei,Bahashae,Balmora,Bel-Didhel,Borethanil,Buiyrandyn,Caellagith,Caellathala,Caergroth,Caldras,Chaggar,Chaggaust,Channtar,Charrvhel'raugaust,Chaulssin,Chaundra,ChedNasad,ChetarIthlin,ChethRrhinn,Chymaer,Clarkarond,Cloibbra,Commoragh,Cyrangroth,Cilben,D'eldarc,Daedhrog,Dalkyn,Do'Urden,Doladress,Dolarith,Dolonde,Draethe,Dranzan,Dranzithl,Draugaust,Dreghei,Drelhei,Dryndlu,Dusklyngh,DyonG'ennivalz,Edraithion,Eld-Sinnocrin,Ellorthond,Enhethyr,Entheas,ErrarIthinn,Eryndlyn,Faladhell,Faneadar,Fethalas,Filranlean,Formarion,Ferdor,Gafetheas,Ghrond,Gilranel,Glamordis,Gnaarmok,Gnisis,Golothaer,Gondorwin,Guallidurth,Guallu,Gulshin,Haeth,Haggraef,Harganeth,Harkaldra,Haulssad,Haundrauth,Heloriath,Hlammachar,Hlaughei,Hloireenil,Hluitar,Inferius,Innsshe,Ithilaughym,Iz'aiogith,Jaal,Jhachalkhyn,Kaerabrae,Karanthanil,Karondkar,Karsoluthiyl,Kellyth,Khuul,Lahetheas,Lidurth,Lindeenil,Lirillaquen,LithMy'athar,LlurthDreier,Lolth,Lothuial,Luihaulen'tar,Maeralyn,Maerimydra,Mathathlona,Mathethil,Mellodona,Menagith,Menegwen,Menerrendil,Menzithl,Menzoberranzan,Mila-Nipal,Mithryn,Molagmar,Mundor,Myvanas,Naggarond,Nandeedil,NasadIlaurth,Nauthor,Navethas,Neadar,Nurtaleewe,Nidiel,Noruiben,Olwen,O'lalona,Obeth,Ofaenathyr,Orlormel,Orlytlar,Pelagiad,Raethei,Raugaust,Rauguall,Rilauven,Rrharrvhei,Sadrith,Sel-Zedraazin,Seydaneen,Shaz'rir,Skaal,Sschindylryn,Shamath,Shamenz,Shanntur,Sshanntynlan,Sshanntyr,Shaulssin,SzithMorcane,Szithlin,Szobaeth,Sirdhemben,T'lindhet,Tebh'zhor,Telmere,Telnarquel,Tharlarast,Thylathlond,Tlaughe,Trizex,Tyrybblyn,Ugauth,Ughym,Uhaelben,Ullmatalos,Ulmetheas,Ulrenserine,Uluitur,Undraeth,Undraurth,Undrek'Thoz,Ungethal,UstNatha,Uthaessien,V'elddrinnsshar,Vaajha,Vel-Shonidor,Velddra,Velothi,Venead,Vhalth'vha,Vinargothr,Vojha,Waethe,Waethei,Xaalkis,Yakaridan,Yeelume,Yridhremben,Yuethin,Yuethindrynn,Zirnakaynin" },
  { name: "Dwarven", i: 35, min: 4, max: 11, d: "dk", m: 0, b: "Addundad,Ahagzad,Ahazil,Akil,Akzizad,Anumush,Araddush,Arar,Arbhur,Badushund,Baragzig,Baragzund,Barakinb,Barakzig,Barakzinb,Barakzir,Baramunz,Barazinb,Barazir,Bilgabar,Bilgatharb,Bilgathaz,Bilgila,Bilnaragz,Bilnulbar,Bilnulbun,Bizaddum,Bizaddush,Bizanarg,Bizaram,Bizinbiz,Biziram,Bunaram,Bundinar,Bundushol,Bundushund,Bundushur,Buzaram,Buzundab,Buzundush,Gabaragz,Gabaram,Gabilgab,Gabilgath,Gabizir,Gabunal,Gabunul,Gabuzan,Gatharam,Gatharbhur,Gathizdum,Gathuragz,Gathuraz,Gila,Giledzir,Gilukkhath,Gilukkhel,Gunala,Gunargath,Gunargil,Gundumunz,Gundusharb,Gundushizd,Kharbharbiln,Kharbhatharb,Kharbhela,Kharbilgab,Kharbuzadd,Khatharbar,Khathizdin,Khathundush,Khazanar,Khazinbund,Khaziragz,Khaziraz,Khizdabun,Khizdusharbh,Khizdushath,Khizdushel,Khizdushur,Kholedzar,Khundabiln,Khundabuz,Khundinarg,Khundushel,Khuragzig,Khuramunz,Kibarak,Kibilnal,Kibizar,Kibunarg,Kibundin,Kibuzan,Kinbadab,Kinbaragz,Kinbarakz,Kinbaram,Kinbizah,Kinbuzar,Nala,Naledzar,Naledzig,Naledzinb,Naragzah,Naragzar,Naragzig,Narakzah,Narakzar,Naramunz,Narazar,Nargabad,Nargabar,Nargatharb,Nargila,Nargundum,Nargundush,Nargunul,Narukthar,Narukthel,Nula,Nulbadush,Nulbaram,Nulbilnarg,Nulbunal,Nulbundab,Nulbundin,Nulbundum,Nulbuzah,Nuledzah,Nuledzig,Nulukkhaz,Nulukkhund,Nulukkhur,Sharakinb,Sharakzar,Sharamunz,Sharbarukth,Shatharbhizd,Shatharbiz,Shathazah,Shathizdush,Shathola,Shaziragz,Shizdinar,Shizdushund,Sholukkharb,Shundinulb,Shundushund,Shurakzund,Shuramunz,Tumunzadd,Tumunzan,Tumunzar,Tumunzinb,Tumunzir,Ukthad,Ulbirad,Ulbirar,Ulunzar,Ulur,Umunzad,Undalar,Undukkhil,Undun,Undur,Unduzur,Unzar,Unzathun,Usharar,Zaddinarg,Zaddushur,Zaharbad,Zaharbhizd,Zarakib,Zarakzar,Zaramunz,Zarukthel,Zinbarukth,Zirakinb,Zirakzir,Ziramunz,Ziruktharbh,Zirukthur,Zundumunz" },
  { name: "Goblin", i: 36, min: 4, max: 9, d: "eag", m: 0, b: "Asinx,Bhiagielt,Biokvish,Blix,Blus,Bratliaq,Breshass,Bridvelb,Brybsil,Bugbig,Buyagh,Cel,Chalk,Chiafzia,Chox,Cielb,Cosvil,Crekork,Crild,Croibieq,Diervaq,Dobruing,Driord,Eebligz,Een,Enissee,Esz,Far,Felhob,Froihiofz,Fruict,Fygsee,Gagablin,Gigganqi,Givzieqee,Glamzofs,Glernaahx,Gneabs,Gnoklig,Gobbledak,gobbok,Gobbrin,Heszai,Hiszils,Hobgar,Honk,Iahzaarm,Ialsirt,Ilm,Ish,Jasheafta,Joimtoilm,Kass,Katmelt,Kleabtong,Kleardeek,Klilm,Kluirm,Kuipuinx,Moft,Mogg,Nilbog,Oimzoishai,Onq,Ozbiard,Paas,Phax,Phigheldai,Preang,Prolkeh,Pyreazzi,Qeerags,Qosx,Rekx,Shaxi,Sios,Slehzit,Slofboif,Slukex,Srefs,Srurd,Stiaggaltia,Stiolx,Stioskurt,Stroir,Strytzakt,Stuikvact,Styrzangai,Suirx,Swaxi,Taxai,Thelt,Thresxea,Thult,Traglila,Treaq,Ulb,Ulm,Utha,Utiarm,Veekz,Vohniots,Vreagaald,Watvielx,Wrogdilk,Wruilt,Xurx,Ziggek,Zriokots" },
  { name: "Orc", i: 37, min: 4, max: 8, d: "gzrcu", m: 0, b: "Adgoz,Adgril-Gha,Adog,Adzurd,Agkadh,Agzil-Ghal,Akh,Ariz-Dru,Arkugzo,Arrordri,Ashnedh,Azrurdrekh,Bagzildre,Bashnud,Bedgez-Graz,Bhakh,Bhegh,Bhiccozdur,Bhicrur,Bhirgoshbel,Bhog,Bhurkrukh,Bod-Rugniz,Bogzel,Bozdra,Bozgrun,Bozziz,Bral-Lazogh,Brazadh,Brogved,Brogzozir,Brolzug,Brordegeg,Brorkril-Zrog,Brugroz,Brukh-Zrabrul,Brur-Korre,Bulbredh,Bulgragh,Chaz-Charard,Chegan-Khed,Chugga,Chuzar,Dhalgron-Mog,Dhazon-Ner,Dhezza,Dhoddud,Dhodh-Brerdrodh,Dhodh-Ghigin,Dhoggun-Bhogh,Dhulbazzol,Digzagkigh,Dirdrurd,Dodkakh,Dorgri,Drizdedh,Drobagh,Drodh-Ashnugh,Drogvukh-Drodh,Drukh-Qodgoz,Drurkuz,Dududh,Dur-Khaddol,Egmod,Ekh-Beccon,Ekh-Krerdrugh,Ekh-Mezred,Gagh-Druzred,Gazdrakh-Vrard,Gegnod,Gerkradh,Ghagrocroz,Ghared-Krin,Ghedgrolbrol,Gheggor,Ghizgil,Gho-Ugnud,Gholgard,Gidh-Ucceg,Goccogmurd,Golkon,Graz-Khulgag,Gribrabrokh,Gridkog,Grigh-Kaggaz,Grirkrun-Qur,Grughokh,Grurro,Gugh-Zozgrod,Gur-Ghogkagh,Ibagh-Chol,Ibruzzed,Ibul-Brad,Iggulzaz,Ikh-Ugnan,Irdrelzug,Irmekh-Bhor,Kacruz,Kalbrugh,Karkor-Zrid,Kazzuz-Zrar,Kezul-Bruz,Kharkiz,Khebun,Khorbric,Khuldrerra,Khuzdraz,Kirgol,Koggodh,Korkrir-Grar,Kraghird,Krar-Zurmurd,Krigh-Bhurdin,Kroddadh,Krudh-Khogzokh,Kudgroccukh,Kudrukh,Kudzal,Kuzgrurd-Dedh,Larud,Legvicrodh,Lorgran,Lugekh,Lulkore,Mazgar,Merkraz,Mocculdrer,Modh-Odod,Morbraz,Mubror,Muccug-Ghuz,Mughakh-Chil,Murmad,Nazad-Ludh,Negvidh,Nelzor-Zroz,Nirdrukh,Nogvolkar,Nubud,Nuccag,Nudh-Kuldra,Nuzecro,Oddigh-Krodh,Okh-Uggekh,Ordol,Orkudh-Bhur,Orrad,Qashnagh,Qiccad-Chal,Qiddolzog,Qidzodkakh,Qirzodh,Rarurd,Reradgri,Rezegh,Rezgrugh,Rodrekh,Rogh-Chirzaz,Rordrushnokh,Rozzez,Ruddirgrad,Rurguz-Vig,Ruzgrin,Ugh-Vruron,Ughudadh,Uldrukh-Bhudh,Ulgor,Ulkin,Ummugh-Ekh,Uzaggor,Uzdriboz,Uzdroz,Uzord,Uzron,Vaddog,Vagord-Khod,Velgrudh,Verrugh,Vrazin,Vrobrun,Vrugh-Nardrer,Vrurgu,Vuccidh,Vun-Gaghukh,Zacrad,Zalbrez,Zigmorbredh,Zordrordud,Zorrudh,Zradgukh,Zragmukh,Zragrizgrakh,Zraldrozzuz,Zrard-Krodog,Zrazzuz-Vaz,Zrigud,Zrulbukh-Dekh,Zubod-Ur,Zulbriz,Zun-Bergrord" },
  { name: "Giant", i: 38, min: 5, max: 10, d: "kdtng", m: 0, b: "Addund,Aerora,Agane,Anumush,Arangrim,Bahourg,Baragzund,Barakinb,Barakzig,Barakzinb,Baramunz,Barazinb,Beornelde,Beratira,Borgbert,Botharic,Bremrol,Brerstin,Brildung,Brozu,Bundushund,Burthug,Chazruc,Chergun,Churtec,Dagdhor,Dankuc,Darnaric,Debuch,Dina,Dinez,Diru,Drard,Druguk,Dugfast,Duhal,Dulkun,Eldond,Enuz,Eraddam,Eradhelm,Froththorn,Fynwyn,Gabaragz,Gabaram,Gabizir,Gabuzan,Gagkake,Galfald,Galgrim,Gatal,Gazin,Geru,Gila,Giledzir,Girkun,Glumvat,Gluthmark,Gomruch,Gorkege,Gortho,Gostuz,Grimor,Grimtira,Guddud,Gudgiz,Gulwo,Gunargath,Gundusharb,Guril,Gurkale,Guruge,Guzi,Hargarth,Hartreo,Heimfara,Hildlaug,Idgurth,Inez,Inginy,Iora,Irkin,Jaldhor,Jarwar,Jornangar,Jornmoth,Kakkek,Kaltoch,Kegkez,Kengord,Kharbharbiln,Khatharbar,Khathizdin,Khazanar,Khaziragz,Khizdabun,Khizdushel,Khundinarg,Kibarak,Kibizar,Kigine,Kilfond,Kilkan,Kinbadab,Kinbuzar,Koril,Kostand,Kuzake,Lindira,Lingarth,Maerdis,Magald,Marbold,Marbrand,Memron,Minu,Mistoch,Morluch,Mornkin,Morntaric,Nagu,Naragzah,Naramunz,Narazar,Nargabar,Nargatharb,Nargundush,Nargunul,Natan,Natil,Neliz,Nelkun,Noluch,Norginny,Nulbaram,Nulbilnarg,Nuledzah,Nuledzig,Nulukkhaz,Nulukkhur,Nurkel,Oci,Olane,Oldstin,Orga,Ranava,Ranhera,Rannerg,Rirkan,Rizen,Rurki,Rurkoc,Sadgach,Sgandrol,Sharakzar,Shatharbiz,Shathizdush,Shathola,Shizdinar,Sholukkharb,Shundushund,Shurakzund,Sidga,Sigbeorn,Sigbi,Solfod,Somrud,Srokvan,Stighere,Sulduch,Talkale,Theoddan,Theodgrim,Throtrek,Tigkiz,Tolkeg,Toren,Tozage,Tulkug,Tumunzar,Umunzad,Undukkhil,Usharar,Valdhere,Varkud,Velfirth,Velhera,Vigkan,Vorkige,Vozig,Vylwed,Widhyrde,Wylaeya,Yili,Yotane,Yudgor,Yulkake,Zigez,Zugkan,Zugke" },
  { name: "Draconic", i: 39, min: 6, max: 14, d: "aliuszrox", m: 0, b: "Aaronarra,Adalon,Adamarondor,Aeglyl,Aerosclughpalar,Aghazstamn,Aglaraerose,Agoshyrvor,Alduin,Alhazmabad,Altagos,Ammaratha,Amrennathed,Anaglathos,Andrathanach,Araemra,Araugauthos,Arauthator,Arharzel,Arngalor,Arveiaturace,Athauglas,Augaurath,Auntyrlothtor,Azarvilandral,Azhaq,Balagos,Baratathlaer,Bleucorundum,BrazzPolis,Canthraxis,Capnolithyl,Charvekkanathor,Chellewis,Chelnadatilar,Cirrothamalan,Claugiyliamatar,Cragnortherma,Dargentum,Dendeirmerdammarar,Dheubpurcwenpyl,Domborcojh,Draconobalen,Dragansalor,Dupretiskava,Durnehviir,Eacoathildarandus,Eldrisithain,Enixtryx,Eormennoth,Esmerandanna,Evenaelorathos,Faenphaele,Felgolos,Felrivenser,Firkraag,Fll'Yissetat,Furlinastis,Galadaeros,Galglentor,Garnetallisar,Garthammus,Gaulauntyr,Ghaulantatra,Glouroth,Greshrukk,Guyanothaz,Haerinvureem,Haklashara,Halagaster,Halaglathgar,Havarlan,Heltipyre,Hethcypressarvil,Hoondarrh,Icehauptannarthanyx,Iiurrendeem,Ileuthra,Iltharagh,Ingeloakastimizilian,Irdrithkryn,Ishenalyr,Iymrith,Jaerlethket,Jalanvaloss,Jharakkan,Kasidikal,Kastrandrethilian,Khavalanoth,Khuralosothantar,Kisonraathiisar,Kissethkashaan,Kistarianth,Klauth,Klithalrundrar,Krashos,Kreston,Kriionfanthicus,Krosulhah,Krustalanos,Kruziikrel,Kuldrak,Lareth,Latovenomer,Lhammaruntosz,Llimark,Ma'fel'no'sei'kedeh'naar,MaelestorRex,Magarovallanthanz,Mahatnartorian,Mahrlee,Malaeragoth,Malagarthaul,Malazan,Maldraedior,Maldrithor,MalekSalerno,Maughrysear,Mejas,Meliordianix,Merah,Mikkaalgensis,Mirmulnir,Mistinarperadnacles,Miteach,Mithbarazak,Morueme,Moruharzel,Naaslaarum,Nahagliiv,Nalavarauthatoryl,Naxorlytaalsxar,Nevalarich,Nolalothcaragascint,Nurvureem,Nymmurh,Odahviing,Olothontor,Ormalagos,Otaaryliakkarnos,Paarthurnax,Pelath,Pelendralaar,Praelorisstan,Praxasalandos,Protanther,Qiminstiir,Quelindritar,Ralionate,Rathalylaug,Rathguul,Rauglothgor,Raumorthadar,Relonikiv,Ringreemeralxoth,Roraurim,Rynnarvyx,Sablaxaahl,Sahloknir,Sahrotaar,Samdralyrion,Saryndalaghlothtor,Sawaka,Shalamalauth,Shammagar,Sharndrel,Shianax,Skarlthoon,Skurge,Smergadas,Ssalangan,Sssurist,Sussethilasis,Sylvallitham,Tamarand,Tantlevgithus,Tarlacoal,Tenaarlaktor,Thalagyrt,Tharas'kalagram,Thauglorimorgorus,Thoklastees,Thyka,Tsenshivah,Ueurwen,Uinnessivar,Urnalithorgathla,Velcuthimmorhar,Velora,Vendrathdammarar,Venomindhar,Viinturuth,Voaraghamanthar,Voslaarum,Vr'tark,Vrondahorevos,Vuljotnaak,Vulthuryol,Wastirek,Worlathaugh,Xargithorvar,Xavarathimius,Yemere,Ylithargathril,Ylveraasahlisar,Za-Jikku,Zarlandris,Zellenesterex,Zilanthar,Zormapalearath,Zundaerazylym,Zz'Pzora" },
  { name: "Arachnid", i: 40, min: 4, max: 10, d: "erlsk", m: 0, b: "Aaqok'ser,Aiced,Aizachis,Allinqel,As'taq,Ashrash,Caaqtos,Ceek'sax,Ceezuq,Cek'sier,Cen'qi,Ceqzocer,Cezeed,Chachocaq,Charis,Chashilieth,Checib,Chernul,Chezi,Chiazu,Chishros,Chixhi,Chizhi,Chollash,Choq'sha,Cinchichail,Collul,Ecush'taid,Ekiqe,Eqas,Er'uria,Erikas,Es'tase,Esrub,Exha,Haqsho,Hiavheesh,Hitha,Hok'thi,Hossa,Iacid,Iciever,Illuq,Isnir,Keezut,Kheellavas,Kheizoh,Khiachod,Khika,Khirzur,Khonrud,Khrakku,Khraqshis,Khrethish'ti,Khriashus,Khrika,Khrirni,Klashirel,Kleil'sha,Klishuth,Krarnit,Kras'tex,Krotieqas,Lais'tid,Laizuh,Lasnoth,Len'qeer,Leqanches,Lezad,Lhilir,Lhivhath,Lhok'thu,Lialliesed,Liaraq,Liceva,Lichorro,Lilla,Lokieqib,Nakur,Neerhaca,Neet'er,Neezoh,Nenchiled,Nerhalneth,Nir'ih,Nizus,Noreeqo,On'qix,Qalitho,Qas'tor,Qasol,Qavrud,Qavud,Qazar,Qazru,Qekno,Qeqravee,Qes'tor,Qhaik'sal,Qhak'sish,Qhazsakais,Qheliva,Qhenchaqes,Qherazal,Qhon'qos,Qhosh,Qish'tur,Qisih,Qorhoci,Qranchiq,Racith,Rak'zes,Ranchis,Rarhie,Rarzi,Rarzisiaq,Ras'tih,Ravosho,Recad,Rekid,Rernee,Rertachis,Rezhokketh,Reziel,Rhacish,Rhail'shel,Rhairhizse,Rhakivex,Rhaqeer,Rhartix,Rheciezsei,Rheevid,Rhel'shir,Rhevhie,Rhiavekot,Rhikkos,Rhiqese,Rhiqi,Rhiqracar,Rhisned,Rhousnateb,Riakeesnex,Rintachal,Rir'ul,Rourk'u,Rouzakri,Sailiqei,Sanchiqed,Saqshu,Sat'ier,Sazi,Seiqas,Shieth'i,Shiqsheh,Shizha,Shrachuvo,Shranqo,Shravhos,Shravuth,Shreerhod,Shrethuh,Shriantieth,Shronqash,Shrovarhir,Shrozih,Siacaqoh,Siezosh,Siq'sha,Sirro,Sornosi,Srachussi,Szaca,Szacih,Szaqova,Szasu,Szazhilos,Szeerrud,Szeezsad,Szeknur,Szesir,Szezhirros,Szilshith,Szon'qol,Szornuq,Xeekke,Yeek'su,Yeeq'zox,Yeqil,Yeqroq,Yeveed,Yevied,Yicaveeh,Yirresh,Yisie,Yithik'thaih,Yorhaqshes,Zacheek'sa,Zakkasa,Zelraq,Zeqo,Zharuncho,Zhath'arhish,Zhavirrit,Zhazilraq,Zhazsachiel,Zhek'tha,Zhequ,Zhias'ted,Zhicat,Zhicur,Zhirhacil,Zhizri,Zhochizses,Ziarih,Zirnib" },
  { name: "Serpents", i: 41, min: 5, max: 11, d: "slrk", m: 0, b: "Aj'ha,Aj'i,Aj'tiss,Ajakess,Aksas,Aksiss,Al'en,An'jeshe,Apjige,Arkkess,Athaz,Atus,Azras,Caji,Cakrasar,Cal'arrun,Capji,Cathras,Cej'han,Ces,Cez'jenta,Cij'te,Cinash,Cizran,Coth'jus,Cothrash,Culzanek,Cunaless,Ej'tesh,Elzazash,Ergek,Eshjuk,Ethris,Gan'jas,Gapja,Gar'thituph,Gopjeguss,Gor'thesh,Gragishaph,Grar'theness,Grath'ji,Gressinas,Grolzesh,Grorjar,Grozrash,Guj'ika,Harji,Hej'hez,Herkush,Horgarrez,Illuph,Ipjar,Ithashin,Kaj'ess,Kar'kash,Kepjusha,Ki'kintus,Kissere,Koph,Kopjess,Kra'kasher,Krak,Krapjez,Krashjuless,Kraz'ji,Krirrigis,Krussin,Ma'lush,Mage,Maj'tak,Mal'a,Mapja,Mar'kash,Mar'kis,Marjin,Mas,Mathan,Men'jas,Meth'jaresh,Mij'hegak,Min'jash,Mith'jas,Monassu,Moss,Naj'hass,Najugash,Nak,Napjiph,Nar'ka,Nar'thuss,Narrusha,Nash,Nashjekez,Nataph,Nij'ass,Nij'tessiph,Nishjiss,Norkkuss,Nus,Olluruss,Or'thi,Or'thuss,Paj'a,Parkka,Pas,Pathujen,Paz'jaz,Pepjerras,Pirkkanar,Pituk,Porjunek,Pu'ke,Ragen,Ran'jess,Rargush,Razjuph,Rilzan,Riss,Rithruz,Rorgiss,Rossez,Rraj'asesh,Rraj'tass,Rrar'kess,Rrar'thuph,Rras,Rrazresh,Rrej'hish,Rrigelash,Rris,Rris,Rroksurrush,Rukrussush,Rurri,Russa,Ruth'jes,Sa'kitesh,Sar'thass,Sarjas,Sazjuzush,Ser'thez,Sezrass,Shajas,Shas,Shashja,Shass,Shetesh,Shijek,Shun'jaler,Shurjarri,Skaler,Skalla,Skallentas,Skaph,Skar'kerriz,Skath'jeruk,Sker'kalas,Skor,Skoz'ji,Sku'lu,Skuph,Skur'thur,Slalli,Slalt'har,Slelziress,Slil'ar,Sloz'jisa,Sojesh,Solle,Sorge,Sral'e,Sran'ji,Srapjess,Srar'thazur,Srash,Srath'jess,Srathrarre,Srerkkash,Srus,Sruss'tugeph,Sun,Suss'tir,Uzrash,Vargush,Vek,Vess'tu,Viph,Vult'ha,Vupjer,Vushjesash,Xagez,Xassa,Xulzessu,Zaj'tiss,Zan'jer,Zarriss,Zassegus,Zirres,Zsor,Zurjass" },
  { name: "Levantine", i: 42, min: 4, max: 12, d: "ankprs", m: 0, b: "Adme,Adramet,Agadir,Akko,Akzib,Alimas,Alis-Ubbo,Alqosh,Amid,Ammon,Ampi,Amurru,Andarig,Anpa,Araden,Aram,Arwad,Ashkelon,Athar,Atiq,Aza,Azeka,Baalbek,Babel,Batrun,Beerot,Beersheba,Beit Shemesh,Berytus,Bet Agus,Bet Anya,Beth-Horon,Bethel,Bethlehem,Bethuel,Bet Nahrin,Bet Nohadra,Bet Zalin,Birmula,Biruta,Bit Agushi,Bitan,Bit Zamani,Cerne,Dammeseq,Darmsuq,Dor,Eddial,Eden Ekron,Elah,Emek,Emun,Ephratah,Eyn Ganim,Finike,Gades,Galatia,Gaza,Gebal,Gedera,Gerizzim,Gethsemane,Gibeon,Gilead,Gilgal,Golgotha,Goshen,Gytte,Hagalil,Haifa,Halab,Haqel Dma,Har Habayit,Har Nevo,Har Pisga,Havilah,Hazor,Hebron,Hormah,Iboshim,Iriho,Irinem,Irridu,Israel,Kadesh,Kanaan,Kapara,Karaly,Kart-Hadasht,Keret Chadeshet,Kernah,Kesed,Keysariya,Kfar,Kfar Nahum,Khalibon,Khalpe,Khamat,Kiryat,Kittim,Kurda,Lapethos,Larna,Lepqis,Lepriptza,Liksos,Lod,Luv,Malaka,Malet,Marat,Megido,Melitta,Merdin,Metsada,Mishmarot,Mitzrayim,Moab,Mopsos,Motye,Mukish,Nampigi,Nampigu,Natzrat,Nimrud,Nineveh,Nob,Nuhadra,Oea,Ofir,Oyat,Phineka,Phoenicus,Pleshet,Qart-Tubah Sarepta,Qatna,Rabat Amon,Rakkath,Ramat Aviv,Ramitha,Ramta,Rehovot,Reshef,Rushadir,Rushakad,Samrin,Sefarad,Sehyon,Sepat,Sexi,Sharon,Shechem,Shefelat,Shfanim,Shiloh,Shmaya,Shomron,Sidon,Sinay,Sis,Solki,Sur,Suria,Tabetu,Tadmur,Tarshish,Tartus,Teberya,Tefessedt,Tekoa,Teyman,Tinga,Tipasa,Tsabratan,Tur Abdin,Tzarfat,Tziyon,Tzor,Ugarit,Unubaal,Ureshlem,Urhay,Urushalim,Vaga,Yaffa,Yamhad,Yam hamelach,Yam Kineret,Yamutbal,Yathrib,Yaudi,Yavne,Yehuda,Yerushalayim,Yev,Yevus,Yizreel,Yurdnan,Zarefat,Zeboim,Zeurta,Zeytim,Zikhron,Zmurna" }
];
function findStockBase(name) {
  return STOCK_NAME_BASES.find((base) => base.name === name);
}

// astral/content/naming/derive.ts
function buildStockBase(spec) {
  const stock = findStockBase(spec.from);
  if (!stock)
    throw new Error(`FMG has no name base called "${spec.from}"`);
  const systems = [...stock.b.split(","), ...spec.systems ?? []].map((name) => name.trim()).filter(Boolean);
  return {
    name: spec.name,
    set: spec.set,
    stock: spec.from,
    min: stock.min,
    max: stock.max,
    d: stock.d,
    groups: {
      systems: [...new Set(systems)],
      polities: [...new Set(spec.polities)]
    }
  };
}
function resolveCollisions(bases) {
  const dropped = [];
  const resolved = bases.map((base, index) => {
    const earlier = bases.filter((candidate, other) => candidate.set === base.set && other < index);
    const claimed = new Set;
    for (const other of earlier) {
      for (const name of other.groups.systems)
        claimed.add(name);
    }
    const systems = base.groups.systems.filter((name) => {
      if (claimed.has(name)) {
        dropped.push({ base: base.name, name });
        return false;
      }
      claimed.add(name);
      return true;
    });
    return { ...base, groups: { ...base.groups, systems } };
  });
  return { bases: resolved, dropped };
}

// astral/content/naming/grimdark-derived.ts
var GRIMDARK_DERIVED_SPECS = [
  {
    name: "Grimdark Roman",
    set: "Grimdark",
    from: "Roman",
    polities: [
      "Castrum",
      "Praetorium",
      "Legion",
      "Cohort",
      "Centuria",
      "Castellum",
      "Munitum",
      "Concilium",
      "Curia",
      "Basilica",
      "Collegium",
      "Census",
      "Edictum",
      "Dominium",
      "Imperium",
      "Segmentum",
      "Garrison",
      "Armada",
      "Prefecture",
      "Custodia",
      "Chancery",
      "Dispensary",
      "Aqueduct",
      "Custodians"
    ]
  },
  {
    name: "Grimdark Nordic",
    set: "Grimdark",
    from: "Nordic",
    polities: [
      "Jarl",
      "Fyr",
      "Hird",
      "Hus",
      "Thing",
      "Hov",
      "Mark",
      "Borg",
      "Jarn",
      "Dane",
      "Hearth",
      "Steading",
      "Garth",
      "Watch",
      "Garrison",
      "Colony",
      "Precinct",
      "Clan",
      "Hold",
      "Reider",
      "Ledger",
      "Cloister",
      "Hall",
      "Marches"
    ]
  },
  {
    name: "Grimdark Finnic",
    set: "Grimdark",
    from: "Finnic",
    polities: [
      "Kunta",
      "Piiri",
      "Laitos",
      "Vartiolaitos",
      "Yhtio",
      "Naapuri",
      "Halli",
      "Kaivos",
      "Saha",
      "Portti",
      "Laituri",
      "Kompania",
      "Linnake",
      "Torni",
      "Kirkonkyla",
      "Hautausmaa",
      "Tuomiokunta",
      "Joki",
      "Ranta",
      "Metsa",
      "Syrja",
      "Rovio",
      "Vanha",
      "Kartano"
    ]
  },
  {
    name: "Grimdark Levantine",
    set: "Grimdark",
    from: "Levantine",
    polities: [
      "Eparchy",
      "Theme",
      "Satrapy",
      "Diocese",
      "Legate",
      "Beylik",
      "Emirate",
      "Vilayet",
      "Makhzan",
      "Chancery",
      "Reliquary",
      "Scriptorium",
      "Basilica",
      "Martyrium",
      "Catacomb",
      "Ossuary",
      "Cloister",
      "Priorate",
      "Concordance",
      "Armamentarium",
      "Mandate",
      "Enclave",
      "Caravanserai",
      "Minaret"
    ]
  },
  {
    name: "Grimdark Nahuatl",
    set: "Grimdark",
    from: "Nahuatl",
    polities: [
      "Altepetl",
      "Tlatoani",
      "Cihuacoatl",
      "Tlacaxopilli",
      "Calixtlahuac",
      "Tlanextic",
      "Tlalocan",
      "Xaloc",
      "Tlapalli",
      "Hueyotl",
      "Yohualtepetl",
      "Tecpantli",
      "Ollin",
      "Mictlan",
      "Quiahuitl",
      "Nacihualli",
      "Centeotl",
      "Xochipilli",
      "Papalotl",
      "Ixtliltonalli",
      "Tlaloc",
      "Tezcatlipoca",
      "Zacatepec",
      "Tlayollan"
    ]
  },
  {
    name: "Grimdark Amazigh",
    set: "Grimdark",
    from: "Amazigh",
    polities: [
      "Mzab",
      "Ksar",
      "Ahaggar",
      "Tassili",
      "Hoggar",
      "Ifriqiya",
      "Marrakesh",
      "Sijilmasa",
      "Ghardames",
      "Draa",
      "Souss",
      "Rif",
      "Jebel",
      "Oasis",
      "Caravan",
      "Imamate",
      "Emirate",
      "Harratin",
      "Zenete",
      "Tlemcen",
      "Touareg",
      "Berber",
      "Madrassa",
      "Fatwa"
    ]
  },
  {
    name: "Grimdark Elven",
    set: "Grimdark",
    from: "Elven",
    polities: [
      "Webway",
      "Aspect",
      "Phoenix",
      "Soulship",
      "Conclave",
      "Aerie",
      "Scriptorium",
      "Chorus",
      "Spinner",
      "Prophecy",
      "Crystal",
      "Boneshard",
      "Vault",
      "College",
      "Covenant",
      "Gates",
      "Concord",
      "Communal",
      "Fire Guild",
      "Sanctum",
      "Wardens",
      "Custodians",
      "Otherworld",
      "Vortex"
    ]
  },
  {
    name: "Grimdark Dark Elven",
    set: "Grimdark",
    from: "Dark Elven",
    polities: [
      "Commune",
      "Dark City",
      "Coven",
      "Splinter",
      "Shard",
      "Court",
      "Kabal",
      "Brood",
      "Vivarium",
      "Pit",
      "Arena",
      "Hollow",
      "Crucible",
      "Carnage",
      "Torture",
      "Malefic",
      "Hedonists",
      "Recluses",
      "Night",
      "Dungeons",
      "Warren",
      "Web",
      "Lair",
      "Covens"
    ]
  },
  {
    name: "Grimdark Orc",
    set: "Grimdark",
    from: "Orc",
    polities: [
      "Warband",
      "Muster",
      "Kraal",
      "Horde",
      "Clanhold",
      "Armoury",
      "Kommissar",
      "Lector",
      "Sanctum",
      "Rampart",
      "Warsphere",
      "Sacrament",
      "Heresy",
      "Apocalypse",
      "Descent",
      "Rift",
      "Hex",
      "Sigil",
      "Squad",
      "Clan",
      "Stronghold",
      "Warchief",
      "Bastion",
      "Shrine"
    ]
  },
  {
    name: "Grimdark Draconic",
    set: "Grimdark",
    from: "Draconic",
    polities: [
      "Roost",
      "Eyrie",
      "Lair",
      "Hatchery",
      "Brood",
      "Flight",
      "Covenant",
      "Wyrm",
      "Hoard",
      "Legion",
      "Chapter",
      "Scream",
      "Throne",
      "Pit",
      "Citadel",
      "Warren",
      "Ruin",
      "Pyre",
      "Horde",
      "Slaver",
      "Dragonkin",
      "Spawning",
      "Wing",
      "Cloister"
    ]
  },
  {
    name: "Grimdark Arachnid",
    set: "Grimdark",
    from: "Arachnid",
    polities: [
      "Hive",
      "Brood",
      "Carapace",
      "Chitin",
      "Cocoon",
      "Synapse",
      "Zoanthrope",
      "Sporeling",
      "Ripper",
      "Termagant",
      "Hormagaunt",
      "Carnifex",
      "Hive Mind",
      "Cult",
      "Biomorph",
      "Mandible",
      "Broodmother",
      "Ulvan",
      "Ravening",
      "Swarm",
      "Nerve",
      "Spawning",
      "Pheromone",
      "Gauss"
    ]
  }
];

// astral/content/naming/grimdark.ts
var grimdarkCore = {
  name: "Grimdark Core",
  set: "Grimdark",
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
      "Trust",
      "Guild",
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
var grimdarkGothic = {
  name: "Grimdark Gothic",
  set: "Grimdark",
  min: 5,
  max: 13,
  d: "lnrst",
  groups: {
    systems: [
      "Whitmoor",
      "Blackbarrow",
      "Greyfell",
      "Coldhallow",
      "Duskmoor",
      "Ravenhall",
      "Stonegrave",
      "Thornfield",
      "Hollowmere",
      "Aldmoor",
      "Barrowfell",
      "Coldwick",
      "Dunmarrow",
      "Eastgrave",
      "Fallowmere",
      "Greyhollow",
      "Ironvale",
      "Karrowfen",
      "Lochmere",
      "Marrowfen",
      "Netherfell",
      "Oldgrave",
      "Penmourn",
      "Ravensend",
      "Starrow",
      "Thurnhollow",
      "Umberlade",
      "Wickmoor",
      "Yarrowgrave",
      "Bleakmoor",
      "Cindervale",
      "Duskfall",
      "Emberwick",
      "Frostmarch",
      "Glenmourn",
      "Harrowden",
      "Icehollow",
      "Luriden",
      "Mourngate",
      "Oubarrow",
      "Palegrave",
      "Quillmoor",
      "Restvale",
      "Saltcliff",
      "Thornwick",
      "Vellumford",
      "Wraithmoor",
      "Barrowdread",
      "Coldferry",
      "Duskhollow",
      "Fenmourn",
      "Greyward",
      "Harrowfell",
      "Keldmoor",
      "Lornfield",
      "Nethermourn",
      "Oldharrow",
      "Ravenmourn",
      "Saltmourn",
      "Thurnmourn",
      "Wraithcliff",
      "Barrowlight",
      "Coldchapel",
      "Eastmourn",
      "Fallowgrief",
      "Griethelm",
      "Karrowgrief",
      "Lochgrief",
      "Marrowgrief",
      "Nethervale",
      "Oldwarden",
      "Palegrief",
      "Ravensvale",
      "Starrowmere",
      "Thornward",
      "Umberhollow",
      "Wickgrief",
      "Yarrowmere"
    ],
    polities: [
      "The Marcher Lords",
      "Crown of the Marches",
      "Northern Compact",
      "The Iron Duchy",
      "The Baronies",
      "Free Cities",
      "The Holdfast",
      "Grey Council",
      "The Banished Kingdom",
      "Church of the Ashen Star",
      "The Iron Pact",
      "The Salt Kingdoms",
      "The Winter Court",
      "The Nine Wardenholds",
      "The Black Archive",
      "The Bastion States",
      "The Long Winter",
      "The Mourne Compact",
      "The Drowned Kingdom",
      "The Crows"
    ]
  }
};
var grimdarkMachine = {
  name: "Grimdark Machine",
  set: "Grimdark",
  min: 4,
  max: 12,
  d: "srlm",
  groups: {
    systems: [
      "Null",
      "Zero",
      "Void",
      "Ashen",
      "Tessera",
      "Umbra",
      "Obsidian",
      "Nullspace",
      "Grayspace",
      "Coldline",
      "Static",
      "Nullvector",
      "Nullbeam",
      "Zero Point",
      "Coldstore",
      "Greyline",
      "Quietnode",
      "Binary",
      "Recursion",
      "Stateless",
      "Idempotent",
      "Frozen",
      "Serene",
      "Glasshouse",
      "Terminate",
      "Abort",
      "Orphan",
      "Echelon",
      "Interdict",
      "Severance",
      "Threshold",
      "Sealed",
      "Sterile",
      "Empty",
      "Unnamed",
      "Blank",
      "Vacancy",
      "Nullfield",
      "Greyscale",
      "Hollowcode",
      "Blackroot",
      "Deadband",
      "Nullcore",
      "Quarantine",
      "Silenced",
      "Terminal",
      "Unlit",
      "Vantagate",
      "Whitened",
      "Zeroed",
      "Cinderstate",
      "Coldbank",
      "Darkmatter",
      "Flatline",
      "Griddrop",
      "Hardstop",
      "Lowpower",
      "Nullline",
      "Offworld",
      "Quietmode",
      "Rimlight",
      "Silverbank",
      "Threadbare",
      "Voidmark",
      "Whitlock",
      "Zerolock"
    ],
    polities: [
      "The Silence",
      "The Null Assembly",
      "The Archive",
      "Cold Procession",
      "The Calcifiers",
      "The Stateless",
      "The Continuance",
      "Zero Assembly",
      "The Quiet",
      "The Severance",
      "The Recursion",
      "The Blank",
      "The Termination",
      "The Echelon",
      "The Ordinal",
      "Cold Covenant",
      "The Silence Compact",
      "Null Compact",
      "The Grays",
      "The Eradication",
      "The Unnamed",
      "The Null Procession"
    ]
  }
};
var grimdark = {
  name: "Grimdark",
  max: 17,
  probability: 3,
  cultures: [
    { name: "Imperium (Human)", base: "Grimdark Roman", shield: "roman", odd: 1, placement: "temperate" },
    { name: "Nordic (Human)", base: "Grimdark Nordic", shield: "horsehead", odd: 0.9, placement: "harsh" },
    { name: "Finnic (Human)", base: "Grimdark Finnic", shield: "wedged", odd: 0.8, placement: "harsh" },
    { name: "Levantine (Human)", base: "Grimdark Levantine", shield: "pavise", odd: 0.9, placement: "harsh" },
    { name: "Precursor (Machine)", base: "Grimdark Nahuatl", shield: "diamond", odd: 0.5, placement: "any" },
    { name: "Sovereign (Machine)", base: "Grimdark Amazigh", shield: "oval", odd: 0.5, placement: "remote" },
    { name: "Weaver (Elven)", base: "Grimdark Elven", shield: "noldor", odd: 0.9, placement: "any" },
    { name: "Caste (Elven)", base: "Grimdark Elven", shield: "gonfalon", odd: 0.6, placement: "any" },
    { name: "Dark Kin (Dark Elven)", base: "Grimdark Dark Elven", shield: "hessen", odd: 0.8, placement: "harsh" },
    { name: "Legion (Chaos)", base: "Grimdark Orc", shield: "urukHai", odd: 1, placement: "harsh" },
    { name: "Warp Horde (Chaos)", base: "Grimdark Orc", shield: "moriaOrc", odd: 0.7, placement: "harsh" },
    { name: "Cinder (Chaos)", base: "Grimdark Draconic", shield: "fantasy2", odd: 0.7, placement: "harsh" },
    { name: "Hive (Swarm)", base: "Grimdark Arachnid", shield: "hexagon", odd: 0.9, placement: "any" },
    { name: "Brood (Swarm)", base: "Grimdark Arachnid", shield: "horsehead2", odd: 0.8, placement: "harsh" },
    { name: "Machine (Cold)", base: "Grimdark Machine", shield: "embowed", odd: 0.7, placement: "remote" },
    { name: "Gothic (Darkling)", base: "Grimdark Gothic", shield: "oldFrench", odd: 1, placement: "harsh" },
    { name: "Core Holds (Mixed)", base: "Grimdark Core", shield: "pennant", odd: 0.8, placement: "any" }
  ]
};

// astral/content/naming/types.ts
function poolOf(base, group) {
  return [...base.groups[group]];
}
function poolString(base, group) {
  return poolOf(base, group).join(",");
}

// astral/content/naming/index.ts
var ASTRAL_NAME_SETS = [astralTrek, astralJammer, grimdark];
var SHIPPED_BASES = [
  trekCore,
  trekTerran,
  trekContinental,
  trekSynthetic,
  ...TREK_DERIVED_SPECS.map((spec) => buildStockBase(spec)),
  jammerDeep,
  jammerEthereal,
  jammerStoneborn,
  jammerWild,
  grimdarkCore,
  grimdarkGothic,
  grimdarkMachine,
  ...GRIMDARK_DERIVED_SPECS.map((spec) => buildStockBase(spec))
];
var ASTRAL_NAME_BASES = resolveCollisions(SHIPPED_BASES).bases;
function findAstralSet(name) {
  return ASTRAL_NAME_SETS.find((set) => set.name === name);
}

// astral/mapping/pack.ts
function currentPack() {
  return globalThis.pack;
}

// astral/mapping/polities.ts
var SECTOR_WORDS = [
  "Sector",
  "Reach",
  "Cluster",
  "Belt",
  "Orbit",
  "Shelf",
  "Quadrant",
  "Frontier"
];
function pickFor(words, seed) {
  if (!words.length)
    return;
  let hash = 0;
  for (let i = 0;i < seed.length; i++)
    hash = hash * 31 + seed.charCodeAt(i) >>> 0;
  return words[hash % words.length];
}
function polityBase(names, culture) {
  const pack = globalThis.pack;
  const baseId = pack?.cultures?.[culture]?.base;
  if (baseId === undefined)
    return;
  const name = names.nameBases[baseId]?.name;
  return ASTRAL_NAME_BASES.find((base) => base.name === name);
}
function polityWordFor(names, culture, stateName) {
  const base = polityBase(names, culture);
  if (!base)
    return;
  const words = poolOf(base, "polities").filter((word) => !/\bof\b/i.test(word));
  return pickFor(words, stateName);
}
function sectorWordFor(provinceName) {
  return pickFor(SECTOR_WORDS, provinceName);
}

// astral/mapping/systems.ts
var TRAITS = {
  port: "shipyard",
  citadel: "bastion",
  plaza: "civic core",
  shanty: "drift",
  temple: "shrine",
  walls: "shielding"
};
function starClass(population) {
  if (population < 2000)
    return { class: "M", name: "red dwarf" };
  if (population < 1e4)
    return { class: "K", name: "orange dwarf" };
  if (population < 50000)
    return { class: "G", name: "yellow dwarf" };
  if (population < 250000)
    return { class: "F", name: "white-yellow star" };
  if (population < 1e6)
    return { class: "A", name: "white star" };
  return { class: "B", name: "blue giant" };
}
function peopleOf(burg, options) {
  const population = options?.map?.units?.population;
  const scale = population?.scale ?? 1000;
  const rate = population?.urbanization?.rate ?? 0.1;
  return Math.round((burg.population ?? 0) * scale * rate);
}
function systemTraits(burg) {
  const traits = [];
  if (burg.port)
    traits.push(TRAITS.port);
  if (burg.citadel)
    traits.push(TRAITS.citadel);
  if (burg.plaza)
    traits.push(TRAITS.plaza);
  if (burg.shanty)
    traits.push(TRAITS.shanty);
  if (burg.temple)
    traits.push(TRAITS.temple);
  if (burg.walls)
    traits.push(TRAITS.walls);
  return traits;
}
function toSystem(burg, options) {
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
    port: !!burg.port
  };
}
function systemsOf(burgs, options) {
  return burgs.filter((burg) => burg.i && !burg.removed).map((burg) => toSystem(burg, options));
}
// astral/mapping/index.ts
function isAstralBase(names, baseId) {
  if (baseId === undefined)
    return false;
  const name = names.nameBases[baseId]?.name;
  return ASTRAL_NAME_BASES.some((base) => base.name === name);
}
function applyPolityNames(names, stateIds) {
  const pack = currentPack();
  const states = globalThis.States;
  if (!pack || !states)
    return 0;
  let renamed = 0;
  for (const state of pack.states) {
    if (!state.i || state.removed || !state.name)
      continue;
    if (stateIds && !stateIds.includes(state.i))
      continue;
    const word = polityWordFor(names, state.culture ?? 0, state.name);
    if (!word)
      continue;
    states.setForm(state.i, word);
    renamed++;
  }
  return renamed;
}
function applySectorNames() {
  const pack = currentPack();
  const provinces = globalThis.Provinces;
  if (!pack || !provinces)
    return 0;
  let renamed = 0;
  for (const province of pack.provinces) {
    if (!province.i || province.removed || !province.name)
      continue;
    const word = sectorWordFor(province.name);
    if (!word)
      continue;
    provinces.setForm(province.i, word);
    renamed++;
  }
  return renamed;
}
function installMapping(names) {
  const originalGetState = names.getState.bind(names);
  names.getState = (name, culture, base) => {
    const pack = currentPack();
    const resolved = base ?? pack?.cultures?.[culture ?? 0]?.base;
    if (isAstralBase(names, resolved))
      return name;
    return originalGetState(name, culture, base);
  };
  const states = globalThis.States;
  if (states) {
    const originalDefineForms = states.defineStateForms?.bind(states);
    if (originalDefineForms) {
      states.defineStateForms = (list) => {
        const result = originalDefineForms(list);
        applyPolityNames(names, list ?? undefined);
        return result;
      };
    }
  }
  const provinces = globalThis.Provinces;
  if (provinces) {
    const originalGenerate = provinces.regenerate?.bind(provinces);
    if (originalGenerate) {
      provinces.regenerate = (regenerateNames) => {
        const result = originalGenerate(regenerateNames);
        applySectorNames();
        return result;
      };
    }
  }
}

// astral/state.ts
var STORAGE_KEY = "astral.settings";
var DEFAULTS = {
  set: ASTRAL_NAME_SETS[0]?.name ?? "AstralTrek",
  replaceCultures: true
};
function read() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw)
      return { ...DEFAULTS };
    const parsed = JSON.parse(raw);
    return {
      set: typeof parsed.set === "string" && findAstralSet(parsed.set) ? parsed.set : DEFAULTS.set,
      replaceCultures: parsed.replaceCultures !== false
    };
  } catch {
    return { ...DEFAULTS };
  }
}
var settings = read();
var listeners = new Set;
function getSettings() {
  return { ...settings };
}
function setSettings(patch) {
  settings = { ...settings, ...patch };
  if (!findAstralSet(settings.set))
    settings.set = DEFAULTS.set;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {}
  for (const listener of listeners)
    listener(getSettings());
  return getSettings();
}
function onSettingsChange(listener) {
  listeners.add(listener);
  return () => void listeners.delete(listener);
}

// astral/actions/apply.ts
function seedsFor(setName, names) {
  const set = findAstralSet(setName);
  if (!set)
    return [];
  return set.cultures.map((culture) => ({
    name: culture.name,
    base: names.nameBases.findIndex((base) => base.name === culture.base),
    shield: culture.shield
  }));
}
var applying = false;
var applyingSeeds = [];
function installCultureBridge(names) {
  const cultures = globalThis.Cultures;
  if (!cultures)
    return;
  const original = cultures.getDefault.bind(cultures);
  cultures.getDefault = (count = 0) => {
    if (!applying)
      return original(count);
    return count > 0 && count < applyingSeeds.length ? applyingSeeds.slice(0, count) : applyingSeeds;
  };
}
function applyAstral(names, options = {}) {
  const settings2 = getSettings();
  const setName = options.set ?? settings2.set;
  const replaceCultures = options.replaceCultures ?? settings2.replaceCultures;
  const result = { set: setName, cultures: 0, burgs: 0, states: 0, provinces: 0, missing: 0 };
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
  if (replaceCultures) {
    const centers = live.map((culture) => culture.center).filter((center) => center !== undefined);
    const count = Math.min(centers.length, seeds.length);
    result.missing = live.length - count;
    for (const culture of [...live].sort((a, b) => b.i - a.i))
      cultures.remove(culture.i);
    applying = true;
    applyingSeeds = seeds;
    try {
      for (let index = 0;index < count; index++) {
        const seed = seeds[index];
        const point = pack.cells.p[centers[index]];
        if (!point)
          continue;
        const id = cultures.add(point[0], point[1]);
        cultures.rename(id, seed.name);
        cultures.setBase(id, seed.base);
        const culture = pack.cultures[id];
        if (culture && !culture.shield)
          culture.shield = seed.shield;
      }
    } finally {
      applying = false;
      applyingSeeds = [];
    }
    result.cultures = count;
    const wildlandsBase = seeds[0]?.base;
    if (wildlandsBase !== undefined) {
      try {
        cultures.setBase(0, wildlandsBase);
      } catch {}
    }
    cultures.recalculate();
    for (const state of pack.states) {
      if (!state.i || state.removed || state.center === undefined)
        continue;
      const culture = pack.cells.culture[state.center];
      if (culture !== undefined && culture !== state.culture)
        states.setCulture(state.i, culture);
    }
    states.recalculate();
  }
  for (const burg of pack.burgs) {
    if (!burg.i || burg.removed)
      continue;
    const culture = burg.culture ?? 0;
    const name = nameGenerator.getCulture(culture);
    if (name && name !== burg.name) {
      burgs.rename(burg.i, name);
      result.burgs++;
    }
  }
  for (const state of pack.states) {
    if (!state.i || state.removed)
      continue;
    const capital = pack.burgs[state.capital ?? 0];
    if (capital?.name && capital.name !== state.name) {
      states.rename(state.i, capital.name);
      result.states++;
    }
  }
  result.states += applyPolityNames(names);
  provinces.regenerate(true);
  result.provinces += applySectorNames();
  globalThis.Layers?.draw("burgIcons", "labels", "states", "provinces", "borders", "cultures");
  return result;
}

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

// astral/payload.ts
function namesbaseText(bases) {
  return bases.map((base) => `${base.name}|${base.min}|${base.max}|${base.d}|${base.m}|${base.b}`).join(`\r
`);
}
function buildPayload(names) {
  const bases = ASTRAL_NAME_BASES.map((base) => {
    const id = names.nameBases.findIndex((candidate) => candidate.name === base.name);
    return toFmgNameBase(base, id < 0 ? 0 : id);
  });
  const sets = ASTRAL_NAME_SETS.map((set) => ({
    name: set.name,
    max: set.max,
    probability: set.probability,
    cultures: set.cultures.map((culture) => ({
      name: culture.name,
      base: names.nameBases.findIndex((candidate) => candidate.name === culture.base),
      shield: culture.shield,
      odd: culture.odd ?? 1,
      placement: culture.placement ?? "any"
    }))
  }));
  return { bases, sets, text: namesbaseText(bases) };
}
function downloadPayload(payload, filename = "AstralCartographer-namesbase.txt") {
  const blob = new Blob([payload.text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

// astral/ui/panel.ts
var DIALOG_ID = "astralDialog";
function ensureDialog() {
  const existing = document.querySelector(`#${DIALOG_ID}`);
  if (existing)
    return existing;
  const dialogs = document.querySelector("#dialogs") ?? document.body;
  dialogs.insertAdjacentHTML("beforeend", `<div id="${DIALOG_ID}" class="dialog stable textual">
      <div class="astral-row">
        <span>Name set:</span>
        <select id="astralSet" data-tip="The register the world is named in">
          ${ASTRAL_NAME_SETS.map((set) => `<option value="${set.name}">${set.name}</option>`).join("")}
        </select>
      </div>
      <div class="astral-row">
        <label data-tip="Replace the peoples of the map, or only rename what is there">
          <input id="astralReplace" type="checkbox" />
          Replace the peoples of the map
        </label>
      </div>
      <div class="astral-row">
        <span>Apply:</span>
        <button id="astralApply" class="astral-apply" data-tip="Turn this map into a star map">Apply</button>
      </div>
      <div id="astralStatus" class="astral-status"></div>
      <div class="astral-row" style="justify-content: flex-end">
        <button id="astralClose">Close</button>
      </div>
    </div>`);
  const dialog = document.querySelector(`#${DIALOG_ID}`);
  const setSelect = dialog.querySelector("#astralSet");
  const replaceBox = dialog.querySelector("#astralReplace");
  const status = dialog.querySelector("#astralStatus");
  const settings2 = getSettings();
  setSelect.value = settings2.set;
  replaceBox.checked = settings2.replaceCultures;
  setSelect.addEventListener("change", () => setSettings({ set: setSelect.value }));
  replaceBox.addEventListener("change", () => setSettings({ replaceCultures: replaceBox.checked }));
  onSettingsChange((next) => {
    setSelect.value = next.set;
    replaceBox.checked = next.replaceCultures;
  });
  dialog.querySelector("#astralClose").addEventListener("click", () => closeDialog());
  dialog.querySelector("#astralApply").addEventListener("click", () => {
    const result = runApply();
    status.innerHTML = describe(result);
    status.className = result.error ? "astral-status error" : "astral-status";
  });
  return dialog;
}
function runApply(names) {
  const generator = names ?? globalThis.Names;
  if (!generator) {
    return { set: getSettings().set, cultures: 0, burgs: 0, states: 0, provinces: 0, missing: 0, error: "FMG is not ready" };
  }
  return applyAstral(generator);
}
function describe(result) {
  if (result.error)
    return `<span style="color:#a00">${result.error}</span>`;
  const parts = [
    result.cultures ? `${result.cultures} peoples replaced` : "",
    result.burgs ? `${result.burgs} systems renamed` : "",
    result.states ? `${result.states} polities named` : "",
    result.provinces ? `${result.provinces} sectors named` : ""
  ].filter(Boolean);
  const missing = result.missing ? ` — ${result.missing} peoples the set could not supply were left out` : "";
  return parts.length ? `Applied ${result.set}: ${parts.join(", ")}${missing}.` : `Applied ${result.set}: nothing to change.`;
}
function openPanel() {
  const dialog = ensureDialog();
  const jQuery = globalThis.$;
  if (jQuery) {
    jQuery(`#${DIALOG_ID}`).dialog({
      title: "Astral Cartographer",
      width: "28em",
      position: { my: "center", at: "center", of: "svg" },
      close: closeDialog
    });
  } else {
    dialog.style.display = "block";
  }
}
function closeDialog() {
  const jQuery = globalThis.$;
  if (jQuery)
    jQuery(`#${DIALOG_ID}`).dialog("destroy");
  document.querySelector(`#${DIALOG_ID}`)?.remove();
}
function installPanel(names) {
  const tools = document.querySelector("#toolsContent");
  if (tools && !document.querySelector("#astralTool")) {
    tools.insertAdjacentHTML("beforeend", `<div class="options-table">
        <button id="astralTool" data-tip="Turn this map into a star map">Astral Cartographer</button>
      </div>`);
    document.querySelector("#astralTool").addEventListener("click", () => openPanel());
  }
  const commands = window.MAP_COMMANDS;
  if (commands && !commands.some((command) => command.id === "astral")) {
    commands.push({
      id: "astral",
      name: "Open Astral Cartographer",
      aliases: "astral cartographer star map sci-fi space apply",
      run: () => openPanel()
    });
  }
}

// astral/entry.ts
var VERSION = "0.4.0";
function currentOptions() {
  return globalThis.options;
}
function boot() {
  if (typeof window === "undefined")
    return;
  const names = window.Names;
  if (!names) {
    console.error("Astral Cartographer: FMG's Names generator is not available — the mod did not load");
    return;
  }
  installNameBases(names);
  const payload = buildPayload(names);
  installMapping(names);
  installCultureBridge(names);
  installPanel(names);
  window.Astral = {
    version: VERSION,
    sets: ASTRAL_NAME_SETS,
    nameBases: ASTRAL_NAME_BASES,
    settings: () => getSettings(),
    payload: () => buildPayload(names),
    download: () => downloadPayload(buildPayload(names)),
    systems: () => systemsOf(globalThis.pack?.burgs ?? [], currentOptions()),
    open: () => openPanel(),
    apply: () => runApply(names),
    applyMapping: () => applyPolityNames(names) + applySectorNames(),
    pool: (baseName, group) => {
      const base = ASTRAL_NAME_BASES.find((candidate) => candidate.name === baseName);
      return base ? poolOf(base, group) : [];
    },
    install: () => {
      installNameBases(names);
    }
  };
  console.info(`Astral Cartographer ${VERSION}: ${payload.bases.length} name bases in ${ASTRAL_NAME_SETS.length} sets — ${ASTRAL_NAME_SETS.map((set) => set.name).join(", ")}. Press Apply to turn the map into a star map.`);
}
boot();
if (typeof window !== "undefined" && window.__ASTRAL_DEV__) {
  Promise.resolve().then(() => exports_reload).then((module) => module.watchBundle());
}
export {
  VERSION
};
