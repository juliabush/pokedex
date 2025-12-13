import { PokeAPI } from "./pokeapi.js";
import type { Pokemon } from "./pokeapi.js";

export type State = {
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
