import { State } from "./state.js";

export async function commandExplore(
  state: State,
  locationName: string
): Promise<{ location: string; pokemon: string[] }> {
  const locations = await state.pokeAPI.fetchLocation(locationName);

  const pokemon = location.pokemon_encounters.map(
    (encounter) => encounter.pokemon.name
  );

  return {
    location: locationName,
    pokemon,
  };
}
