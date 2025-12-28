const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const SPRITES_BASE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

export function getPokemonSprite(id: number) {
  return `${SPRITES_BASE}/${id}.png`;
}

export async function catchPokemon(name: string) {
  const res = await fetch(`${API_URL}/catch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return res.json();
}

export async function getPokemonSpriteByName(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
}
