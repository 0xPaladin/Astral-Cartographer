/**
 * entry.ts — the one module FMG loads.
 *
 * Everything the mod does to the page starts here. For now that is two jobs:
 * register Astral Cartographer's name bases into FMG's `Names`, and offer our
 * culture sets in FMG's "Cultures set" dropdown — so a world generated with
 * the AstralTrek set has its peoples named from the Trek bases, the Jammer
 * set from the Jammer bases, and Grimdark from Grimdark.
 */
import { ASTRAL_NAME_BASES, ASTRAL_NAME_SETS, poolOf, type AstralNameBase, type AstralNameGroup } from "./content/naming/index.ts";
import { installNameBases, type FmgNames } from "./name-bases.ts";
import { buildPayload, downloadPayload, type AstralPayload } from "./payload.ts";
import { installCultureSets } from "./ui/culture-sets.ts";

export const VERSION = "0.2.0";

/** The mod's public surface, exposed on `window.Astral` for the console. */
export interface AstralApi {
  version: string;
  /** the sets this mod ships */
  sets: typeof ASTRAL_NAME_SETS;
  /** the bases this mod ships */
  nameBases: AstralNameBase[];
  /** the whole mod's data, as JSON: bases, and sets with their base ids linked */
  payload(): AstralPayload;
  /** download the bases in FMG's namesbase file format, for a manual install */
  download(): void;
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
    },
  };

  console.info(
    `Astral Cartographer ${VERSION}: pushed ${payload.bases.length} name bases in ${sets.length} culture sets — ${ASTRAL_NAME_SETS.map((set) => set.name).join(", ")}`,
  );
}

boot();

// Dev-only: the dev server sets this flag and rebuilds the bundle on change.
if (typeof window !== "undefined" && window.__ASTRAL_DEV__) {
  void import("./dev/reload.ts").then((module) => module.watchBundle());
}
