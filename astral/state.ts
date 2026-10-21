/**
 * state.ts — the mod's settings.
 *
 * The mod has one panel and one action, and the panel's choices live here:
 * the name set to use, and whether the action replaces the map's peoples or
 * only renames what is already there.
 *
 * The settings are kept in this browser, not in the map: they are a
 * preference of the person making the map, and a map should open the same
 * way for whoever receives it.
 */
import { ASTRAL_NAME_SETS, findAstralSet } from "./content/naming/index.ts";

export interface AstralSettings {
  /** the name set to use */
  set: string;
  /** whether Apply replaces the map's peoples as well as its names */
  replaceCultures: boolean;
}

const STORAGE_KEY = "astral.settings";

const DEFAULTS: AstralSettings = {
  set: ASTRAL_NAME_SETS[0]?.name ?? "AstralTrek",
  replaceCultures: true,
};

function read(): AstralSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULTS };
    const parsed = JSON.parse(raw) as Partial<AstralSettings>;
    return {
      set: typeof parsed.set === "string" && findAstralSet(parsed.set) ? parsed.set : DEFAULTS.set,
      replaceCultures: parsed.replaceCultures !== false,
    };
  } catch {
    return { ...DEFAULTS };
  }
}

let settings: AstralSettings = read();
const listeners = new Set<(settings: AstralSettings) => void>();

/** The mod's settings, as they are now. */
export function getSettings(): AstralSettings {
  return { ...settings };
}

/** Change the settings, and tell whoever is listening. */
export function setSettings(patch: Partial<AstralSettings>): AstralSettings {
  settings = { ...settings, ...patch };
  if (!findAstralSet(settings.set)) settings.set = DEFAULTS.set;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // a browser with storage disabled still works, it just forgets
  }
  for (const listener of listeners) listener(getSettings());
  return getSettings();
}

/** Listen for the settings to change. Returns the unsubscribe. */
export function onSettingsChange(listener: (settings: AstralSettings) => void): () => void {
  listeners.add(listener);
  return () => void listeners.delete(listener);
}
