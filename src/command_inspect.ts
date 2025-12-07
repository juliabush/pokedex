import type { State } from "./state.js";
import { Pokemon } from "./pokeapi.js";

export async function commandInspect(
  state: State,
  pokemonName: string
): Promise<void> {
  let pokemon = state.pokedex[pokemonName];
  if (pokemon !== undefined && pokemon !== null) {
    let name = pokemon.name;
    let height = pokemon.height;
    let weight = pokemon.weight;
    console.log(
      `Name: ${pokemon.name}\n Height: ${pokemon.height}\n Weight: ${pokemon.weight}\n`
    );
  } else {
    console.log("you have not caught that pokemon");
  }
}
