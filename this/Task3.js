/*
TASK 3: this WITH call.
USE call TO SET this
*/
let obj1 = {
  name: "Meet",
  age: 12,
};

let greet = {
  fulldata(obj) {
    console.log(`Welcome ${this.name} and Age:${this.age}`);
  },
};

greet.fulldata(obj1);

greet.fulldata.call(obj1);
