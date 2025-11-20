function display(value: number): string;
function display(value: number, flag: boolean): string;
function display(value: number, flag?: boolean): string {
    if (flag) {
        return `The number: ${value} is even`;
    } else {
        return `The number: ${value} is odd`;
    }
}

console.log(display(5, false));
console.log(display(8, true));
console.log(display(10));