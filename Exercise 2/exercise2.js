"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTax(amount, param) {
    let taxRate = typeof param === "number" ? param : param === "Luxury" ? 0.2 : 0.1;
    return amount * taxRate;
}
console.log(calculateTax(1000, 0.15));
console.log(calculateTax(1000, "Luxury"));
console.log(calculateTax(1000, "Standard"));
//# sourceMappingURL=exercise2.js.map