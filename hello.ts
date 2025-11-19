function greet(name: string): string{
    return `Hello, ${name}!`;
}
console.log(greet("Aditya"));


let name: string[] = [];
name.push("Aditya");
name.push("John");
console.log(name);

let tupple: [number, boolean, string];
tupple=[1, true, "Aditya"];
// console.log(tupple);

const [x,y,z]=tupple;
// console.log(x,y,z);

const person: {name: string, bloodgroup: string}={
    name: "John",
     bloodgroup: "B+ve"
};
console.log(`My name is ${person.name} and my blood group is ${person.bloodgroup}`);

type admin={role: string, name: string};
type user={username:string};
type superAdmin = admin & user;

const manager: superAdmin={role:"Manager", name:"John", username:"john123"};
console.log(manager);


