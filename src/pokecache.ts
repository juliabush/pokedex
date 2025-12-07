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
  #reap() {
    const now = Date.now();
    for (const [key, entry] of this.#cache) {
      if (entry.createdAt < now - this.#interval) {
        this.#cache.delete(key);
      }
    }
  }
  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => {
      this.#reap();
    }, this.#interval);
  }
  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
  }
  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }
}
export type CacheEntry<T> = {
  createdAt: number;
  val: T;
};
