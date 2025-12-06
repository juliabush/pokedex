import type { State } from "./state.js";

export async fucntion commandMapBack(state: State): Promise<void> {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page");
        return;
    }
    const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

    state.nextLocationsURL = locations.next;
    state.prevocationsURL = locations.previous;

    for (const loc of locations.results) {
        console.log(loc.name)
    }
}