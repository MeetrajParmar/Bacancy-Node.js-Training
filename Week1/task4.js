const prompt = require("prompt-sync")();
const calculateTotalPrice = (price, quantity) => {
  return price * quantity;
};

let price = Number(prompt("Enter the Price:"));
let quantity = Number(prompt("Enter the Quantity:"));

if (isNaN(price) || isNaN(quantity)) {
  console.log("Please enter valid numbers.");
} else {
  let totalPrice = calculateTotalPrice(price, quantity);
  console.log(`Price: ${price}
Quantity: ${quantity}
Total: ${totalPrice}`);
}
