import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { State } from "./state.js";

export function getCommands(): Record<string, State> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Provides a help menu",
      callback: commandHelp,
    },
  };
}
