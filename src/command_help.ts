import type { State } from "./state.js";

export function commandHelp() {
  console.log("Welcome to the Pokedex!\n Usage:");
  for (const cmd of state.commands) {
    console.log(`${cmd.name}: ${cmd.description}`);
  }
}
