# `astral/` — the mod

This folder holds **Astral Cartographer** itself: the one JavaScript module
that is injected into the vendored FMG build and turns it into a star-sector
generator.

## Where it is now

The mod has **one panel and one action**. The panel offers the three culture
sets and a choice; the action takes a map built in stock FMG and turns it into
a star map: the peoples are replaced with ours, the systems are renamed from
our bases, the polities and the sectors get their own words.

```
astral/
  entry.ts        the one module FMG loads; boots the mod, exposes window.Astral
  fmg.ts          the shape of the FMG globals the mod uses
  state.ts        the mod's settings: the name set, and whether to replace
  actions/apply.ts the action the panel's Apply button runs
  name-bases.ts   our bases in FMG's shape, and how they are registered
  sets.ts         our sets as FMG culture sets: the cultures, and where they go
  payload.ts      the whole mod's data as one JSON: bases, and sets with the
                  base ids linked — what gets pushed into FMG on load
  mapping/        FMG's world, read as a star map
    systems.ts          a burg as a star system: a class, and traits
    polities.ts         a state as a polity, a province as a sector
    pack.ts             FMG's current map
    index.ts            the mapping, installed over FMG's generators
  content/naming/ the content
    types.ts              the model: a set, a base, a culture, a group
    stock.ts              FMG's own 43 name bases, vendored
    derive.ts             building our bases from FMG's
    astral-trek.ts        the set, and its four hand-written bases
    astral-trek-derived.ts the set's twelve bases, built from FMG's data
    astral-jammer.ts      the set, and its four bases
    grimdark.ts           the set, and its three hand-written bases
    grimdark-derived.ts   the set's eleven bases, built from FMG's data
    index.ts              the registry
  ui/panel.ts     the mod's panel
  build/          bundle + inject pipeline (see ../README.md)
  dev/            dev-only: reload the page when the bundle changes
```

## The shape of the content

FMG has two levels, and so do we:

- a **set** — what the user picks. FMG's are "High Fantasy", "Dark Fantasy";
  ours are AstralTrek, AstralJammer, Grimdark. A set is a bundle of
  cultures, each bound to a name base.
- a **base** — a vocabulary. One people, one register, one pool of names per
  kind of thing (`systems` and `polities`).

```
AstralTrek                      a set
├── Trek Core          a base   classical stars, federations
├── Trek Terran        a base   modern settlement names
├── Trek Continental    a base   modern settlement names, another Europe
├── Trek Synthetic      a base   machine designations
├── Trek English       a base   built from FMG's "English"
├── Trek German        a base   built from FMG's "German"
├── Trek Chinese       a base   built from FMG's "Chinese"
├── Trek Nigerian      a base   built from FMG's "Nigerian"
├── Trek Vietnamese    a base   built from FMG's "Vietnamese"
├── Trek Arabic        a base   built from FMG's "Arabic"
├── Trek Karnataka     a base   built from FMG's "Karnataka"
├── Trek Orc           a base   built from FMG's "Orc"
├── Trek Goblin        a base   built from FMG's "Goblin"
├── Trek Elven         a base   built from FMG's "Elven"
├── Trek Dark Elven    a base   built from FMG's "Dark Elven"
└── Trek Arachnid      a base   built from FMG's "Arachnid"
```

Each set holds sixteen cultures. Each culture says where its homeland goes
(`temperate`, `harsh`, `remote`, `any`).

The bases built from FMG's own data keep FMG's pool of names and add only
the polity words — the institutions the people call things by. They carry a
"Trek" prefix so they never displace the stock base of the same name: FMG's
own array already holds a base called "English", and our merge appends
rather than replaces, so FMG's own culture sets keep working.

## What the mod will do

- **Reskin the visuals** — FMG's terrain, relief, water and burg rendering
  become star charts: a galactic plane instead of a coastline, nebulae instead
  of forests, star systems instead of towns.
- **Re-read the content** — every FMG concept gets a sci-fi meaning. Burgs
  become **star systems**, states become **polities/factions**, provinces
  become **sectors**, rivers become **hyperlanes**, mountains become **nebulae
  or gas giants**, deserts become **the void**.
- **Stay a map tool** — this is not a wargame. The mod edits and renders a
  map; it does not simulate a campaign.

## The seams it plugs into

The vendored build in `clients/fmg/dist` is the *patched* FMG (patched in
[OpenConquest](../README.md#the-vendored-fork)), so the mod never has to
modify FMG's source:

| Seam | What it gives the mod |
|---|---|
| `Layers.register(...)` | register a new FMG layer (star systems, hyperlanes, the galactic plane) that participates in the Layers tab, visibility toggles and save/restore |
| the `.map` mod slot | persist the mod's own data in one extra trailing line of the `.map` file, so a saved map carries its sci-fi state with it |
| `window.MAP_COMMANDS` | add entries to FMG's command palette / hotkey system |
| `window.LAYER_TOGGLES` | give a custom layer a label and a hotkey |

## Three rules shape this folder

1. **The content is data, not code.** The sets and bases are plain TS objects
   with pools of names; the mod reads them and hands them to FMG. Adding a
   fourth set is a new file, not a new module.
2. **FMG's data model is the contract.** The mod reads FMG's live objects
   (`Names`, `Cultures`, `Burgs`, `States`, `pack`) and writes back through
   them, rather than keeping a parallel copy of the world. That is what lets a
   saved `.map` keep working.
3. **FMG's globals are replaced, not mutated.** `options` is swapped wholesale
   when a map is loaded, so the mod reads every global at the moment it uses
   it. Capturing one at boot is a bug that waits for the first map load.
