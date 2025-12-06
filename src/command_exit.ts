export function commandExit() {
  console.log("Closing the Pokedex...\nGoodbye!");
  return process.exit(0);
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: Recod<string, CLICommand>) => void;
};
