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
    { name: "Colonial (Human)", base: "Trek Terran", shield: "kite", odd: 0.8, placement: "any" },
    { name: "Expatriate (Human)", base: "Trek Terran", shield: "pennant", odd: 0.6, placement: "remote" },
    { name: "Borderlands (Human)", base: "Trek Terran", shield: "dovetail", odd: 0.5, placement: "harsh" },
    { name: "Continental (Human)", base: "Trek Continental", shield: "french", odd: 0.9, placement: "temperate" },
    { name: "Highlander (Human)", base: "Trek Continental", shield: "hessen", odd: 0.6, placement: "harsh" },
    { name: "Southerners (Human)", base: "Trek Continental", shield: "spanish", odd: 0.6, placement: "temperate" },
    { name: "Islanders (Human)", base: "Trek Continental", shield: "horsehead", odd: 0.5, placement: "remote" },
    { name: "Synthetic (Machine)", base: "Trek Synthetic", shield: "hexagon", odd: 0.7, placement: "any" },
    { name: "Posthuman (Machine)", base: "Trek Synthetic", shield: "diamond", odd: 0.5, placement: "remote" },
    { name: "Swarm (Machine)", base: "Trek Synthetic", shield: "square", odd: 0.4, placement: "harsh" },
    { name: "Archive (Machine)", base: "Trek Synthetic", shield: "embowed", odd: 0.4, placement: "any" },
    { name: "Core Worlds (Mixed)", base: "Trek Core", shield: "gonfalon", odd: 0.8, placement: "any" },
    { name: "Inner Reach (Mixed)", base: "Trek Core", shield: "banner", odd: 0.6, placement: "remote" },
    { name: "Old Republic (Mixed)", base: "Trek Core", shield: "renaissance", odd: 0.5, placement: "temperate" },
    { name: "Solar Compact (Mixed)", base: "Trek Core", shield: "baroque", odd: 0.5, placement: "any" }
  ]
};

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
var grimdarkIron = {
  name: "Grimdark Iron",
  set: "Grimdark",
  min: 4,
  max: 11,
  d: "rdkltn",
  groups: {
    systems: [
      "Foundry",
      "Kilnworks",
      "Slagheap",
      "Bellows",
      "Anvilhold",
      "Steamworks",
      "Boltworks",
      "Ironworks",
      "Forgehall",
      "Smelter",
      "Rivet",
      "Girder Yard",
      "Pressworks",
      "Cogstack",
      "Turbine",
      "Ashfall Works",
      "Gasholder",
      "Cinderhall",
      "Clinkerfield",
      "Furnace",
      "Blast House",
      "Cupola",
      "Cupola Yard",
      "Rolling Mill",
      "Wireworks",
      "Cinderpath",
      "Crucible",
      "Drosspit",
      "Enginehouse",
      "Flue Tower",
      "Forgepit",
      "Gantry Row",
      "Ingot",
      "Ladle",
      "Moulding Floor",
      "Ore Hopper",
      "Piston Row",
      "Quench Pit",
      "Reduction",
      "Scrapheap",
      "Sinter",
      "Slagline",
      "Steamvent",
      "Tapping Floor",
      "Trundle",
      "Belt Drive",
      "Chimney Head",
      "Coke Works",
      "Conveyor",
      "Drossbin",
      "Emberbed",
      "Fluebank",
      "Gantry Head",
      "Hopper Row",
      "Ingot Hall",
      "Kiln Bank",
      "Ladle Pit",
      "Moulding Hall",
      "Ore Yard",
      "Pig Yard",
      "Rolling Row",
      "Slag Bank",
      "Tapping Hall",
      "Wharf",
      "Yard Head",
      "Zinc Works"
    ],
    polities: [
      "The Foundries",
      "The Great Works",
      "The Mill Combine",
      "The Industrial Combine",
      "The Foremanate",
      "The Charter of Works",
      "The Smelting League",
      "The Yard Companies",
      "The Workyard Combine",
      "The Steamsyndicate",
      "The Foundry Compact",
      "The Ore Combine",
      "The Chain of Works",
      "The Plant",
      "The Works",
      "The Company Towns",
      "The Smelter Compact",
      "The Yard Council",
      "The Bellows Compact"
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
  max: 16,
  probability: 3,
  cultures: [
    { name: "Gothic (Darkling)", base: "Grimdark Gothic", shield: "oldFrench", odd: 1, placement: "harsh" },
    { name: "Northerners (Darkling)", base: "Grimdark Gothic", shield: "horsehead", odd: 0.8, placement: "harsh" },
    { name: "Crownlands (Darkling)", base: "Grimdark Gothic", shield: "heater", odd: 0.7, placement: "temperate" },
    { name: "Ash Church (Darkling)", base: "Grimdark Gothic", shield: "baroque", odd: 0.5, placement: "any" },
    { name: "Iron (Foundrymen)", base: "Grimdark Iron", shield: "square", odd: 0.9, placement: "any" },
    { name: "Yard Companies (Foundrymen)", base: "Grimdark Iron", shield: "targe", odd: 0.7, placement: "any" },
    { name: "Slag Clans (Foundrymen)", base: "Grimdark Iron", shield: "wedged", odd: 0.6, placement: "harsh" },
    { name: "The Great Works (Foundrymen)", base: "Grimdark Iron", shield: "gonfalon", odd: 0.5, placement: "any" },
    { name: "Machine (Cold)", base: "Grimdark Machine", shield: "embowed", odd: 0.7, placement: "remote" },
    { name: "Calculators (Cold)", base: "Grimdark Machine", shield: "diamond", odd: 0.5, placement: "any" },
    { name: "Null Procession (Cold)", base: "Grimdark Machine", shield: "flag", odd: 0.5, placement: "remote" },
    { name: "The Archive (Cold)", base: "Grimdark Machine", shield: "pavise", odd: 0.4, placement: "any" },
    { name: "Core Holds (Mixed)", base: "Grimdark Core", shield: "pennant", odd: 0.8, placement: "any" },
    { name: "Rust Kingdoms (Mixed)", base: "Grimdark Core", shield: "dovetail", odd: 0.6, placement: "remote" },
    { name: "Old Empire (Mixed)", base: "Grimdark Core", shield: "renaissance", odd: 0.5, placement: "temperate" },
    { name: "The Nine Sectors (Mixed)", base: "Grimdark Core", shield: "roman", odd: 0.4, placement: "harsh" }
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
var ASTRAL_NAME_BASES = [
  trekCore,
  trekTerran,
  trekContinental,
  trekSynthetic,
  jammerDeep,
  jammerEthereal,
  jammerStoneborn,
  jammerWild,
  grimdarkCore,
  grimdarkGothic,
  grimdarkIron,
  grimdarkMachine
];
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
