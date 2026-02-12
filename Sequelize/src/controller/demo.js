// const jwt = require("jsonwebtoken")

// const token = jwt.sign({name: "harshbhai ka imp data"}, "secret", {
//     expiresIn: '5h'
// })

// console.log(token)
if (typeof null === null) {
  console.log("NULL");
}
let obj = null;
console.log(typeof null);
console.log(typeof obj);
obj = { name: "meet" };
if (!obj) {
  console.log("it's Null");
} else {
  console.log("It's Not Null");
}
