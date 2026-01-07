#### Interactive Pokedex - React + Three.js + Node.js

An interactive Pokédex experience that blends **3D animation**, game-like mechanics, and a **stateful backend** to simulate catching Pokémon.

The application features a fully animated 3D Pokéball built with **Three.js**, real Pokémon data from **PokéAPI**, and a custom backend that controls capture probability, persistence, and inspection logic.

See if you can catch them all!!!

### How it works?

1. Select a Pokemon from the booklet
2. Click the Pokeball to attempt a catch
3. The Pokeball animates (shake and then open)
4. If caught:

- A pokemon card emerges from the Pokeball
- Confetti is triggered
- The Pokemon is added to the caught list

5. Caught Pokemon persist for the session via backend state

## Architecture & Tech Stack

**Frontend**

- React + Typescript
- @react-three/fiber
- @react-three/drei
- CSS
- Vite for bundling
  **Backend**
- Node.js + Express
- In-memory game state
- PokeAPI integration
- Custom command-based game logic
- Vitest for testing

# Key Technical Takeaways

These are the code snippets that I want to highlight for various reasons described.

```Typescript
type Phase = "idle" | "shaking" | "opening";
```

The `phase` typescript union type limits it to only being either in a `idle`, `shaking` or `opening` phase, peventing bugs, with only a finite number of possible states. Better alternative then assigning to booleans, which could cause invalid combinations.

```Typescript
if (phase === "shaking") {
  groupRef.current.rotation.z = Math.sin(time * 0.02) * 0.3;
  groupRef.current.position.x = Math.sin(time * 0.05) * 0.5;
}
```

```Typescript
async function handleCatch() {
  const data = await catchPokemon(selectedPokemon);

  if (data.caught) {
    setCaught(true);
    setCardData(data.pokemon);
  } else {
    setMessage(`${selectedPokemon} escaped!`);
  }
}
```

```Typescript
if (
  phase === "opening" &&
  caught &&
  cardData &&
  cardProgress >= 1 &&
  !revealedRef.current
) {
  revealedRef.current = true;
  fireConfetti();
  onCaught(cardData);
}
```

```HTML
<Html center transform distanceFactor={10} occlude={false}>
  <div className="card">...</div>
</Html>
```

```Typescript
export async function commandCatchWithInspect(
  state: State,
  pokemonName: string
) {
  const result = await commandCatch(state, pokemonName);
  if (!result.caught) return { caught: false };

  const inspect = commandInspect(state, pokemonName);
  if (!inspect.found) return { caught: false };

  return { caught: true, pokemon: inspect };
}
```

```Typescript
if (difficulty > 250) {
  caught = Math.floor(Math.random() * 10) === 3;
} else if (difficulty > 100) {
  caught = Math.floor(Math.random() * 5) === 3;
} else {
  caught = Math.floor(Math.random() * 2) === 1;
}
```

`difficult` variable is assigned to `pokemon.base_experience`, taken from the PokeAPI which is a measure of how strong/rare a given pokemon is. These conditionals show how many shakes of the 3d ball it could take to catch various pokemons of differing rarity.

```Typescript
state.pokedex[pokemonName] = pokemon;
```

`State` is a long-lived in-memory object scoped to the lifetime of the server.
When a Pokémon is successfully caught, its full data is stored in `state.pokedex` so future requests (such as inspect) can reference the cached Pokémon instead of repeatedly calling the PokéAPI.

```Typescript
export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;
  add<T>(key: string, val: T) {
    const entry: CacheEntry<T> = {
      createdAt: Date.now(),
      val: val,
    };
    this.#cache.set(key, entry);
  }
  get<T>(key: string): T | undefined {
    const entry = this.#cache.get(key);
    if (entry === undefined) {
      return undefined;
    }
    return entry.val as T;
  }
}
```

```Typescript
test.concurrent.each([
  {
    key: "https://pokeapi.co/api/v2/location-area",
    val: "testdata",
    interval: 500,
  },
  {
    key: "https://pokeapi.co/api/v2/location-area/1",
    val: { name: "some-location" },
    interval: 1000,
  },
])("Test Caching $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);
})
```
