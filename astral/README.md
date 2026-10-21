# `astral/` — the mod

This folder holds **Astral Cartographer** itself: the one JavaScript module
that is injected into the vendored FMG build and turns it into a star-sector
generator.

## Where it is now

The mod ships **three culture sets** and the **name bases** underneath them,
offers the sets in FMG's "Cultures set" dropdown, and **maps FMG's world onto
a star map**: burgs are star systems with a class and traits, states are
polities named by their culture's own words, provinces are sectors.

The visual reskin — the galactic plane, the nebulae, the system markers — is
the next step.

```
astral/
  entry.ts        the one module FMG loads; boots the mod, exposes window.Astral
  name-bases.ts   our bases in FMG's shape, and how they are registered
  sets.ts         our sets as FMG culture sets: the cultures, and where they go
  payload.ts      the whole mod's data as one JSON: bases, and sets with the
                  base ids linked — what gets pushed into FMG on load
  mapping/        FMG's world, read as a star map
    systems.ts          a burg as a star system: a class, and traits
    polities.ts         a state as a polity, a province as a sector
    index.ts            the mapping, installed over FMG's generators
  content/naming/ the content
    types.ts              the model: a set, a base, a culture, a group
    astral-trek.ts        the set, and its four bases
    astral-jammer.ts      the set, and its four bases
    grimdark.ts           the set, and its four bases
    index.ts              the registry
  ui/             the page-facing wiring (the culture set dropdown)
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
└── Trek Synthetic      a base   machine designations
```

Each set holds eight cultures, two per base — the way FMG's High Fantasy
gives Elves two cultures and Dwarves two. Each culture says where its
homeland goes (`temperate`, `harsh`, `remote`, `any`).

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
   (`Names`, `Cultures`, `options`, `pack`) and writes back through them,
   rather than keeping a parallel copy of the world. That is what lets a saved
   `.map` keep working, and what lets the next step reuse FMG's own
   generator.
3. **FMG's globals are replaced, not mutated.** `options` is swapped wholesale
   when a map is loaded, so the mod reads every global at the moment it uses
   it. Capturing one at boot is a bug that waits for the first map load.
