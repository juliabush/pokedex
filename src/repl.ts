import { createInterface } from "readline";
import { getCommands } from "./command.js";

export function cleanInput(input: string): string[] {
  let lowercase_string = input.toLowerCase();
  let trimmed_string = lowercase_string.trim();
  let splitted_input = trimmed_string.split(/\s+/);
  return splitted_input;
}

export function startREPL(state: State) {
  const rl = state.readline;

  rl.prompt();
  rl.on("line", (line: string) => {
    let result = cleanInput(line);
    if (result.length === 0) {
      rl.prompt();
      return;
    }
    const commands = state.commands;
    const commandName = result[0];
    const cmd = commands[commandName];

    if (cmd) {
      cmd.callback(state);
    } else {
      console.log("Unkown command");
    }

    rl.prompt();
  });
}
