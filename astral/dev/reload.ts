/**
 * reload.ts — dev-only: reload the page when the mod bundle is rebuilt.
 *
 * The bundle is a module boundary, so a rebuilt bundle cannot be hot-swapped
 * into a running page: the module graph is already evaluated. The honest
 * thing is a reload, and this is the dev flag the dev server injects.
 */
const POLL_MS = 1000;

/** The build id file sits next to the bundle it describes. */
function buildIdUrl(): string | null {
  try {
    return new URL("build-id.txt", import.meta.url).href;
  } catch {
    return null;
  }
}

export function watchBundle(): void {
  const url = buildIdUrl();
  if (!url) return;

  let last: string | null = null;
  const tick = async (): Promise<void> => {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) return;
      const id = (await response.text()).trim();
      if (last === null) {
        last = id;
        return;
      }
      if (id !== last) {
        last = id;
        location.reload();
      }
    } catch {
      // the dev server is restarting; try again on the next tick
    }
  };

  setInterval(() => void tick(), POLL_MS);
}
