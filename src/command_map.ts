import type { State } from "./state.js";

export async function commandMap(state: State) {
  let pokeApiUrl = "https://pokeapi.co/api/v2/location-area/";
  try {
    const response = await fetch(pokeApiUrl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
