import { EventEmitter } from "node:events";
const myEmitter = new EventEmitter();

// USERREGISTER
myEmitter.on("userRegistered", ({ name, password, age }) => {
  console.log(`Welcome ${name}\nYour AGE: ${age}`);
});

let user = {
  name: "meet",
  password: "1223",
  age: 12,
};
myEmitter.emit("userRegistered", user);

//ORDERPLACED

myEmitter.on("orderPlaced", ({ orderId, orderAddress, userID, productID }) => {
  console.log(
    `Cograts ${userID}! Your order ${orderId} for product ${productID} is placed! It will be delivered at ${orderAddress.address}, ${orderAddress.city}-${orderAddress.pincode}`,
  );
});

let order = {
  orderId: 1,
  orderAddress: {
    pincode: 385005,
    state: "Gujarat",
    city: "Surat",
    address: "ABC",
  },
  userID: 23,
  productID: 2532,
};
myEmitter.emit("orderPlaced", order);

// const myEE = new EventEmitter();
// myEE.once("foo", (x) => console.log(`a ${x}`));
// myEE.prependOnceListener("foo", () => console.log("b"));
// myEE.emit("foo", 2);
// myEE.emit("foo", 3);

//OUTPUT:
//b
//a 2
