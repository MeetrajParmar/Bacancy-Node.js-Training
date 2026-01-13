//ASSIGNMENT 1: Number Check
const prompt = require("prompt-sync")();
let num = prompt("Enter the number:");

if (num > 0) {
  console.log(`The Number ${num} is Positive.`);
} else if (num === 0) {
  console.log(`The Number ${num} is Zero.`);
} else if (num < 0) {
  console.log(`The Number ${num} is Negative.`);
} else {
  console.log("Invalid Number");
}
