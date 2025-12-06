export class Cache {
    #cache = new Map<string>, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;
    add<T>() {

    }
    get<T>() {
        
    }
}
export type CacheEntry<T> {
    createdAt: number;
    val: T;
}