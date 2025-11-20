interface Vehicle{
    brand: string;
    speed: number;
    accelerate(amount:number):void;
}

class Car implements Vehicle{
    brand: string;
    speed: number;
    constructor(brand: string, speed: number){
        this.brand = brand;
        this.speed = speed;
    }
    accelerate(amount: number): void {
        this.speed += amount;
        console.log(`${this.brand} accelerated. Current speed is ${this.speed} km/hr`);
        
    }

}

const myCar=new Car("Mercedes G63", 100);
myCar.accelerate(50);