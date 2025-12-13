import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";
import { PokeAPI } from "./pokeapi.js";
import type { Pokemon } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokedex: Record<string, Pokemon>;
  pokeAPI: PokeAPI;
  nextLocationsURL?: string | null;
  prevLocationsURL?: string | null;
};

export function initState() {
  const readlineInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "pokedex > ",
  });
  return {
    readline: readlineInterface,
    commands: getCommands(),
    pokeAPI: new PokeAPI(),
    pokedex: {},
    nextLocationsURL: null,
    prevLocationsURL: null,
  };
}
