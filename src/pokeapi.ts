export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {}

  async fetchLocation(locationName: string): Promise<Location> {}
}

export type ShallowLocations = {};

export type Location = {};
