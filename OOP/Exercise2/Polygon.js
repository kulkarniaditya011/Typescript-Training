"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Polygon {
}
class Triangle extends Polygon {
    side1;
    side2;
    side3;
    constructor(side1, side2, side3) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}
const triangle = new Triangle(3, 4, 5);
console.log("Perimeter of triangle: ", triangle.getPerimeter());
//# sourceMappingURL=Polygon.js.map