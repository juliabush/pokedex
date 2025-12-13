import type { State } from "./state.js";

export async function commandCatch(
  state: State,
  pokemonName: string
): Promise<{ pokemon: string; caught: boolean }> {
  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
  let difficulty = pokemon.base_experience;

  let caught = false;

  if (difficulty > 250) {
    caught = Math.floor(Math.random() * 10) === 3;
  } else if (difficulty > 100) {
    caught = Math.floor(Math.random() * 5) === 3;
  } else {
    caught = Math.floor(Math.random() * 2) === 1;
  }

  if (caught) {
    state.pokedex[pokemonName] = pokemon;
  }
  return {
    pokemon: pokemon.name,
    caught,
  };
}
