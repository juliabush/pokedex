export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;
    add<T>(key: string, val: T) {
        return this.#cache.CacheEntry.set(key, val)
    }
    get<T>(key: string): Object {
        if (this.#cache.CacheEntry.get(key) === undefined) {
            return undefined
        } else {
            this.#cache.CacheEntry.get(key)
        }
        
    }
    #reap() {
        for entries in Cache{
            if Cache.cache > Date.now() - this.#interval {
                    delete
         } else {
                
            }
        }
    }
    #startReapLoop() {
        setInterval(this.#reap, this.#interval)
    }
    stopReapLoop() {
        clearInterval();
        this.#reapIntervalId = undefined
    }
    constructor(number: number) {
        number = this.#interval;
        this.#startReapLoop()
    }
}
export type CacheEntry<T> = {
    createdAt: number;
    val: T;
}