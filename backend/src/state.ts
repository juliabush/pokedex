import { getCommands } from "./command.js";
import { PokeAPI } from "./pokeapi.js";
import type { Pokemon } from "./pokeapi.js";

export type BackendCommand = {
  name: string;
  description: string;
  handler: (state: State, payload?: unknown) => unknown;
};

export type State = {
  commands: Record<string, BackendCommand>;
  pokedex: Record<string, Pokemon>;
  pokeAPI: PokeAPI;
  nextLocationsURL?: string | null;
  prevLocationsURL?: string | null;
};

export function initState() {
  return {
    commands: getCommands(),
    pokeAPI: new PokeAPI(),
    pokedex: {},
    nextLocationsURL: null,
    prevLocationsURL: null,
  };
}
