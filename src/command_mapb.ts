import type { State } from "./state.js";

export async fucntion commandMapBack(state: State): Promise<void> {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page");
        return;
    }
}