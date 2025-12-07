import { State } from "state.js";

export async function commandCatch(
  state: State,
  pokemonName: string
): Promise<void> {
  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
  let result = pokemon.name;
  let difficulty = pokemon.base_experience;
  console.log(`Throwing a Pokeball at ${pokemonName}...`);
  switch (difficulty):
    case1 (difficult > 250):
    let caught = (Math.round() * 10)
    if (caught === 3) {
        console.log(`${pokemonName} was caught!`)
    } else {
        console.log(`${pokemonName} escaped!`)
    }
    case2 (difficulty > 100):
     let caught = (Math.round() * 5)
    if (caught === 3) {
        console.log(`${pokemonName} was caught!`)
    } else {
        console.log(`${pokemonName} escaped!`)
    }
     case2 (difficulty > 0):
     let caught = (Math.round() * 2)
    if (caught === 2) {
        console.log(`${pokemonName} was caught!`)
    } else {
        console.log(`${pokemonName} escaped!`)
    }
}
