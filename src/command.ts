import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapBack } from "./command_mapb.js";
import { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
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
    map: {
      name: "map",
      description: "Map forward",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Map backward",
      callback: commandMapBack,
    },
    explore: {
      name: "explore",
      description: "Exploring diffrent locations",
      callback: commandExplore,
    },
  };
}
