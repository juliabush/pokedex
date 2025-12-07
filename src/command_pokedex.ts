import { State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {
  for (pokemon of state.pokedex) {
    console.log(pokemon);
  }
}
