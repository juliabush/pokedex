import type { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
  const data = await state.pokeAPI.fetchLocations(state.nextLocationsURL);

  state.nextLocationsURL = data.next;
  state.prevLocationsURL = data.previous;

  for (const location of data.results) {
    console.log(location.name);
  }
}
