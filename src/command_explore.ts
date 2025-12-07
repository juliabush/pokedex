import { State } from "./state.js";

export async function commandExplore(
  state: State,
  locationName: string
): Promise<void> {
  console.log(`DEBUG: locationName = ${locationName}`);
  const locations = await state.pokeAPI.fetchLocation(locationName);
  let result = locations.pokemon_encounters;
  console.log(`Exploring ${locationName}...`);
  console.log(`Found Pokemon:`);
  for (const pokes of result) {
    console.log(`- ${pokes.pokemon.name}`);
  }
}
