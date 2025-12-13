import { State } from "./state.js";
import { Pokemon } from "./pokeapi.js";

export async function commandPokedex(
  state: State
): Promise<{ caughtPokemons: { name: string }[] }> {
  const pokemon = state.pokedex;

  const caughtPokemons = Object.values(state.pokedex).map((pokemon) => ({
    name: pokemon.name,
  }));
  return { caughtPokemons };
}
