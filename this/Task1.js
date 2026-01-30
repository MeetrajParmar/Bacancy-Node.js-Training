/*
Task 1: this inside object method
Log object property using this.
*/
let obj1 = {
  name: "Meet",
  age: 12,
  greet: function () {
    console.log(`Welcome ${this.name}`);
  },
};

obj1.greet();
