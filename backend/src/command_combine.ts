import type { State } from "./state.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";

export async function commandCatchWithInspect(
  state: State,
  pokemonName: string
) {
  const result = await commandCatch(state, pokemonName);

  if (!result.caught) {
    return { caught: false };
  }

  const inspect = commandInspect(state, pokemonName);

  if (!inspect.found) {
    return { caught: false };
  }

  return {
    caught: true,
    pokemon: inspect,
  };
}
