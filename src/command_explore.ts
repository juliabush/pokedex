export async function commandExplore(
  state: State,
  locationArea: string
): Promise<void> {
  const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);
  state.nextLocationsURL = locations;
  state.prevLocationsURL = locations.previous;

  for (const loc of locations.results) {
    console.log(loc.name);
  }
}
