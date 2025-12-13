import type { State } from "./state.js";

export async function commandExit(state: State): Promise<void> {
  const rl = state.readline;
  console.log("Closing the Pokedex... Goodbye!");
  rl.close();
  return process.exit(0);
}
