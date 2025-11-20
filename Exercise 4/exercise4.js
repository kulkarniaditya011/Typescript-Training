class DataStorage {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter(i => i !== item);
    }
    getItems() {
        return [...this.data];
    }
}
function logWithLength(arg) {
    console.log(`Length: ${arg.length}`);
}
logWithLength("Hello World");
;
logWithLength([1, 2, 3, 4, 5]);
export {};
//# sourceMappingURL=exercise4.js.map