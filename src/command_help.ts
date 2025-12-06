import type { CLICommand } from "./command.js";

export function commandHelp() {
  console.log("Welcome to the Pokedex!\n Usage:");
  for (const cmd of Object.values(commands)) {
    console.log(`${cmd.name}: ${cmd.description}`);
  }
}
