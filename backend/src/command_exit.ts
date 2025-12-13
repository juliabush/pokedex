import type { State } from "./state.js";

export function commandExit(state: State): { exit: true } {
  return { exit: true };
}
