import type { State } from "./state.js";
import { Pokemon } from "./pokeapi.js";

export function commandInspect(
  state: State,
  pokemonName: string
):
  | {
      found: true;
      id: number;
      name: string;
      height: number;
      weight: number;
      stats: { name: string; value: number }[];
      types: string[];
    }
  | { found: false } {
  const pokemon = state.pokedex[pokemonName];

  if (!pokemon) {
    return { found: false };
  }

  return {
    found: true,
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    stats: pokemon.stats.map((s) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
    types: pokemon.types.map((t) => t.type.name),
  };
}
