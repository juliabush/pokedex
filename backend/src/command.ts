import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapBack } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
import { BackendCommand } from "./state.js";

export function getCommands(): Record<string, BackendCommand> {
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
    catch: {
      name: "catch",
      description: "Catch different pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspect pokemon's to see stats",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "See all your caught pokemon",
      callback: commandPokedex,
    },
  };
}
