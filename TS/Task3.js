var age = 3; //This is Union Type
console.log(age);
age = "31";
console.log(age);
function calculateTax(price, tax) {
    if (typeof price === 'string') {
        price = parseFloat(price.replace("$", ""));
        return "The Tax for $".concat(price, ": ").concat(price * tax);
    }
    else {
        return "The Tax for $".concat(price, ": ").concat(price * tax);
    }
}
console.log(calculateTax(24, 2));
console.log(calculateTax("$10", 2));
