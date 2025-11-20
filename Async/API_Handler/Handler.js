export default class Datastorage {
    data = [];
    additem(item) {
        if (Array.isArray(item)) {
            this.data.push(...item);
        }
        else {
            this.data.push(item);
        }
    }
    removeitem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getitem() {
        return [...this.data];
    }
}
//# sourceMappingURL=Handler.js.map