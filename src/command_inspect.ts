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
    let stats = pokemon.stats;
    let types = pokemon.types;
    console.log(
      `\nName: ${pokemon.name}\nHeight: ${pokemon.height}\nWeight: ${pokemon.weight}\n`
    );
    for (const stat of pokemon.stats) {
      console.log(`-${stat.name}: ${pokemon.base_stat}`);
    }
    for (const type of pokemon.types) {
      console.log(`-${type.name}`);
    }
  } else {
    console.log("you have not caught that pokemon");
  }
}
