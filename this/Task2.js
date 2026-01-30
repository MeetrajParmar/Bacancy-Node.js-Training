/*
Task 2: this loss in function
Fix the this issue.
❌ Problem
const user = {
  name: "Fenil",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};


PROBLEM: Here, this has reference of parent which is greet() which does not contain name access.
*/

const user = {
  name: "Fenil",
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};

user.greet();
