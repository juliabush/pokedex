export function cleanInput(input: string): string[] {
  let lowercase_string = input.toLowerCase();
  let trimmed_string = lowercase_string.trim();
  let splitted_input = trimmed_string.split(/\s+/);
  return splitted_input;
}
const { createInterface } = require("node:readline");
const rl = createInterface({
  input: process.stdin,
  output: process.stdout, 
  prompt: rl.setPrompt(prompt)
});

rl.on("line", callback) => {
  if input === [] {
    rl.prompt()
  }
  cleanInput(input)
  console.log(`Your command was ${prompt}`)
  rl.prompt()
}