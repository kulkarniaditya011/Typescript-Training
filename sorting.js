"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortArray(arr, compareFn) {
    return arr.sort(compareFn);
}
const numberArr = [5, 2, 9, 1, 5, 6];
const sortedNumbers = sortArray(numberArr, (a, b) => a - b);
console.log(sortedNumbers);
//# sourceMappingURL=sorting.js.map