# `astral/` — the mod

This folder holds **Astral Cartographer** itself: the one JavaScript module
that is injected into the vendored FMG build and turns it into a star-sector
generator.

## Where it is now

The mod registers the three name bases into FMG's `Names.nameBases`, so a
culture can be pointed at **AstralTrek**, **AstralJammer** or **Grimdark**
and the whole map takes its flavour from there. Nothing else yet — the
visual reskin and the data mapping are the next steps.

```
astral/
  entry.ts        the one module FMG loads; boots the mod, exposes window.Astral
  name-bases.ts   our bases in FMG's shape, and how they are registered
  content/        the content — today: the three name bases
    name-bases/
      types.ts              the content model: a base with groups
      astral-trek.ts        the clean, optimistic register
      astral-jammer.ts      the psychedelic, deep-space register
      grimdark.ts           the harsh, industrial register
  build/          bundle + inject pipeline (see ../README.md)
  dev/            dev-only: reload the page when the bundle changes
```

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

## Two rules shape this folder

1. **The content is data, not code.** The name bases are plain TS objects
   with pools of names; the mod reads them and hands them to FMG. Adding a
   fourth register is a new file, not a new module.
2. **FMG's data model is the contract.** The mod reads FMG's live objects
   (`Names`, `pack`, `Layers`) and writes back through them, rather than
   keeping a parallel copy of the world. That is what lets a saved `.map`
   keep working, and what lets the next step reuse FMG's own generator.
