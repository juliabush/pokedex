import { createInterface, type Interface } from "readline";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  createInterface: Interface;
  commands: Record<string, CLICommand>;
};

export function initState() {}
