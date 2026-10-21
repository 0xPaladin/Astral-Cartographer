/**
 * panel.ts — the mod's own UI.
 *
 * A small dialog with the mod's options and one button. It is opened from
 * FMG's Tools tab, from the command palette, and from the mod's own button in
 * the options panel.
 *
 * The dialog does not draw the map: it collects the choices and hands them
 * to the action (see actions/apply.ts). Everything the panel shows after an
 * apply is what the action reported.
 */
import { ASTRAL_NAME_SETS } from "../content/naming/index.ts";
import { applyAstral, type ApplyResult } from "../actions/apply.ts";
import type { FmgNames } from "../name-bases.ts";
import { getSettings, onSettingsChange, setSettings } from "../state.ts";

declare global {
  interface Window {
    MAP_COMMANDS?: { id: string; name: string; aliases: string; run: () => void }[];
  }
}

/** Where the dialog is put in the DOM, the way FMG's own dialogs are. */
const DIALOG_ID = "astralDialog";

function ensureDialog(): HTMLElement {
  const existing = document.querySelector<HTMLElement>(`#${DIALOG_ID}`);
  if (existing) return existing;

  const dialogs = document.querySelector<HTMLElement>("#dialogs") ?? document.body;
  dialogs.insertAdjacentHTML(
    "beforeend",
    `<div id="${DIALOG_ID}" class="dialog stable textual">
      <div class="astral-row">
        <span>Name set:</span>
        <select id="astralSet" data-tip="The register the world is named in">
          ${ASTRAL_NAME_SETS.map((set) => `<option value="${set.name}">${set.name}</option>`).join("")}
        </select>
      </div>
      <div class="astral-row">
        <label data-tip="Replace the peoples of the map, or only rename what is there">
          <input id="astralReplace" type="checkbox" />
          Replace the peoples of the map
        </label>
      </div>
      <div class="astral-row">
        <span>Apply:</span>
        <button id="astralApply" class="astral-apply" data-tip="Turn this map into a star map">Apply</button>
      </div>
      <div id="astralStatus" class="astral-status"></div>
      <div class="astral-row" style="justify-content: flex-end">
        <button id="astralClose">Close</button>
      </div>
    </div>`,
  );

  const dialog = document.querySelector<HTMLElement>(`#${DIALOG_ID}`)!;
  const setSelect = dialog.querySelector<HTMLSelectElement>("#astralSet")!;
  const replaceBox = dialog.querySelector<HTMLInputElement>("#astralReplace")!;
  const status = dialog.querySelector<HTMLElement>("#astralStatus")!;

  const settings = getSettings();
  setSelect.value = settings.set;
  replaceBox.checked = settings.replaceCultures;

  setSelect.addEventListener("change", () => setSettings({ set: setSelect.value }));
  replaceBox.addEventListener("change", () => setSettings({ replaceCultures: replaceBox.checked }));

  onSettingsChange((next) => {
    setSelect.value = next.set;
    replaceBox.checked = next.replaceCultures;
  });

  dialog.querySelector("#astralClose")!.addEventListener("click", () => closeDialog());
  dialog.querySelector("#astralApply")!.addEventListener("click", () => {
    const result = runApply();
    status.innerHTML = describe(result);
    status.className = result.error ? "astral-status error" : "astral-status";
  });

  return dialog;
}

/** The panel's Apply button, running the action. */
export function runApply(names?: FmgNames): ApplyResult {
  const generator = names ?? (globalThis.Names as unknown as FmgNames | undefined);
  if (!generator) {
    return { set: getSettings().set, cultures: 0, burgs: 0, states: 0, provinces: 0, missing: 0, error: "FMG is not ready" };
  }
  return applyAstral(generator);
}

/** What the action did, in words. */
export function describe(result: ApplyResult): string {
  if (result.error) return `<span style="color:#a00">${result.error}</span>`;
  const parts = [
    result.cultures ? `${result.cultures} peoples replaced` : "",
    result.burgs ? `${result.burgs} systems renamed` : "",
    result.states ? `${result.states} polities named` : "",
    result.provinces ? `${result.provinces} sectors named` : "",
  ].filter(Boolean);
  const missing = result.missing ? ` — ${result.missing} peoples the set could not supply were left out` : "";
  return parts.length ? `Applied ${result.set}: ${parts.join(", ")}${missing}.` : `Applied ${result.set}: nothing to change.`;
}

/** Open the panel. */
export function openPanel(): void {
  const dialog = ensureDialog();
  const jQuery = (globalThis as { $?: (selector: string) => { dialog: (options: unknown) => void } }).$;
  if (jQuery) {
    jQuery(`#${DIALOG_ID}`).dialog({
      title: "Astral Cartographer",
      width: "28em",
      position: { my: "center", at: "center", of: "svg" },
      close: closeDialog,
    });
  } else {
    dialog.style.display = "block";
  }
}

function closeDialog(): void {
  const jQuery = (globalThis as { $?: (selector: string) => { dialog: (command: string) => void } }).$;
  if (jQuery) jQuery(`#${DIALOG_ID}`).dialog("destroy");
  document.querySelector<HTMLElement>(`#${DIALOG_ID}`)?.remove();
}

/**
 * Install the panel: a button in FMG's Tools tab, and a command in the
 * command palette.
 */
export function installPanel(names: FmgNames): void {
  // the Tools tab gets a button, next to FMG's own tools
  const tools = document.querySelector<HTMLElement>("#toolsContent");
  if (tools && !document.querySelector("#astralTool")) {
    tools.insertAdjacentHTML(
      "beforeend",
      `<div class="options-table">
        <button id="astralTool" data-tip="Turn this map into a star map">Astral Cartographer</button>
      </div>`,
    );
    document.querySelector("#astralTool")!.addEventListener("click", () => openPanel());
  }

  // and the command palette gets a way in
  const commands = window.MAP_COMMANDS;
  if (commands && !commands.some((command) => command.id === "astral")) {
    commands.push({
      id: "astral",
      name: "Open Astral Cartographer",
      aliases: "astral cartographer star map sci-fi space apply",
      run: () => openPanel(),
    });
  }
}
