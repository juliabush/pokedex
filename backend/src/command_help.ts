import type { State } from "./state.js";

export function commandHelp(state: State): {
  commands: { name: string; description: string }[];
} {
  const commands = Object.values(state.commands).map((cmd) => ({
    name: cmd.name,
    description: cmd.description,
  }));

  return { commands };
}
