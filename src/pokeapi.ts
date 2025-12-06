export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {}
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: String[];
};

export type Location = {};
