export function cleanInput(input: string): string[] {
  let lowercase_string = input.toLowerCase();
  let trimmed_string = lowercase_string.trim();
  let splitted_input = trimmed_string.split(/\s+/);
  return splitted_input;
}

export function startREPL() {
const { createInterface } = require("node:readline");
const rl = createInterface({
  input: process.stdin,
  output: process.stdout, 
  prompt: "Pokedex > "
});

rl.on("line", (line) => {
    rl.prompt()
    return
  let result = cleanInput(line)
  if result.length === 0 {
    rl.prompt()
    return
  }
  console.log(`Your command was: ${result[0]}`)
  rl.prompt()
})
}

