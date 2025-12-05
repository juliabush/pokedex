import { startREPL } from "./repl.js";

function main() {
  startREPL();
}

main();

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