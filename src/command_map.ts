import type { State } from "./state.js";

export async function commandMap(state: State) {
  const data = await state.pokeApi.fetchLocations(state.nextLocationsURL);
}
