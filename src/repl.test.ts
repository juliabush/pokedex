import { cleanInput } from "./repl";
import { Cache } from ".pokecache.js";
import { describe, expect, test } from "vitest";

// cleanInput test
describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    let actual = cleanInput(input);
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
// Cache test
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

  cache.add(key, val);
  const cached = cache.get<typeof val>(key);
  expect(cached).toBe(val);

  await new Promise((resolve) => setTimeout(resolve, interval + 100));
  const reaped = cache.get<typeof val>(key);
  expect(reaped).toBe(undefined);

  cache.stopReapLoop();
});
