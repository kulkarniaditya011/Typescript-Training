"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Electronics extends product {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }
}
const phone = new Electronics("I Phone", 150000, "2 years");
console.log(phone);
//# sourceMappingURL=E-commerce.js.map