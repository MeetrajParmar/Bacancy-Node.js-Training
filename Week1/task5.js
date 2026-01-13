const prompt = require("prompt-sync")();
let applyCoupon = (amount, couponCode) => {};

let amount = prompt("Enter the Amount:");
let coupon = prompt("Enter the Coupon Code:");

console.log(applyCoupon(amount, coupon));
