"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=KeyvalueStore.js.map