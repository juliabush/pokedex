import type { CLICommand } from "./command";

export function commandExit() {
  console.log("Closing the Pokedex...\nGoodbye!");
  return process.exit(0);
}
