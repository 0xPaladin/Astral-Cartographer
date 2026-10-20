/**
 * entry.ts — the one module FMG loads.
 *
 * Everything the mod does to the page starts here. For now that is a single
 * job: register Astral Cartographer's name bases into FMG's `Names`, so a
 * culture can be pointed at AstralTrek, AstralJammer or Grimdark and the
 * whole map takes its flavour from there.
 */
import { ASTRAL_NAME_BASES, poolOf, type AstralNameBase, type AstralNameGroup } from "./content/name-bases/index.ts";
import { installNameBases, type FmgNames } from "./name-bases.ts";

export const VERSION = "0.1.0";

/** The mod's public surface, exposed on `window.Astral` for the console. */
export interface AstralApi {
  version: string;
  /** the bases this mod ships */
  nameBases: AstralNameBase[];
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

  installNameBases(names);

  window.Astral = {
    version: VERSION,
    nameBases: ASTRAL_NAME_BASES,
    pool: (baseName, group) => {
      const base = ASTRAL_NAME_BASES.find((candidate) => candidate.name === baseName);
      return base ? poolOf(base, group) : [];
    },
    install: () => {
      installNameBases(names);
    },
  };

  console.info(
    `Astral Cartographer ${VERSION}: registered ${ASTRAL_NAME_BASES.length} name bases — ${ASTRAL_NAME_BASES.map((base) => base.name).join(", ")}`,
  );
}

boot();

// Dev-only: the dev server sets this flag and rebuilds the bundle on change.
if (typeof window !== "undefined" && window.__ASTRAL_DEV__) {
  void import("./dev/reload.ts").then((module) => module.watchBundle());
}
