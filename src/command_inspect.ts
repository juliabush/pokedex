import type { State } from "./state.js";

export async function commandInspect(
  state: State,
  pokemonName: string
): Promise<void> {
  if ((state.pokedex[pokemonName] = pokemon) === true) {
    let difficulty = pokemon.base_experience;
    let height = pokemon.height;
    let weight = pokemon.weight;
    console.log(
      `Name: ${pokemonName}\n Height: ${pokemon.height} Weight: ${pokemon.weight}`
    );
  } else {
    console.log("you have not caught that pokemon");
  }
}
