import { State } from "./state.js";
import type { Location } from "./pokeapi.js";

export async function commandExplore(
  state: State,
  locationName: string
): Promise<{ location: string; pokemon: string[] }> {
  const locations = await state.pokeAPI.fetchLocation(locationName);

  const pokemon = location.pokemon_encounters.map(
    (encounter: Location["pokemon_encounters"][number]) =>
      encounter.pokemon.name
  );

  return {
    location: locationName,
    pokemon,
  };
}
