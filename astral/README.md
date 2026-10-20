# `astral/` — the mod

This folder will hold **Astral Cartographer** itself: the one JavaScript module
that is injected into the vendored FMG build and turns it into a star-sector
generator.

It is empty for now — the project starts as a bare harness (README, dev
server, vendored FMG) and the mod is built up piece by piece from here.

## What the mod will do

- **Reskin the visuals** — FMG's terrain, relief, water and burg rendering
  become star charts: a galactic plane instead of a coastline, nebulae instead
  of forests, star systems instead of towns.
- **Re-read the content** — every FMG concept gets a sci-fi meaning. Burgs
  become **star systems**, states become **polities/factions**, provinces become
  **sectors**, rivers become **hyperlanes**, mountains become **nebulae or
  gas giants**, deserts become **the void**.
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

## Shape of the code (when it arrives)

```
astral/
  entry.ts        the one module FMG loads
  ui/             layers, style, panels — everything that touches the DOM
  content/        the sci-fi vocabulary: names, species, polity prefixes, …
  build/          the fork pipeline (bundle + inject), if we need one
```
