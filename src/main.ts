import { startREPL } from "./repl.js";

function main() {
  startREPL();
}

main();

const { createInterface } = require("node:readline");
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
