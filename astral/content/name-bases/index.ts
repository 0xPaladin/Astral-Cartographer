/**
 * The name bases Astral Cartographer ships.
 *
 * Three registers, each with two groups: star systems and polities. They are
 * registered into FMG's `Names.nameBases` alongside the stock bases, so a
 * culture can be pointed at one and the whole map takes its flavour from
 * there.
 */
import { astralJammer } from "./astral-jammer.ts";
import { astralTrek } from "./astral-trek.ts";
import { grimdark } from "./grimdark.ts";
import type { AstralNameBase } from "./types.ts";

export const ASTRAL_NAME_BASES: AstralNameBase[] = [astralTrek, astralJammer, grimdark];

export { astralJammer, astralTrek, grimdark };
export * from "./types.ts";

/** The base with this name, if we ship one. */
export function findAstralBase(name: string): AstralNameBase | undefined {
  return ASTRAL_NAME_BASES.find((base) => base.name === name);
}
