import type { State } from "state.js";

export async function commandCatch(
  state: State,
  pokemonName: string
): Promise<void> {
  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
  let result = pokemon.name;
  let difficulty = pokemon.base_experience;

  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  let caught = false;

  if (difficulty > 250) {
    const roll = Math.floor(Math.random() * 10);
    caught = roll === 3;
  } else if (difficulty > 100) {
    const roll = Math.floor(Math.random() * 5);
    caught = roll === 3;
  } else {
    const roll = Math.floor(Math.random() * 2);
    caught = roll === 1;
  }

  if (caught) {
    console.log(`${pokemonName} was caught!`);
    state.pokedex.set(pokemonName);
  } else {
    console.log(`${pokemonName} escaped!`);
  }
}
