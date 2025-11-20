class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class Electronics extends Product {
    warranty: string;

    constructor(name: string, price: number, warranty: string) {
        super(name, price);
        this.warranty = warranty;
    }
}

const phone = new Electronics("I Phone", 150000, "2 years");
console.log(phone);
