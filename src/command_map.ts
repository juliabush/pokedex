import type { State } from "./state.js";

export async function commandMap(state: State) {
  const data = await state.pokeApi.fetchLocations(state.nextLocationsURL);
  for (const data of data.results) {
    console.log(location.name);
    state.nextLocationsURL = data.next;
    state.prevLocationsURL = data.previous;
  }
}
