function calculateTax(amount: number, rate: number):number;
function calculateTax(amount: number, category:"Standard"| "Luxury"):number;
function calculateTax(amount: number, param?: number | "Standard" | "Luxury"): number {
        let taxRate = typeof param === "number" ? param : param === "Luxury" ? 0.2 : 0.1;
        return amount*taxRate;
}

console.log(calculateTax(1000, 0.15));
console.log(calculateTax(1000, "Luxury"));
console.log(calculateTax(1000, "Standard"));
