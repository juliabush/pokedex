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
    console.log(`\nStats:\n`);
    for (const individualStat of pokemon.stats) {
      console.log(`-${individualStat.stat.name}: ${individualStat.base_stat}`);
    }
    console.log(`\nType:\n`);
    for (const individualType of pokemon.types) {
      console.log(`-${individualType.type.name}`);
    }
  } else {
    console.log("you have not caught that pokemon");
  }
}
