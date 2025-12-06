import type { CLICommand } from "./command.js";

export function commandExit() {
  console.log("Closing the Pokedex...\nGoodbye!");
  return process.exit(0);
}
