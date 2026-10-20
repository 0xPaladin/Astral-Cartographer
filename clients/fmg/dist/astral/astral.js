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
  max: 8,
  probability: 5,
  cultures: [
    { name: "Ethereal (Kindred)", base: "Jammer Ethereal", shield: "vesicaPiscis", odd: 1, placement: "remote" },
    { name: "Silver Kin (Kindred)", base: "Jammer Ethereal", shield: "fantasy1", odd: 0.8, placement: "any" },
    { name: "Stoneborn (Deep)", base: "Jammer Stoneborn", shield: "wedged", odd: 0.9, placement: "harsh" },
    { name: "Deepkin (Deep)", base: "Jammer Stoneborn", shield: "fantasy2", odd: 0.7, placement: "harsh" },
    { name: "Wild (Ferals)", base: "Jammer Wild", shield: "moriaOrc", odd: 0.8, placement: "harsh" },
    { name: "Scavengers (Ferals)", base: "Jammer Wild", shield: "fantasy4", odd: 0.6, placement: "any" },
    { name: "Deep Choir (Collective)", base: "Jammer Deep", shield: "pavise", odd: 0.7, placement: "any" },
    { name: "Far Chorus (Collective)", base: "Jammer Deep", shield: "fantasy5", odd: 0.5, placement: "remote" }
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
  max: 8,
  probability: 11,
  cultures: [
    { name: "Terran (Human)", base: "Trek Terran", shield: "heater", odd: 1, placement: "temperate" },
    { name: "Colonial (Human)", base: "Trek Terran", shield: "kite", odd: 0.8, placement: "any" },
    { name: "Continental (Human)", base: "Trek Continental", shield: "french", odd: 0.9, placement: "temperate" },
    { name: "Highlander (Human)", base: "Trek Continental", shield: "hessen", odd: 0.6, placement: "harsh" },
    { name: "Synthetic (Machine)", base: "Trek Synthetic", shield: "hexagon", odd: 0.7, placement: "any" },
    { name: "Posthuman (Machine)", base: "Trek Synthetic", shield: "diamond", odd: 0.5, placement: "remote" },
    { name: "Core Worlds (Mixed)", base: "Trek Core", shield: "gonfalon", odd: 0.8, placement: "any" },
    { name: "Inner Reach (Mixed)", base: "Trek Core", shield: "banner", odd: 0.6, placement: "remote" }
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
  max: 8,
  probability: 3,
  cultures: [
    { name: "Gothic (Darkling)", base: "Grimdark Gothic", shield: "oldFrench", odd: 1, placement: "harsh" },
    { name: "Northerners (Darkling)", base: "Grimdark Gothic", shield: "horsehead", odd: 0.8, placement: "harsh" },
    { name: "Iron (Foundrymen)", base: "Grimdark Iron", shield: "square", odd: 0.9, placement: "any" },
    { name: "Yard Companies (Foundrymen)", base: "Grimdark Iron", shield: "targe", odd: 0.7, placement: "any" },
    { name: "Machine (Cold)", base: "Grimdark Machine", shield: "embowed", odd: 0.7, placement: "remote" },
    { name: "Calculators (Cold)", base: "Grimdark Machine", shield: "diamond", odd: 0.5, placement: "any" },
    { name: "Core Holds (Mixed)", base: "Grimdark Core", shield: "gonfalon", odd: 0.8, placement: "any" },
    { name: "Rust Kingdoms (Mixed)", base: "Grimdark Core", shield: "pavise", odd: 0.6, placement: "remote" }
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

// astral/sets.ts
function placementScore(placement, i) {
  const cells = globalThis.pack?.cells;
  if (!cells)
    return 0;
  const height = cells.h[i] ?? 0;
  const grid = globalThis.grid;
  const temp = grid?.cells?.temp?.[i] ?? 0;
  switch (placement) {
    case "temperate":
      return (20 - Math.abs(temp - 12)) * 0.5 + height * 0.2;
    case "harsh":
      return (10 - temp) * 0.8 + height * 0.3;
    case "remote": {
      const point = cells.p[i];
      if (!point)
        return height * 0.05;
      const graph = globalThis.options?.map?.graph;
      const width = graph?.width ?? 2000;
      const chartHeight = graph?.height ?? 2000;
      const dx = (point[0] ?? 0) - width / 2;
      const dy = (point[1] ?? 0) - chartHeight / 2;
      return Math.hypot(dx, dy) * 0.01 + height * 0.05;
    }
    case "any":
    default:
      return height * 0.3 + (10 - Math.abs(temp - 5)) * 0.2;
  }
}
function culturesForSet(set, names) {
  return set.cultures.map((culture) => ({
    name: culture.name,
    base: names.nameBases.findIndex((base) => base.name === culture.base),
    shield: culture.shield,
    odd: culture.odd ?? 1,
    sort: (i) => placementScore(culture.placement ?? "any", i)
  }));
}
function isAstralSet(id) {
  return findAstralSet(id) !== undefined;
}

// astral/ui/culture-sets.ts
function currentOptions() {
  return globalThis.options;
}
var STORAGE_KEY = "astral.cultureSet";
function readRememberedSet() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}
function rememberSet(id) {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {}
}
function addSetOptions(sets) {
  const select = document.querySelector("#culturesSet");
  if (!select)
    return;
  for (const set of sets) {
    if (select.querySelector(`option[value="${set.name}"]`))
      continue;
    const option = document.createElement("option");
    option.value = set.name;
    option.textContent = set.name;
    option.dataset.max = String(set.max);
    select.append(option);
  }
}
function watchForSetDropdown(sets) {
  if (document.querySelector("#culturesSet")) {
    addSetOptions(sets);
    return;
  }
  const observer = new MutationObserver(() => {
    if (document.querySelector("#culturesSet")) {
      observer.disconnect();
      addSetOptions(sets);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
function syncCultureInputs() {
  const options = currentOptions();
  const set = findAstralSet(options?.generation.cultures.set ?? "");
  if (!set || !options)
    return;
  for (const input of document.querySelectorAll('[data-option="cultures"]')) {
    input.max = String(set.max);
    if (document.activeElement !== input)
      input.value = String(options.generation.cultures.limit);
  }
}
function installCultureSets(names, payload) {
  const cultures = window.Cultures;
  if (!cultures) {
    console.error("Astral Cartographer: FMG's Cultures generator is not available — the culture sets were not installed");
    return [];
  }
  let activeSetId = null;
  const original = cultures.getDefault.bind(cultures);
  cultures.getDefault = (count = 0) => {
    const options2 = currentOptions();
    const set = findAstralSet(activeSetId ?? options2?.generation.cultures.set ?? "");
    if (!set)
      return original(count);
    const seeds = culturesForSet(set, names);
    return count > 0 && count < seeds.length ? seeds.slice(0, count) : seeds;
  };
  const originalGenerate = cultures.generate.bind(cultures);
  cultures.generate = () => {
    const options2 = currentOptions();
    const chosen = options2?.generation.cultures.set ?? "";
    const set = findAstralSet(chosen);
    if (!set || !options2) {
      originalGenerate();
      return;
    }
    activeSetId = set.name;
    options2.generation.cultures.set = "world";
    try {
      originalGenerate();
    } finally {
      options2.generation.cultures.set = chosen;
      activeSetId = null;
    }
  };
  watchForSetDropdown(payload.sets);
  const optionsModel = window.Options;
  if (optionsModel) {
    const originalCap = optionsModel.capCultures.bind(optionsModel);
    optionsModel.capCultures = () => {
      originalCap();
      const options2 = currentOptions();
      const set = findAstralSet(options2?.generation.cultures.set ?? "");
      if (set && options2 && options2.generation.cultures.limit > set.max) {
        options2.generation.cultures.limit = set.max;
      }
      syncCultureInputs();
    };
    const originalRandom = optionsModel.randomCultureSet?.bind(optionsModel);
    if (originalRandom) {
      optionsModel.randomCultureSet = () => {
        const current = currentOptions()?.generation.cultures.set ?? "";
        if (isAstralSet(current))
          return current;
        return originalRandom();
      };
    }
    const originalApplyLoaded = optionsModel.applyLoaded.bind(optionsModel);
    optionsModel.applyLoaded = (json) => {
      originalApplyLoaded(json);
      const remembered2 = readRememberedSet();
      const options2 = currentOptions();
      if (remembered2 && isAstralSet(remembered2) && options2) {
        options2.generation.cultures.set = remembered2;
        window.Options?.capCultures();
      }
    };
  }
  document.addEventListener("change", (event) => {
    const target = event.target;
    if (target?.id !== "culturesSet")
      return;
    if (isAstralSet(target.value))
      rememberSet(target.value);
    syncCultureInputs();
  });
  const remembered = readRememberedSet();
  const options = currentOptions();
  if (remembered && isAstralSet(remembered) && options) {
    options.generation.cultures.set = remembered;
    window.Options?.capCultures();
  }
  return payload.sets.map((set) => set.name);
}

// astral/entry.ts
var VERSION = "0.2.0";
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
  const sets = installCultureSets(names, payload);
  window.Astral = {
    version: VERSION,
    sets: ASTRAL_NAME_SETS,
    nameBases: ASTRAL_NAME_BASES,
    payload: () => buildPayload(names),
    download: () => downloadPayload(buildPayload(names)),
    pool: (baseName, group) => {
      const base = ASTRAL_NAME_BASES.find((candidate) => candidate.name === baseName);
      return base ? poolOf(base, group) : [];
    },
    install: () => {
      installNameBases(names);
    }
  };
  console.info(`Astral Cartographer ${VERSION}: pushed ${payload.bases.length} name bases in ${sets.length} culture sets — ${ASTRAL_NAME_SETS.map((set) => set.name).join(", ")}`);
}
boot();
if (typeof window !== "undefined" && window.__ASTRAL_DEV__) {
  Promise.resolve().then(() => exports_reload).then((module) => module.watchBundle());
}
export {
  VERSION
};
