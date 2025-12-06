import type { State } from "./state.js";

export async function commandMapBack(state: State): Promise<void> {
  if (!state.prevLocationsURL) {
    console.log("you're on the first page");
    return;
  }
  const locations = await state.pokeApi.fetchLocations(
    state.prevLocationsURL ?? undefined
  );

  state.nextLocationsURL = locations.next ?? undefined;
  state.prevLocationsURL = locations.previous ?? undefined;

  for (const loc of locations.results) {
    console.log(loc.name);
  }
}
