"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Aditya"));
let name = [];
name.push("Aditya");
name.push("John");
console.log(name);
let tupple;
tupple = [1, true, "Aditya"];
// console.log(tupple);
const [x, y, z] = tupple;
// console.log(x,y,z);
const person = {
    name: "John",
    bloodgroup: "B+ve"
};
console.log(`My name is ${person.name} and my blood group is ${person.bloodgroup}`);
const manager = { role: "Manager", name: "John", username: "john123" };
console.log(manager);
//# sourceMappingURL=hello.js.map