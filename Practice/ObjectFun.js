const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// const man1 = Object.create(person);
// man1.firstName = "Peter";
// man1.lastName = "Chales";
// man1.age = 10;
// man1.eyeColor = "red";
// console.log(man1);

const myIlt = Iterator.from("1234");
let text = "";
for (let x of myIlt) {
  text += x;
}
//console.log(text);

let earth = {
  name: "Earth",
  element: "water",
  fire: true,
};

let ocean = {
  ...earth,
  water: true,
};

ocean.fire = false;

// console.log(`Ocean:${ocean}`);
// console.log("Ocean:", ocean);
// console.log("Earth:", earth);

// const module = {
//   x: 42,
//   getX() {
//     return this.x;
//   },
// };

// const unboundGetX = module.getX;
//console.log(unboundGetX());

// const boundedGetX = module.getX.bind(module);
// // console.log(unboundGetX()); // The function gets invoked at the global scope
// // Expected output: undefined
// // const boundGetX = unboundGetX.bind(module);
// // console.log(boundGetX());
// // // Expected output: 42

// console.log(boundedGetX());
// var tech = "nodejs";
// var name;

// function myFun() {
//   console.log(`Hello my name is ${name} and currently I'm learning ${tech}!`); // 'Hello my name is undefined and currently I'm learning nodejs!'
// }

// myFun();
// name = "Fenil";
// myFun();
var val = 100;
function outer() {
  var name = "Fenil";
  function inner() {
    console.log(`My name is ${name}`); // My name is Fenil (can access the name variable because it is in the lexographical scope of execution context)
  }
  inner();
  console.log(val); // 100 (can access the val, because it is in function execution context's lexographical scope)
}

outer();
// It will give a regerence error (name is not defined) because name variable is not in the lexographical scope of the execution context (here global execution context)
