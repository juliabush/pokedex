import { State } from "./state.js";
import { Pokemon } from "./pokeapi.js";

export async function commandPokedex(state: State): Promise<void> {
  let pokemon = state.pokedex;
  for (const pokemon of Object.values(state.pokedex)) {
    console.log(pokemon);
  }
}
