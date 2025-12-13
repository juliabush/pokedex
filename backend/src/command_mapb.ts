import type { State } from "./state.js";

export async function commandMapBack(
  state: State
): Promise<{ locations: string[] }> {
  const locations = await state.pokeAPI.fetchLocations(
    state.prevLocationsURL ?? undefined
  );

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  return {
    locations: locations.results.map((loc) => loc.name),
  };
}
