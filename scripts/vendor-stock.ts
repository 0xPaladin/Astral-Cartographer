/**
 * vendor-stock.ts — a scratch script.
 *
 * Turns FMG's own name bases, as they sit in the vendored bundle, into a
 * data file we can import: `astral/content/naming/stock.ts`.
 *
 *   bun run scripts/vendor-stock.ts
 */
import { readFileSync, writeFileSync } from "node:fs";

const source = readFileSync("clients/fmg/dist/names-generator-wpWlpCnK.js", "utf8");
const pattern = /\{name:`([^`]*)`,i:(\d+),min:(\d+),max:(\d+),d:`([^`]*)`,m:([\d.]+),b:`([^`]*)`\}/g;

const bases: { name: string; i: number; min: number; max: number; d: string; m: number; b: string }[] = [];
for (const match of source.matchAll(pattern)) {
  bases.push({
    name: match[1]!,
    i: Number(match[2]),
    min: Number(match[3]),
    max: Number(match[4]),
    d: match[5]!,
    m: Number(match[6]),
    b: match[7]!,
  });
}

bases.sort((a, b) => a.i - b.i);

console.log(`extracted ${bases.length} bases`);

// the rules our own content obeys — the stock pools must obey them too
const problems: string[] = [];
for (const base of bases) {
  const names = base.b.split(",");
  for (const name of names) {
    if (/[0-9]/.test(name)) problems.push(`${base.name}: digit in "${name}"`);
    if (name.includes("|") || name.includes("/")) problems.push(`${base.name}: separator in "${name}"`);
    if (!/^[\x20-\x7e]*$/.test(name)) problems.push(`${base.name}: non-ASCII in "${name}"`);
    if (name !== name.trim()) problems.push(`${base.name}: untrimmed "${name}"`);
  }
  if (new Set(names).size !== names.length) problems.push(`${base.name}: duplicates in its own pool`);
  if (base.d && !/^[a-z]*$/.test(base.d)) problems.push(`${base.name}: bad d "${base.d}"`);
}
console.log(problems.length ? `PROBLEMS:\n  ${problems.join("\n  ")}` : "stock pools are clean");

// names shared between two stock bases — the ones we may not use together
console.log("\nshared between stock bases:");
for (let i = 0; i < bases.length; i++) {
  for (let j = i + 1; j < bases.length; j++) {
    const a = new Set(bases[i]!.b.split(","));
    const shared = bases[j]!.b.split(",").filter((name) => a.has(name));
    if (shared.length) console.log(`  ${bases[i]!.name} / ${bases[j]!.name}: ${shared.length}`);
  }
}

const body = bases
  .map((base) => `  { name: ${JSON.stringify(base.name)}, i: ${base.i}, min: ${base.min}, max: ${base.max}, d: ${JSON.stringify(base.d)}, m: ${base.m}, b: ${JSON.stringify(base.b)} },`)
  .join("\n");

const file = `/**
 * stock.ts — FMG's own name bases, vendored.
 *
 * Azgaar's Fantasy Map Generator ships 43 name bases: the real-world ones
 * (German, English, Chinese, Arabic, Nigerian, Vietnamese, Karnataka…) and
 * the fantasy ones (Elven, Dark Elven, Orc, Goblin, Arachnid…). They are
 * data, not code — a flat pool of sample names per base, and a Markov chain
 * built from them.
 *
 * We vendor them so our own bases can be *built from* them: a base of ours
 * may say "take the English pool, add these names of our own, and call the
 * result this". The data is copied from FMG's
 * \`src/data/name-bases.ts\` (v1.154.x), the same data the vendored bundle
 * carries, so the two can never drift apart silently.
 *
 * The format is FMG's own: \`b\` is a comma-separated pool of names.
 */
import type { StockNameBase } from "./types.ts";

/** Every name base FMG ships, in FMG's own order. */
export const STOCK_NAME_BASES: StockNameBase[] = [
${body}
];

/** The stock base with this name, if FMG has one. */
export function findStockBase(name: string): StockNameBase | undefined {
  return STOCK_NAME_BASES.find((base) => base.name === name);
}

/** The names of a stock base, as a list. */
export function stockNames(base: StockNameBase): string[] {
  return base.b.split(",");
}
`;

writeFileSync("astral/content/naming/stock.ts", file);
console.log("\nwrote astral/content/naming/stock.ts");
