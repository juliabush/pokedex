const API_URL = "http://localhost:3000";

export async function catchPokemon(name: string) {
  const res = await fetch(`${API_URL}/catch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return res.json();
}
