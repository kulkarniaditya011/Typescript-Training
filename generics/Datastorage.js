class Datastorage {
    data = [];
    additem(item) {
        this.data.push(item);
    }
    removeitem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getitem() {
        return [...this.data];
    }
    getLastItem() {
        return this.data.length === 0 ? null : this.data[this.data.length - 1];
    }
}
const storeNum = new Datastorage();
storeNum.additem(5);
storeNum.additem(10);
storeNum.additem(15);
storeNum.additem(20);
console.log(storeNum.getLastItem());
export {};
//# sourceMappingURL=Datastorage.js.map