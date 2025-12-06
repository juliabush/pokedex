import type { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
  const locations = await state.pokeApi.fetchLocations(state.nextLocationsURL);

  state.nextLocationsURL = locations.next ?? undefined;
  state.prevLocationsURL = locations.previous ?? undefined;

  for (const loc of locations.results) {
    console.log(loc.name);
  }
}
