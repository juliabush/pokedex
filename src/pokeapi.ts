import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache;

  constructor() {
    this.cache = new Cache(5000);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;

    const cached = this.cache.get<ShallowLocations>(url);
    if (cached !== undefined) {
      return cached;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const location: ShallowLocations = await response.json();

    this.cache.add(url, location);

    return location;
  }
  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;

    const cached = this.cache.get<Location>(url);
    if (cached !== undefined) {
      return cached;
    }

    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(`${resp.status} ${resp.statusText}`);
    }

    const location: Location = await resp.json();

    this.cache.add(url, location);

    return location;
  }
  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;

    const cached = this.cache.get<Pokemon>(url);
    if (cached !== undefined) {
      return cached;
    }
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(`${resp.status} ${resp.statusText}`);
    }
    const pokemon: Pokemon = await resp.json();

    this.cache.add(url, pokemon);

    return pokemon;
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  name: string;
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};

export type Pokemon = {
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  stats: {
    stat: string;
  }[];
  types: {
    type: string;
  }[];
};
