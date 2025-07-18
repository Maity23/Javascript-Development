let names = ["Maity", "Banra", "Dattu"]; // mimicing the same structuring is destructuring.
[first, second, third] = names; // we followed the same structure which is on the right side.
console.log(first);
console.log(second);
console.log(third);

let user = { name: "Kaushik", age: 20 }
let { age } = user;
console.log(age);
console.log(`Hello ${user.name} you are ${user.age} years old`);
// We use template literals to create dynamic strings
