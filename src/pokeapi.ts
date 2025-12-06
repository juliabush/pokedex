export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.com/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShalowLocations> {}

  async fetchLocation(locationName: string): Promise<Location> {}
}

export type ShallowLocations = {};

export type Location = {};
