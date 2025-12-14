export type PokemonInspect = {
  found: true;
  name: string;
  height: number;
  weight: number;
  stats: { name: string; value: number }[];
  types: string[];
};

export type Phase = "idle" | "shaking" | "opening";

export type Pokemon = {
  id: string;
  name: string;
  icon: string;
};
