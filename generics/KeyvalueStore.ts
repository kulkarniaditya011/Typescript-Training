interface KeyValueStore<K,V>{
    set(key:K, value:V):void;
    get(key:K):V | undefined;
    delete(key:K):void;
}

const scores: KeyValueStore<string, number> = (() => {
    const data: Record<string, number> = {};

    return {
        set(key: string, value: number): void {
            data[key] = value;
        },
        get(key: string): number | undefined {
            return data[key];
        },
        delete(key: string): void {
            delete data[key];
        }
    };
})();