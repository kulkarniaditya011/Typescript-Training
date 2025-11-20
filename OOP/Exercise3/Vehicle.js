class Car {
    brand;
    speed;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    accelerate(amount) {
        this.speed += amount;
        console.log(`${this.brand} accelerated. Current speed is ${this.speed} km/hr`);
    }
}
const myCar = new Car("Mercedes G63", 100);
myCar.accelerate(50);
export {};
//# sourceMappingURL=Vehicle.js.map