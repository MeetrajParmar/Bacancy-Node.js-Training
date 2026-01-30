/*
TASK 4: this IN CONSTRUCTOR
Create a constructor function using this.
*/

function sum(a, b) {
  this.a = a;
  this.b = b;
  this.result = a + b;
}
let sumResult = new sum(1, 4);
console.log(
  `The sum of ${sumResult.a} and ${sumResult.b}: ${sumResult.result}`,
);
