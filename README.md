# Astral Cartographer

**A star-sector map mod for
[Azgaar's Fantasy Map Generator](https://azgaar.github.io/Fantasy-Map-Generator/).**

> [!IMPORTANT]
> **Archived — this mod now lives in the unified fork.** Astral Cartographer's content — the three
> culture sets and the twelve name bases — was merged into
> [0xPaladin/Fantasy-Map-Generator](https://github.com/0xPaladin/Fantasy-Map-Generator) as core
> data (the fork's merge plan, Phase A). The sets are in the _Cultures set_ dropdown, the bases
> are in the namebase catalogue, and the `polities` name groups ride along as core data.
>
> Two things improved on the way in: the sets can now be pinned like any stock set (the mod had to
> work around FMG's set-id validation), and the naming no longer needs a payload pushed into the
> page — the content is simply part of the generator.
>
> **This repository is read-only from here on.** Its vendored FMG client and the dev harness are
> retired; the fork has one workflow: `bun dev`. The remaining work — the visual reskin and the
> polity/sector naming — continues in the fork. See `docs/plans/mod-merge-plan.md` there for the
> decision record, and `docs/astral/README.md` there for the feature's documentation.

> **Status: the panel and the action.** The harness, the content model (three
> culture sets, twelve name bases), and the panel that applies them to a map
> are working. The visual reskin — the galactic plane, the nebulae, the
> system markers — is the next step.

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

## How it works

**The map is built with stock FMG.** Generate a world, edit it, shape it —
all of FMG, none of the mod. Then open the mod's panel and press **Apply**:

```
Tools ▸ Astral Cartographer        (or press Space and type "astral")
```

```
┌─ Astral Cartographer ────────────────────┐
│ Name set:    [ AstralTrek        ▾ ]      │
│ [x] Replace the peoples of the map         │
│ Apply:      [ Apply ]                     │
│ Applied AstralTrek: 13 peoples replaced,  │
│ 602 systems renamed, 40 polities named…    │
└────────────────────────────────────────────┘
```

**Apply** is the whole mod, and it is made of Azgaar's own methods — the mod
does not keep a parallel world, it changes FMG's:

| | |
|---|---|
| `Cultures.remove` / `add` / `rename` / `setBase` | the peoples of the map: the stock ones go, ours take their place, where they used to live |
| `Cultures.recalculate` | where the new peoples grow |
| `States.recalculate` | the states they hold |
| `Burgs.rename` | the systems they name — Azgaar's own name generation, from the new people's base |
| `States.rename` / `setForm` | the polities they name |
| `Provinces.regenerate` / `setForm` | the sectors they name |

The order matters: the peoples change first, then the names follow, because a
system's name comes from the people who live in it.

A stock map stays a stock map until Apply is pressed: outside the action, the
mod hands FMG its own culture list back, so a world generated in FMG is a
world generated in FMG.

**The mod's settings** — the name set, and whether Apply replaces the peoples
or only renames what is there — are kept in the browser, not in the map: they
are a preference of the person making the map, and a map should open the same
way for whoever receives it.

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
│   ├── fmg.ts             the shape of the FMG globals the mod uses
│   ├── state.ts           the mod's settings
│   ├── actions/apply.ts   the action the panel's Apply button runs
│   ├── name-bases.ts      our bases, in FMG's shape, and how they are registered
│   ├── sets.ts            our sets as FMG culture sets
│   ├── mapping/           FMG's world, read as a star map
│   ├── content/naming/    the content — the sets, the bases, and FMG's own
│   │                      name bases vendored in
│   ├── ui/panel.ts        the mod's panel
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

## The naming content

The mod's content so far: **three sets**, and the **bases** underneath them.

This mirrors FMG's own structure exactly. FMG offers bundles of cultures
("High Fantasy", "Dark Fantasy"), and each culture in a bundle is bound to a
name base — High Fantasy holds 17 cultures drawn from 12 bases (Elven, Dark
Elven, Dwarven, Goblin, Orc…), Dark Fantasy holds 34 candidates over 25. The
"group of name bases" you see in FMG is a **culture set**.

| Set | Bases under it | The register |
|---|---|---|
| **AstralTrek** | Trek Core, Trek Terran, Trek Continental, Trek Synthetic, and twelve built from FMG's own data | modern people, invented ones, and FMG's real-world and fantasy vocabularies |
| **AstralJammer** | Jammer Deep, Jammer Ethereal, Jammer Stoneborn, Jammer Wild | the high-fantasy bases, reskinned |
| **Grimdark** | Grimdark Core, Grimdark Gothic, Grimdark Machine, and eleven built from FMG's own data | Dune and 40K with the serial numbers filed off: the Imperium, the Precursors, the Weavers, the Chaos legions, the swarms |

Each set holds sixteen or seventeen cultures, and each culture says where its
homeland goes (`temperate`, `harsh`, `remote`, `any`) and how eagerly it
claims land.

### Bases built from FMG's own data

Azgaar ships 43 name bases — the real-world ones (English, German, Chinese,
Arabic, Nigerian, Vietnamese, Karnataka) and the fantasy ones (Elven, Dark
Elven, Orc, Goblin, Arachnid). We do not write those pools by hand. We
vendor them (`content/naming/stock.ts`, regenerated by
`bun run scripts/vendor-stock.ts`) and build our bases **from** them:

```ts
{ name: "Trek English", set: "AstralTrek", from: "English", polities: ["Colony", "Mandate", …] }
```

A base of ours is therefore a stock base plus the one thing FMG has no
place for: the **polity words**. The pool of names is FMG's own, unchanged.

The base names carry a **Trek** prefix on purpose. FMG's own array already
holds a base called "English"; if ours had the same name, the merge would
replace the stock base in place and change what FMG's own culture sets
generate. Ours are appended instead, so a stock base is never displaced and
a saved map keeps its indices.

**One name, one system.** Two bases drawing on the same pool would share
names — FMG's Elven and Dark Elven share 41 of them. The first base to claim
a name keeps it, and the rest are dropped (`resolveCollisions`). The
hand-written bases come first, so a name of ours is never dropped in favour
of a stock one.

The resolution is **per set**, and it has to be: two sets may want the same
stock pool — both AstralTrek and Grimdark want FMG's "Elven" — but a map
only ever carries one set's peoples, so the two are not in conflict.

### Groups

FMG's own name base is a flat pool of source names — one flavour, no
structure. A star map needs two: a **star system** is a place, a **polity** is
an institution, and a single pool would blend them into nonsense ("Vega
Federation" as a town). So each of our bases carries **groups**:

```ts
{
  name: "Trek Core",
  set: "AstralTrek",
  min: 4,
  max: 12,
  d: "lnrs",
  groups: {
    systems:  ["Vega", "Sirius", "Rigel", "Proxima Centauri", …],
    polities: ["United Federation", "Solar Compact", "Core Worlds", …],
  },
}
```

A base built from FMG's data carries the same groups, and the stock pool
where the `systems` group would be:

```ts
{
  name: "Trek English",
  set: "AstralTrek",
  stock: "English",       // the FMG base this one is built from
  min: 6, max: 11, d: "",
  groups: {
    systems:  ["Abingdon", "Albrighton", "Aylesbury", …],   // FMG's own pool
    polities: ["Colony", "Mandate", "Company", …],          // ours
  },
}
```

FMG sees the `systems` group flattened into a normal pool — that is the
vocabulary its generator chains into names — while the mod keeps the groups
apart. The `polities` group is there for the next step, when states and
cultures get named from it instead of from the capital's system name.

### Rules the content obeys

Enforced by `test/naming.test.ts`, because each of them was a real bug first:

- **no digits in a pool.** A number becomes a free-floating fragment for
  FMG's Markov chain, and the generator starts producing "Re 128" and
  "Sanic 465". The numbered catalogue designations (Wolf 359, Messier 42) are
  held back for a future catalogue group, where nothing chains them into a
  system name.
- **no name shared between two bases** — two systems with the same name on one
  map is a bug, and a base that shares a name with another base is how that
  happens. The bases built from FMG's data share names with each other
  (Elven and Dark Elven share 41), so the shared ones are dropped when the
  bases are resolved.
- **enough names for variety** — 50+ per systems pool, 18+ per polities pool.
  (FMG's own analysis calls 100–400 "good"; a base that names one culture's
  settlements needs far less than a base that names a whole map, but below 50
  the chain starts repeating itself.)
- **no duplicates**, and no name the `.map` save format cannot carry (`|`
  and `/` are forbidden).
- **a sane length window**, and only letters that may double.

The stock pools are FMG's own, and they are vendored rather than copied by
hand, so they carry FMG's own quirks. `scripts/vendor-stock.ts` regenerates
the vendored file from the bundle that ships with the client, and reports
any pool that breaks the rules above — the ones it reports are the ones FMG
itself has, and are left alone.

### Using one

Pick a set in FMG's **Cultures set** dropdown (options ▸ Cultures), then
regenerate the cultures. The dropdown now offers *All-world, European, …,
AstralTrek, AstralJammer, Grimdark*, and the set you choose decides which
peoples the world has and which vocabulary each of them names things from.

The choice is remembered between sessions. It cannot travel inside a `.map`
yet: FMG validates the set id against a schema built at load time, so a set of
ours is repaired to a stock one when a map is read — the mod puts it back
afterwards, and the map's own cultures are untouched.

### The mapping — FMG's world, read as a star map

The naming layer puts the right *words* on the map. The mapping layer puts the
right *meanings* on it.

| FMG | Astral Cartographer | How |
|---|---|---|
| burg | **star system** | the name is already a system name; the class comes from the population, the traits from the installations |
| state | **polity** | named by its capital's system — "Compact of Gant", not "Gantia" — with the word taken from the `polities` group of its own culture's base |
| province | **sector** | "Gant Sector", "Sarn Reach" |
| population | the system's people | the class follows: a hamlet is a red dwarf, a capital is a blue giant |

**Star classes.** The population of a system decides its class, the way the
size of a town decides whether it is a hamlet or a capital:

| People | Class | Name |
|---|---|---|
| under 2 000 | M | red dwarf |
| under 10 000 | K | orange dwarf |
| under 50 000 | G | yellow dwarf |
| under 250 000 | F | white-yellow star |
| under 1 000 000 | A | white star |
| over | B | blue giant |

**Traits.** FMG's burg installations become the system's installations: a
port is a **shipyard**, a citadel a **bastion**, a plaza a **civic core**, a
shanty a **drift**, a temple a **shrine**, walls are **shielding**.

**Polity words.** A state's word comes from the `polities` group of the base
its own culture names from, so a Grimdark polity is a "Compact" or a
"Hegemony" and a Trek one a "Federation" or a "Directorate". A stock culture
keeps FMG's own word: the mod renames the sci-fi world, not the fantasy one.

A word that carries its own "of" is not used in front of a state's name —
"Church of the Ashen Star of Starvalere" is not a name, it is a sentence.

**What it looks like.** With the AstralTrek set:

| | |
|---|---|
| states | "Earth Assembly of Uperowga", "Quantum Assembly of De", "Border Worlds of Caphiuch", "Mankind Compact of Elmswaldha" |
| provinces | "Yaxford Belt", "Yaxhall Reach", "Aulacurus Shelf", "Mebhenah Quadrant" |
| systems | "Frorere — G-class, 37 252 people, shipyard / bastion / civic core / shrine" |

**No fantasy suffix.** FMG turns a capital's name into a state name by
adding "ia" — "Gant" becomes "Gantia". Ours do not: a polity is named by the
system that holds it.

The mapping is applied where FMG generates — after the states, after the
provinces — so a map the user has edited keeps the names it has, and only a
fresh generation gets the new ones. The system's class and traits are data
for now, available in the console as `Astral.systems()`; the visual step
draws them.

### Registration — the payload, pushed on load

Installing a name base in FMG by hand is four steps: download the file, open
Tools ▸ Namebase, paste the names, set the lengths. The mod does it without
the ceremony: it **pushes a payload** into FMG when the page loads, and again
whenever a map is loaded.
The payload is one JSON object, and it is exactly what FMG's own format
expects:

```jsonc
{
  "bases": [
    // our bases in FMG's own shape, with the ids they were pushed at
    { "name": "Trek Core", "i": 43, "min": 4, "max": 12, "d": "lnrs", "m": 0, "b": "Vega,Sirius,…" }
  ],
  "sets": [
    // our sets, with every culture's base id resolved against the pushed array
    { "name": "AstralTrek", "max": 8, "cultures": [
        { "name": "Terran (Human)", "base": 44, "shield": "heater", "odd": 1, "placement": "temperate" }
    ]}
  ],
  "text": "Trek Core|4|12|lnrs|0|Vega,Sirius,…"   // FMG's namesbase file format
}
```

- `bases` is assigned to `Names.nameBases` in **one push** — the stock bases
  are kept as they are (including any the user edited in the map being
  loaded), ours are appended or replaced in place.
- `sets` is what the dropdown is built from, and each culture's **base id**
  points at a real base in the array that was pushed — not at a name that has
  to be looked up again.
- `text` is the same bases in FMG's namesbase file format, so the payload can
  be downloaded and installed by hand in any FMG, ours or stock.

In the browser console:

```js
Astral.payload()    // the payload as JSON, built against the live array
Astral.download()   // download it in FMG's namesbase file format
```

The push survives a map load: FMG replaces the whole `Names.nameBases` array
when it reads a save, so the mod replaces the array with an accessor that
re-pushes on every assignment — the one seam that makes "our bases are always
there" true without patching FMG itself.

**One thing the push cannot do:** pin the set. FMG's pin schema only knows
its own set ids, so the lock icon refuses to store ours. The mod keeps an
explicit choice instead — the set you pick stays picked on the next map —
and remembers it between sessions.

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
| 1 | **Naming** ✅ | three culture sets and the twelve bases under them, registered into FMG |
| 2 | **Data mapping** ✅ | burgs read as star systems, states as polities, provinces as sectors |
| 3 | **The panel and the action** ✅ | the mod's own UI: pick a name set, press Apply, and the map becomes a star map — *this step* |
| 4 | **Visual reskin** | the galactic plane: void background, nebula fields, system markers, system labels — a new FMG layer |
| 5 | **Style presets** | sci-fi map styles (dark chart, sensor sweep, blueprint) as FMG style presets |
| 6 | **Generators** | the generators themselves: "elevation" → star density, "rivers" → hyperlanes, "mountains" → nebulae |
| 7 | **Editor affordances** | rename FMG's UI in the map tools (burg → system, state → polity) without breaking FMG's data |
| 8 | **Persistence** | the `.map` mod slot: the sci-fi data travels with the saved map |

**Not in scope:** armies, battles, diplomacy, campaigns, turns. This is a map
and content mod.

---

## License

[MIT](LICENSE) for this project's own code. FMG is
[Copyright © Azgaar](https://github.com/Azgaar/Fantasy-Map-Generator) and
remains under its own license; the vendored build in `clients/fmg/dist` is
FMG's, redistributed unmodified apart from the three patch series listed
above.
