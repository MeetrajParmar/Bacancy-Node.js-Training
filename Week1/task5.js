const prompt = require("prompt-sync")();
let applyCoupon = (amount, couponCode) => {
  couponCode = couponCode.toLowerCase();
  if (couponCode == "none") {
    return amount;
  } else {
    let discount = parseInt(couponCode.substring(4, couponCode.length));
    if (discount > amount) return "Coupon Code not applicable";
    return amount - discount;
  }
};

// let amount = prompt("Enter the Amount:");
// let coupon = prompt("Enter the Coupon Code:");

console.log("Total:", applyCoupon(100, "SAVE100"));
console.log("Total:", applyCoupon(300, "SAVE600"));
console.log("Total:", applyCoupon(1000, "SAVE300"));
console.log("Total:", applyCoupon(700, "SAVE600"));
