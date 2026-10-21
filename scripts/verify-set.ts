/**
 * verify-set.ts — a scratch script.
 *
 * Prints a set as it will be pushed into FMG, so the content can be read
 * and checked by eye.
 *
 *   bun run scripts/verify-set.ts Grimdark
 */
import { ASTRAL_NAME_BASES, ASTRAL_NAME_SETS, poolOf } from "../astral/content/naming/index.ts";

const wanted = process.argv[2] ?? "Grimdark";
const set = ASTRAL_NAME_SETS.find((candidate) => candidate.name === wanted);
if (!set) throw new Error(`no set called ${wanted}`);

console.log(`${set.name} — ${set.cultures.length} peoples\n`);

for (const culture of set.cultures) {
    const base = ASTRAL_NAME_BASES.find((candidate) => candidate.name === culture.base)!;
    const systems = poolOf(base, "systems");
    const polities = poolOf(base, "polities");
    console.log(`${culture.name.padEnd(24)} ${base.name.padEnd(22)} ${String(systems.length).padStart(3)} systems, ${polities.length} polities`);
    console.log(`   systems:  ${systems.slice(0, 5).join(", ")}, ...`);
    console.log(`   polities: ${polities.slice(0, 5).join(", ")}, ...`);
}

console.log(`\ntotal bases: ${ASTRAL_NAME_BASES.length}`);
for (const base of ASTRAL_NAME_BASES) {
    const n = poolOf(base, "systems").length;
    console.log(`  ${base.name.padEnd(22)} ${base.set.padEnd(12)} ${String(n).padStart(3)}${base.stock ? `  (from FMG's "${base.stock}")` : ""}`);
}
