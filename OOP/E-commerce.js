class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Electronics extends Product {
    warranty;
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }
    discount(percent) {
        let discountAmount = this.price * (percent / 100);
        this.price = this.price - discountAmount;
        return this.price;
    }
}
const phone = new Electronics("I Phone", 150000, "2 years");
console.log(`Price after discount: ${phone.discount(10)}`);
console.log(phone);
export {};
//# sourceMappingURL=E-commerce.js.map