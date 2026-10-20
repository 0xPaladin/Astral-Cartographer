# Astral Cartographer

**A star-sector map mod for
[Azgaar's Fantasy Map Generator](https://azgaar.github.io/Fantasy-Map-Generator/).**

> **Status: barebones.** This repository currently holds the harness only — the
> vendored FMG client, a dev server, and a README. The mod itself is built
> next, step by step.

---

## What this is

FMG is a world generator: it makes continents, rivers, mountains, nations and
towns, and it draws them like an old fantasy atlas. **Astral Cartographer is
the same generator, reskinned as a science-fiction star map.** Not a wargame —
a *map* tool. The editor, the generators, the save format and the whole Azgaar
workflow stay; what changes is what everything means and how it looks.

| Fantasy Map Generator | Astral Cartographer |
|---|---|
| landmass / coastline | the galactic plane / the void between systems |
| elevation, mountains | nebulae, gas giants, star density |
| rivers | hyperlanes, trade routes |
| burgs | **star systems** |
| states, cultures, religions | polities, species, creeds |
| provinces | sectors |
| relief & parchment textures | star charts, sensor sweeps, nebula fields |

The bet: FMG's generator, its editing tools and its *data model* are a
fantastic engine for a star map, and the reskin is a content + rendering
problem, not a rewrite.

### Relationship to OpenConquest

This project borrows its **framework** from
[OpenConquest: Atlas Invictus](../AFMGTW) — the same vendored-FMG-fork
approach, the same dev harness, the same mod seams. It shares **no code and no
design** with it: OpenConquest is a grand-strategy wargame mod, this is a map
and content mod. What is reused here is the harness, not the campaign engine.

---

## Quickstart

**Prerequisites:** [Bun](https://bun.sh) ≥ 1.1.

```sh
bun install
bun dev                        # → http://localhost:3445/fmg/
```

That is the whole setup. No FMG checkout, no build step, no account, no server
beyond the dev harness: the FMG client is **committed** under
`clients/fmg/dist`, so a fresh clone is already playable.

Open <http://localhost:3445/fmg/> and you are in Fantasy Map Generator. It
boots with whatever world it has (a fresh generation, or your last world from
browser storage). Generate a world, hit **Save** (File ▸ Save) and you have a
`.map` file.

**Optional — pin a world.** Copy your FMG save to `maps/source/world.map` and
open <http://localhost:3445/fmg/?maplink=/maps/world.map>. It is picked up
live, with no restart, and served only to your own browser.

---

## What is in the box right now

```
Astral-Cartographer/
├── README.md              this file
├── package.json           bun scripts: dev, build, test, typecheck
├── tsconfig.json
├── clients/fmg/dist/      the vendored FMG client (committed, ~23 MB)
│   └── astral/astral.js   the built mod bundle (committed)
├── src/server/            the dev harness: serves the client, redirects the root
├── astral/                the mod
│   ├── entry.ts           the one module FMG loads
│   ├── name-bases.ts      our bases, in FMG's shape, and how they are registered
│   ├── content/           the content — today: the three name bases
│   ├── build/             bundle + inject pipeline
│   └── dev/               dev-only: reload the page when the bundle changes
├── maps/source/           where you drop a pinned world save (gitignored)
└── test/                  unit tests
```

The dev server is deliberately tiny. It has no product API: the mod runs
*inside* the page, so the server only has to get a browser to the client.

| Route | What it does |
|---|---|
| `/` | 302 → `/fmg/` |
| `/fmg/` | the vendored FMG client, with the maplink normalizer and dev flag added |
| `/maps/world.map` | the optional pinned world save (for `?maplink=`) |
| `/health` | liveness |

Serve-time transforms on `index.html` (in `src/server/fmg.ts`):

- strip Google Analytics beacons (we host privately);
- add a tiny classic script that rewrites a relative `?maplink=` to an absolute
  URL — FMG's `MAP_LINK_PATTERN` only accepts absolute `http(s)` URLs;
- add `window.__ASTRAL_DEV__ = true`, the flag the mod bundle uses to poll for
  rebuilds in development.

---

## The name bases

The mod's first content: **three name bases**, registered into FMG's
`Names.nameBases` alongside the stock ones. FMG's Namesbase Editor (Tools ▸
Namesbase) lists them at the bottom, and a culture can be pointed at one.

| Base | The register | Shape of the names |
|---|---|---|
| **AstralTrek** | clean, optimistic classic sci-fi | classical stars, the constellations that named them, survey catalogues — short, bright, legible |
| **AstralJammer** | psychedelic, deep space | named deep-sky objects and invented soft-alien names — long vowels, late consonants |
| **Grimdark** | harsh, industrial | foundries, yards, dead lights; polities that are holdings and chapters, not federations |

### Groups

FMG's own name base is a flat pool of source names — one flavour, no
structure. A star map needs two: a **star system** is a place, a **polity** is
an institution, and a single pool would blend them into nonsense ("Vega
Federation" as a town). So each of our bases carries **groups**:

```ts
{
  name: "AstralTrek",
  min: 4,
  max: 12,
  d: "lnrs",
  groups: {
    systems:  ["Vega", "Sirius", "Rigel", "Proxima Centauri", …],
    polities: ["United Federation", "Solar Compact", "Core Worlds", …],
  },
}
```

FMG sees the `systems` group flattened into a normal pool — that is the
vocabulary its generator chains into names — while the mod keeps the groups
apart. The `polities` group is there for the next step, when states and
cultures get named from it instead of from the capital's system name.

### Rules the content obeys

Enforced by `test/name-bases.test.ts`, because each of them was a real bug
first:

- **no digits in a pool.** A number becomes a free-floating fragment for
  FMG's Markov chain, and the generator starts producing "Re 128" and
  "Sanic 465". The numbered catalogue designations (Wolf 359, Messier 42) are
  held back for a future catalogue group, where nothing chains them into a
  system name.
- **enough names for variety** — 100+ per systems pool, 40+ per polities pool
  (FMG's own analysis calls 100–400 "good"; below 100 the chain repeats).
- **no duplicates**, and no name the `.map` save format cannot carry (`|`
  and `/` are forbidden).
- **a sane length window**, and only letters that may double.

### Using one

Point a culture at a base and the map takes its flavour from there:

```
cultures-generator → pick a culture → Name base → AstralTrek
```

From then on that culture's towns, its state and its province are named in
that register. Stock bases stay exactly where they were, so a base index
already saved in a map still means the same base.

### Registration

Our bases are **appended**, and the registration survives a map load. FMG
replaces the whole `Names.nameBases` array when it reads a save, so a base
that was only added at boot would vanish the moment a map was opened. The mod
therefore replaces the array with an accessor that re-merges our bases on
every assignment — the one seam that makes "our bases are always there" true
without patching FMG itself.

---

## The vendored fork

`clients/fmg/dist` is a **prebuilt copy of FMG 1.154.x** with a small,
auditable patch series already baked into the JavaScript. Those patches are the
mod seams — they are the only difference from stock FMG:

| Patch | Seam it opens |
|---|---|
| `0001-layers-register` | `Layers.register(...)` — a mod can add layers to FMG's Layers tab, with visibility, hotkeys and save/restore |
| `0002-map-mod-slot` | one extra trailing line in the `.map` format, so a mod can persist its own data inside a saved map |
| `0003-mod-registries` | `window.MAP_COMMANDS` and `window.LAYER_TOGGLES` — a mod can add palette commands and layer labels/hotkeys |

The patches live in the OpenConquest repo (they are its fork pipeline) and the
built result is what we vendored. Nothing in the vendored build references
OpenConquest: the OpenConquest mod bundle was stripped out of the copy
(`dist/openconquest/` and its `<script>` tag are gone), leaving a patched FMG
with no mod loaded — which is exactly the blank canvas this project starts
from.

Our own mod is injected on top of that, the same way: one base-relative
`<script type="module" src="./astral/astral.js">` tag in the built
`index.html`, and the bundle next to it in `clients/fmg/dist/astral/`. The
tag is relative, so one build works under our dev server, FMG's own site, and
Electron.

### Upgrading FMG

The vendored build is a snapshot. To move to a newer FMG:

```sh
git clone https://github.com/Azgaar/Fantasy-Map-Generator.git
cd Fantasy-Map-Generator && git checkout v1.154.1
npm install
npx vite build --base=/fmg/
# copy dist/ → clients/fmg/dist/ , then re-apply the three patches
```

Re-applying the patches is the fiddly part, and it is worth doing properly
now that the mod exists: the patches are ~80 lines of diff in total.

### Rebuilding the mod

The FMG client itself is not rebuilt here — the vendored build is used as-is.
Only the mod on top of it is built:

```sh
bun run build          # bundle astral/ → clients/fmg/dist/astral/astral.js,
                       # and inject the module tag into the built index.html
bun run build:watch    # the same, and rebundle on every change
```

Both are idempotent: the injection is skipped when the tag is already there,
and `bun dev` runs the same build on boot, so the working tree stays clean.

---

## Development

```sh
bun install        # once
bun dev            # the dev server, with hot reload
bun run build      # build the mod bundle into clients/fmg/dist
bun test           # unit tests
bun typecheck      # tsc --noEmit
```

`bun dev` serves the committed build, so it works straight from a fresh
clone — and it also rebuilds the mod bundle whenever anything under `astral/`
changes, so editing the mod needs no second command. The page reloads itself
when the bundle changes (a module boundary is a reload, not a hot swap).

`bun run build` is the release build: bundle `astral/` into
`clients/fmg/dist/astral/astral.js` and inject the one module tag into the
built `index.html`. The bundle is committed, so a fresh clone is already
modded. `bun run build:watch` does the same and keeps watching.

---

## Roadmap

Built in steps, each one leaving the project working.

| # | Step | What lands |
|---|---|---|
| 0 | **Harness** ✅ | README, dev server, vendored FMG |
| 1 | **Vocabulary** ✅ | the three name bases, with their groups, registered into FMG — *this step* |
| 2 | **Data mapping** | read FMG's burgs as star systems: population → star class, features → system traits, state → polity, and name cultures and states from the `polities` group |
| 3 | **Visual reskin** | the galactic plane: void background, nebula fields, system markers, system labels — a new FMG layer |
| 4 | **Style presets** | sci-fi map styles (dark chart, sensor sweep, blueprint) as FMG style presets |
| 5 | **Generators** | the generators themselves: "elevation" → star density, "rivers" → hyperlanes, "mountains" → nebulae |
| 6 | **Editor affordances** | rename FMG's UI in the map tools (burg → system, state → polity) without breaking FMG's data |
| 7 | **Persistence** | the `.map` mod slot: the sci-fi data travels with the saved map |

**Not in scope:** armies, battles, diplomacy, campaigns, turns. This is a map
and content mod.

---

## License

[MIT](LICENSE) for this project's own code. FMG is
[Copyright © Azgaar](https://github.com/Azgaar/Fantasy-Map-Generator) and
remains under its own license; the vendored build in `clients/fmg/dist` is
FMG's, redistributed unmodified apart from the three patch series listed
above.
