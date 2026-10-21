/**
 * entry.ts — the one module FMG loads.
 *
 * The mod has one panel and one action. The panel collects the choices, the
 * action applies them to the map, and the map is built with stock FMG either
 * way: the user makes a world, then presses Apply.
 */
import { ASTRAL_NAME_BASES, ASTRAL_NAME_SETS, poolOf, type AstralNameBase, type AstralNameGroup } from "./content/naming/index.ts";
import { installCultureBridge } from "./actions/apply.ts";
import { installMapping, systemsOf, applyPolityNames, applySectorNames, type PopulationOptions, type StarSystem } from "./mapping/index.ts";
import { installNameBases, type FmgNames } from "./name-bases.ts";
import { buildPayload, downloadPayload, type AstralPayload } from "./payload.ts";
import { getSettings } from "./state.ts";
import { installPanel, openPanel, runApply } from "./ui/panel.ts";

export const VERSION = "0.4.0";

/** FMG's current options — read fresh, never captured. */
function currentOptions(): PopulationOptions | undefined {
  return (globalThis as { options?: PopulationOptions }).options;
}

/** The mod's public surface, exposed on `window.Astral` for the console. */
export interface AstralApi {
  version: string;
  /** the sets this mod ships */
  sets: typeof ASTRAL_NAME_SETS;
  /** the bases this mod ships */
  nameBases: AstralNameBase[];
  /** the mod's settings: the name set, and whether the peoples are replaced */
  settings(): ReturnType<typeof getSettings>;
  /** the whole mod's data, as JSON: bases, and sets with their base ids linked */
  payload(): AstralPayload;
  /** download the bases in FMG's namesbase file format, for a manual install */
  download(): void;
  /** every burg on the map, read as a star system */
  systems(): StarSystem[];
  /** open the mod's panel */
  open(): void;
  /** run the action, as the panel's Apply button does */
  apply(): ReturnType<typeof runApply>;
  /** name the polities and the sectors again, by hand */
  applyMapping(): number;
  /** the pool of one group of one base */
  pool(baseName: string, group: AstralNameGroup): string[];
  /** register the bases again (after a map load, or by hand) */
  install(): void;
}

declare global {
  interface Window {
    Names?: FmgNames;
    Astral?: AstralApi;
    __ASTRAL_DEV__?: boolean;
  }
}

function boot(): void {
  if (typeof window === "undefined") return;

  const names = window.Names;
  if (!names) {
    console.error("Astral Cartographer: FMG's Names generator is not available — the mod did not load");
    return;
  }

  // The payload is pushed into FMG, and read back out of it: the ids it
  // carries are the ids the bases actually occupy.
  installNameBases(names);
  const payload = buildPayload(names);

  // The names of the polities and the sectors, and the peoples of the map.
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
    systems: () => systemsOf((globalThis as { pack?: { burgs: never[] } }).pack?.burgs ?? [], currentOptions()),
    open: () => openPanel(),
    apply: () => runApply(names),
    applyMapping: () => applyPolityNames(names) + applySectorNames(),
    pool: (baseName, group) => {
      const base = ASTRAL_NAME_BASES.find((candidate) => candidate.name === baseName);
      return base ? poolOf(base, group) : [];
    },
    install: () => {
      installNameBases(names);
    },
  };

  console.info(
    `Astral Cartographer ${VERSION}: ${payload.bases.length} name bases in ${ASTRAL_NAME_SETS.length} sets — ${ASTRAL_NAME_SETS.map((set) => set.name).join(", ")}. Press Apply to turn the map into a star map.`,
  );
}

boot();

// Dev-only: the dev server sets this flag and rebuilds the bundle on change.
if (typeof window !== "undefined" && window.__ASTRAL_DEV__) {
  void import("./dev/reload.ts").then((module) => module.watchBundle());
}
