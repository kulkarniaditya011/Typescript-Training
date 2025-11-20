function sortArray(arr, compareFn, order = "asc") {
    const sorted = arr.sort(compareFn);
    return order === "asc" ? sorted : sorted.reverse();
}
const numbers = [5, 2, 9, 1, 5, 6];
const resulAsc = sortArray(numbers, (a, b) => a - b, "asc");
console.log("Ascending:", resulAsc);
const resultDesc = sortArray(numbers, (a, b) => a - b, "desc");
console.log("Descending:", resultDesc);
export {};
//# sourceMappingURL=CustomSorting.js.map