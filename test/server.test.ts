/**
 * server.test.ts — the harness smoke test.
 *
 * Two things are worth proving in CI, and both are cheap: the serve-time
 * transforms on the built index.html are the ones we expect, and the dev
 * server actually answers on the routes the README documents.
 */
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { spawn, type Subprocess } from "bun";
import { buildTransformedIndex, serveFmg } from "../src/server/fmg.ts";

const DIST = new URL("../clients/fmg/dist", import.meta.url).pathname;
const PORT = 3499;
const BASE = `http://localhost:${PORT}`;

describe("serve-time transforms", () => {
  test("the built index gets the maplink normalizer and the dev flag", () => {
    const html = buildTransformedIndex(DIST);
    expect(html).not.toBeNull();
    expect(html!).toContain("maplink");
    expect(html!).toContain("__ASTRAL_DEV__");
  });

  test("Google Analytics beacons are stripped", () => {
    const html = buildTransformedIndex(DIST)!;
    expect(html).not.toContain("googletagmanager");
  });

  test("the vendored build loads no mod bundle yet", () => {
    const html = buildTransformedIndex(DIST)!;
    expect(html).not.toContain("openconquest");
  });
});

describe("serveFmg", () => {
  test("/fmg/ serves the transformed index", () => {
    const res = serveFmg(new Request("http://x/fmg/"), "/fmg/");
    expect(res?.status).toBe(200);
  });

  test("a missing asset is a 404, and traversal is refused", () => {
    expect(serveFmg(new Request("http://x/fmg/nope.js"), "/fmg/nope.js")?.status).toBe(404);
    expect(serveFmg(new Request("http://x/fmg/../x"), "/fmg/../x")?.status).toBe(400);
  });

  test("non-/fmg paths are left to the caller", () => {
    expect(serveFmg(new Request("http://x/"), "/")).toBeNull();
  });
});

describe("dev server", () => {
  let proc: Subprocess;

  beforeAll(async () => {
    proc = spawn(["bun", "src/server/index.ts"], {
      env: { ...process.env, PORT: String(PORT) },
      stdout: "pipe",
      stderr: "pipe",
    });
    // wait for the port to answer
    for (let i = 0; i < 60; i++) {
      try {
        await fetch(`${BASE}/health`);
        return;
      } catch {
        await Bun.sleep(100);
      }
    }
    throw new Error("dev server did not start");
  });

  afterAll(() => {
    proc?.kill();
  });

  test("/health answers", async () => {
    const res = await fetch(`${BASE}/health`);
    expect(res.status).toBe(200);
    expect((await res.json()).ok).toBe(true);
  });

  test("the root redirects to the client", async () => {
    const res = await fetch(`${BASE}/`, { redirect: "manual" });
    expect(res.status).toBe(302);
    expect(res.headers.get("Location")).toBe("/fmg/");
  });

  test("/fmg/ serves the client", async () => {
    const res = await fetch(`${BASE}/fmg/`);
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toContain("text/html");
  });

  test("a pinned world save is served when it exists", async () => {
    const res = await fetch(`${BASE}/maps/world.map`);
    // No world.save is committed, so this is a loud 404 with an explanation.
    expect(res.status).toBe(404);
    expect((await res.json()).error).toContain("world.map");
  });
});
