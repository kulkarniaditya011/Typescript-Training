abstract class Polygon{
    abstract getPerimeter():number;
}

class Triangle extends Polygon{
    side1:number;
    side2:number;
    side3:number;

    constructor(side1:number, side2:number, side3:number){
        super();
        this.side1=side1;
        this.side2=side2;
        this.side3=side3;
    }

    getPerimeter(): number {
        return this.side1 + this.side2 + this.side3;
    }
}

const triangle = new Triangle(3,4,5);
console.log("Perimeter of triangle: ",triangle.getPerimeter());
