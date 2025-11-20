"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function display(value, flag) {
    if (flag) {
        return `The number: ${value} is even`;
    }
    else {
        return `The number: ${value} is odd`;
    }
}
console.log(display(5, false));
console.log(display(8, true));
console.log(display(10));
//# sourceMappingURL=exercise3.js.map