function sortArray<T>(arr: T[], compareFn: (a: T, b: T) => number): T[] {
    return arr.sort(compareFn);
}

const numberArr=[5, 2, 9, 1, 5, 6];
const sortedNumbers=sortArray(numberArr, (a,b)=> a-b);
console.log(sortedNumbers);
