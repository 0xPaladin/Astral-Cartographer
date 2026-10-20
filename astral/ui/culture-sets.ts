/**
 * culture-sets.ts — offer our sets in FMG's "Cultures set" dropdown.
 *
 * FMG's dropdown offers bundles of cultures ("High Fantasy", "Dark
 * Fantasy"), and each bundle binds its cultures to name bases. We offer the
 * same: three sets, each a bundle of cultures, each culture bound to one of
 * our bases.
 *
 * Three things have to be true for that to work:
 *
 * 1. **The cultures come from us.** FMG's culture generator asks
 *    `Cultures.getDefault()` for the set's culture list; we answer with ours
 *    when the chosen set is one of ours, and defer to FMG otherwise.
 * 2. **The dropdown offers them.** The options tab is built by FMG, so we
 *    add our entries to the select it made.
 * 3. **The choice survives a map load.** FMG validates the set id against a
 *    schema built at load time, so a set of ours is repaired to a stock one
 *    when a map is read. We remember the choice and put it back.
 *
 * One subtlety runs through all of it: FMG's globals are **replaced
 * wholesale** when a map is loaded or the browser's own state is restored.
 * A reference captured at boot is therefore stale by the time the user
 * touches anything, so every global is read at the moment it is used.
 */
import { ASTRAL_NAME_SETS, findAstralSet } from "../content/naming/index.ts";
import type { AstralPayload, PayloadSet } from "../payload.ts";
import { culturesForSet, isAstralSet, type FmgCultureSeed } from "../sets.ts";
import type { FmgNames } from "../name-bases.ts";

/** The slice of FMG's culture generator we use. */
export interface FmgCultures {
  getDefault(count?: number): FmgCultureSeed[];
  generate(): void;
}

/** The slice of FMG's options model we use. */
export interface FmgOptionsModel {
  capCultures(): void;
  applyLoaded(json: unknown): void;
  randomCultureSet?(): string;
}

/** The slice of FMG's options data we use. */
export interface FmgOptions {
  generation: { cultures: { set: string; limit: number } };
}

declare global {
  interface Window {
    Cultures?: FmgCultures;
    Options?: FmgOptionsModel;
    options?: FmgOptions;
  }
}

/** FMG's current options object — read fresh, never captured. */
function currentOptions(): FmgOptions | undefined {
  return (globalThis as { options?: FmgOptions }).options;
}

/** Where the chosen set is remembered, between page loads. */
const STORAGE_KEY = "astral.cultureSet";

function readRememberedSet(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function rememberSet(id: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // a browser with storage disabled still works, it just forgets
  }
}

/** Add our sets to the "Cultures set" dropdown, once it exists. */
function addSetOptions(sets: PayloadSet[]): void {
  const select = document.querySelector<HTMLSelectElement>("#culturesSet");
  if (!select) return;

  for (const set of sets) {
    if (select.querySelector(`option[value="${set.name}"]`)) continue;
    const option = document.createElement("option");
    option.value = set.name;
    option.textContent = set.name;
    option.dataset.max = String(set.max);
    select.append(option);
  }
}

/** The dropdown is built by FMG's options tab, which may come later. */
function watchForSetDropdown(sets: PayloadSet[]): void {
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

/**
 * Keep the culture count controls in step with our sets.
 *
 * FMG sizes the count control from its own set table, which has no entry for
 * our ids — so the control ends up with a maximum of zero, and the slider
 * collapses to its minimum while the real limit is eight.
 */
function syncCultureInputs(): void {
  const options = currentOptions();
  const set = findAstralSet(options?.generation.cultures.set ?? "");
  if (!set || !options) return;

  for (const input of document.querySelectorAll<HTMLInputElement>('[data-option="cultures"]')) {
    input.max = String(set.max);
    if (document.activeElement !== input) input.value = String(options.generation.cultures.limit);
  }
}

/**
 * Make our sets work in FMG's culture generator.
 *
 * @returns the ids of the sets we installed, for the console.
 */
export function installCultureSets(names: FmgNames, payload: AstralPayload): string[] {
  const cultures = window.Cultures;
  if (!cultures) {
    console.error("Astral Cartographer: FMG's Cultures generator is not available — the culture sets were not installed");
    return [];
  }

  // The set being generated right now, when it is one of ours. FMG asks for
  // the set's size from its own table, and our ids are not in it, so the
  // generation runs under a stock id for its duration (see below).
  let activeSetId: string | null = null;

  // 1. our sets answer the culture generator
  const original = cultures.getDefault.bind(cultures);
  cultures.getDefault = (count = 0): FmgCultureSeed[] => {
    const options = currentOptions();
    const set = findAstralSet(activeSetId ?? options?.generation.cultures.set ?? "");
    if (!set) return original(count);
    const seeds = culturesForSet(set, names);
    return count > 0 && count < seeds.length ? seeds.slice(0, count) : seeds;
  };

  // 1b. and the generation runs with a stock set id, because FMG takes the
  //     number of cultures from `CULTURE_SETS[set].max` — a table built when
  //     FMG's module was evaluated, which cannot hold our ids. "world" is the
  //     roomiest stock set, and our own cap (below) keeps the count right.
  const originalGenerate = cultures.generate.bind(cultures);
  cultures.generate = () => {
    const options = currentOptions();
    const chosen = options?.generation.cultures.set ?? "";
    const set = findAstralSet(chosen);
    if (!set || !options) {
      originalGenerate();
      return;
    }
    activeSetId = set.name;
    options.generation.cultures.set = "world";
    try {
      originalGenerate();
    } finally {
      options.generation.cultures.set = chosen;
      activeSetId = null;
    }
  };

  // 2. the dropdown offers them
  watchForSetDropdown(payload.sets);

  // 3. the choice survives a map load, and a stock set is left alone
  const optionsModel = window.Options;
  if (optionsModel) {
    const originalCap = optionsModel.capCultures.bind(optionsModel);
    optionsModel.capCultures = () => {
      originalCap();
      const options = currentOptions();
      const set = findAstralSet(options?.generation.cultures.set ?? "");
      if (set && options && options.generation.cultures.limit > set.max) {
        options.generation.cultures.limit = set.max;
      }
      syncCultureInputs();
    };

    const originalRandom = optionsModel.randomCultureSet?.bind(optionsModel);
    if (originalRandom) {
      optionsModel.randomCultureSet = () => {
        const current = currentOptions()?.generation.cultures.set ?? "";
        // A set of ours cannot be pinned: FMG's pin schema only knows its own
        // set ids, so the lock icon would refuse to store ours. An explicit
        // choice is therefore kept rather than re-rolled on the next map.
        if (isAstralSet(current)) return current;
        return originalRandom();
      };
    }

    const originalApplyLoaded = optionsModel.applyLoaded.bind(optionsModel);
    optionsModel.applyLoaded = (json: unknown) => {
      originalApplyLoaded(json);
      // the schema repaired our set id to a stock one; put ours back
      const remembered = readRememberedSet();
      const options = currentOptions();
      if (remembered && isAstralSet(remembered) && options) {
        options.generation.cultures.set = remembered;
        window.Options?.capCultures();
      }
    };
  }

  // remember what the user picks, and keep the count control in step
  document.addEventListener("change", (event) => {
    const target = event.target as HTMLSelectElement | null;
    if (target?.id !== "culturesSet") return;
    if (isAstralSet(target.value)) rememberSet(target.value);
    syncCultureInputs();
  });

  // a set chosen in an earlier session is restored
  const remembered = readRememberedSet();
  const options = currentOptions();
  if (remembered && isAstralSet(remembered) && options) {
    options.generation.cultures.set = remembered;
    window.Options?.capCultures();
  }

  return payload.sets.map((set) => set.name);
}
