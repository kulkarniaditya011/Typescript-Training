const scores = (() => {
    const data = {};
    return {
        set(key, value) {
            data[key] = value;
        },
        get(key) {
            return data[key];
        },
        delete(key) {
            delete data[key];
        }
    };
})();
export {};
//# sourceMappingURL=KeyvalueStore.js.map