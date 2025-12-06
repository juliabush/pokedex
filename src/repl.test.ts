import { cleanInput } from "./repl";
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
test.concurrent.each({
  {
    key: ""
    val:
    interval: 500,
  },
  {
    key:
    val:
    interval: 1000,
  }
})("Test Caching $interval ms", async ({ key,val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, val);
  const cached = cache.get(key);
  expect(cached).toBe(val);

  await new Promise((resolve) => setTimeout(resolve, interval + 100));
  const reaped = cache.get(key);
  expect(reaped).toBe(undefined);

  cache.stopReapLoop()
})
