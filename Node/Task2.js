/*
Create a CLI tool that accepts arguments (process.argv) to perform operations 
like add, subtract, multiply on numbers.
*/
import { argv } from "node:process";

let operation, num1, num2;
argv.forEach((val, index) => {
  index == 2 ? (operation = val) : "";
  index == 3 ? (num1 = Number(val)) : "";
  index == 4 ? (num2 = Number(val)) : "";
});

//console.log(`Operation:${operation} Number1:${num1} Number2:${num2}`);

switch (operation) {
  case "add":
    console.log(num1 + num2);
    break;

  case "sub":
    console.log(num1 - num2);
    break;
  case "mul":
    console.log(num1 * num2);
    break;
  default:
    console.log("Invalid Operation!");
}
