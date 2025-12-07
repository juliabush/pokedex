import { State } from "state.js";

export async function commandCatch(
  state: State,
  pokemonName: string
): Promise<void> {
  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
  let result = pokemon.name;
  let difficulty = pokemon.base_experience;
  console.log(`Throwing a Pokeball at ${pokemonName}...`);
}
