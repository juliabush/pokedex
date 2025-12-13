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
      handler: commandExit,
    },
    help: {
      name: "help",
      description: "Provides a help menu",
      handler: commandHelp,
    },
    map: {
      name: "map",
      description: "Map forward",
      handler: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Map backward",
      handler: commandMapBack,
    },
    explore: {
      name: "explore",
      description: "Exploring diffrent locations",
      handler: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Catch different pokemon",
      handler: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspect pokemon's to see stats",
      handler: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "See all your caught pokemon",
      handler: commandPokedex,
    },
  };
}
