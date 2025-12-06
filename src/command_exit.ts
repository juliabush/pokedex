import type { State } from "./state.js";

export function commandExit(state: State) {
  const rl = state.readline;
  console.log("Closing the Pokedex... Goodbye!");
  rl.close();
  return process.exit(0);
}
