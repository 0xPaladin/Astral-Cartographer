/**
 * payload.ts — the mod's whole data, as one JSON-serialisable object.
 *
 * FMG's Namesbase Editor installs a name base by hand: download a file, open
 * Tools ▸ Namebase, paste the names, set the lengths. The mod does the same
 * thing without the ceremony — it **pushes** the payload into FMG when the
 * page loads, and every time a map is loaded after that.
 *
 * The payload has two halves:
 *
 * - `bases` — our name bases in FMG's own shape (`{name, i, min, max, d, m,
 *   b}`), ready to be assigned to `Names.nameBases`.
 * - `sets` — our culture sets, with each culture's **base id resolved**
 *   against the array that was pushed, so the dropdown's entries point at
 *   real bases rather than at names that have to be looked up again.
 *
 * It also carries `text`: the same bases in FMG's namesbase file format, so
 * the payload can be downloaded and installed by hand in any FMG — ours or
 * stock.
 */
import { ASTRAL_NAME_BASES, ASTRAL_NAME_SETS, poolString, type AstralNameBase, type AstralNameSet } from "./content/naming/index.ts";
import { toFmgNameBase, type FmgNameBase, type FmgNames } from "./name-bases.ts";

/** One people in a set, with the base it names things from. */
export interface PayloadCulture {
  name: string;
  /** the id of the base in the pushed array */
  base: number;
  shield: string;
  odd: number;
  placement: string;
}

/** A set, with its cultures' base ids resolved. */
export interface PayloadSet {
  name: string;
  max: number;
  probability?: number;
  cultures: PayloadCulture[];
}

export interface AstralPayload {
  /** our bases, in FMG's shape, with the ids they were pushed at */
  bases: FmgNameBase[];
  /** our sets, with the base ids linked */
  sets: PayloadSet[];
  /** the same bases in FMG's namesbase file format, for a manual install */
  text: string;
}

/**
 * FMG's namesbase file format: one base per line,
 * `name|min|max|duplication|m|names`, and the names comma-separated.
 */
export function namesbaseText(bases: FmgNameBase[]): string {
  return bases.map((base) => `${base.name}|${base.min}|${base.max}|${base.d}|${base.m}|${base.b}`).join("\r\n");
}

/**
 * Build the payload against the array that is live in FMG.
 *
 * The ids are the ones the bases actually occupy, so a payload is only
 * meaningful together with the array it was built against — which is why
 * the mod builds it *after* pushing, never before.
 */
export function buildPayload(names: FmgNames): AstralPayload {
  const bases = ASTRAL_NAME_BASES.map((base) => {
    const id = names.nameBases.findIndex((candidate) => candidate.name === base.name);
    return toFmgNameBase(base, id < 0 ? 0 : id);
  });

  const sets: PayloadSet[] = ASTRAL_NAME_SETS.map((set) => ({
    name: set.name,
    max: set.max,
    probability: set.probability,
    cultures: set.cultures.map((culture) => ({
      name: culture.name,
      base: names.nameBases.findIndex((candidate) => candidate.name === culture.base),
      shield: culture.shield,
      odd: culture.odd ?? 1,
      placement: culture.placement ?? "any",
    })),
  }));

  return { bases, sets, text: namesbaseText(bases) };
}

/** The bases a set draws on, in the set's order. */
export function basesOfSet(set: AstralNameSet, bases: AstralNameBase[]): AstralNameBase[] {
  return set.cultures
    .map((culture) => bases.find((base) => base.name === culture.base))
    .filter((base): base is AstralNameBase => base !== undefined);
}

/**
 * Push our bases into FMG, in one assignment.
 *
 * The stock bases are kept as they are — including any the user edited in the
 * map that is being loaded — and ours are appended (or replaced in place, if
 * they are already there). The whole array is assigned at once, so FMG sees
 * exactly what the payload says.
 */
export function pushNameBases(names: FmgNames): FmgNameBase[] {
  const stock = names.getNameBases();
  const ours = ASTRAL_NAME_BASES.map((base) => toFmgNameBase(base, 0));

  const merged = stock.map((base, index) => ({ ...base, i: index }));
  for (const base of ours) {
    const index = merged.findIndex((candidate) => candidate.name === base.name);
    if (index >= 0) {
      merged[index] = { ...merged[index]!, ...base, i: index };
    } else {
      merged.push({ ...base, i: merged.length });
    }
  }

  names.nameBases = merged;
  return merged;
}

/** Offer the payload as a download, in FMG's namesbase file format. */
export function downloadPayload(payload: AstralPayload, filename = "AstralCartographer-namesbase.txt"): void {
  const blob = new Blob([payload.text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
