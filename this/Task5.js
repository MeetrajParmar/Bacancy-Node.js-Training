/*
TASK 5:this IN ARROW VS normal FUNCTION
*/

let obj1 = {
  name: "Meet",
  greet() {
    console.log(`Welcome ${this.name}`);
  },
  fullname() {
    function happ() {
      console.log(`Happy!! ${this.name}`);
    }
    happ();
  },
};

obj1.greet();
obj1.fullname();

//ARROW FUNCTION
let obj2 = {
  name: "Meet",
  greet() {
    console.log(`Welcome ${this.name}`);
    let happ = () => {
      console.log(`Happy!! ${this.name}`);
    };
    happ();
  },
};

obj2.greet();
