// // async function demo() {
// //   console.log("Before Await!!");
// //   await Promise.resolve().then(() => {
// //     console.log("Resolved!!");
// //   });
// //   await Promise.resolve().then(() => {
// //     console.log("Resolved!! 3333");
// //   });
// //   console.log("After await!!");
// // }
// // async function demo1() {
// //   console.log("Before  1 Await!!");
// //   await Promise.resolve().then(() => {
// //     console.log("Resolved 1!!");
// //   });
// //   console.log("After 1 await!!");
// // }

// // console.log("Before ASYNC");

// // demo();
// // console.log("After ASYNC");
// // console.log("After 3 ASYNC");
// // demo1();
// // console.log("After 4 ASYNC");

// // let arr = [1, 2, 4, 5];

// // arr = [];
// // console.log(arr);

// // let merge2Obj = (o1, o2) => {
// //   return {
// //     ...o1,
// //     ...o2,
// //     name: [o1.name, o2.name],
// //   };
// // };

// // const obj1 = {
// //   name: "meet",
// //   age: 12,
// //   place: "Surat",
// // };

// // const obj2 = {
// //   name: "Zenil",
// //   position: "SDE",
// //   isAdmin: true,
// //   salary: 30000,
// // };

// // console.log(merge2Obj(obj1, obj2));

// // let [a, ...rest] = [1, 2, 3, 54];

// // console.log(a);
// // console.log(rest);

// // function restExample(...rest) {
// //   console.log(rest);
// // }

// // restExample(1, 2, 34, 5, "KEadsdasdasd");
// // restExample(32);
// let arr = null;
// console.log(typeof arr);
// /*
// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// */
// // var expect = function (val) {
// //   // console.log(val);
// //   return {
// //     toBe: function (num) {
// //       if (val === num || typeof num === "object") {
// //         return { value: true };
// //       }
// //     },
// //     notToBe: function (num) {
// //       if (val !== num) {
// //         return { error: "Not Equal" };
// //       }
// //     },
// //   };
// // };

// // console.log(expect(5).toBe(5));
// // console.log(expect(5).notToBe(54));
// // console.log(expect(5).toBe(null));
// // // console.log(expect(5).notToBe(null));

// /*
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment(): increases the current value by 1 and then returns it.
// decrement():reduces the current value by 1 and then returns it.
// reset(): sets the current value to init and then returns it.
// */

// // let createCounter = function (init) {
// //   let num = init;
// //   return {
// //     increment: function () {
// //       return ++init;
// //     },
// //     decrement: function () {
// //       return --init;
// //     },
// //     reset: function () {
// //       return (init = num);
// //     },
// //   };
// // };

// // const counter = createCounter(0);
// // console.log("Num:", counter.increment());
// // console.log("Num:", counter.increment());
// // console.log("Num", counter.decrement());
// // console.log("Num", counter.reset());

// /*
// Given an integer array arr and a mapping function fn,
// return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.
// */

// // let map = function (arr, fun) {
// //   let result = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     result.push(fun(arr[i], i));
// //   }
// //   return result;
// // };

// // let plusOne = function (n) {
// //   return n + 1;
// // };

// // let plusI = function (n, i) {
// //   return n + i;
// // };

// // console.log(map([1, 2, 3, 8], plusI));
// // console.log(map([1, 2, 3], plusOne));

// /*
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr
// for which the expression fn(arr[i], i) evaluates to a truthy value.
// A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.
// */
// let filter = function (arr, fn) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// let plusOne = function (n) {
//   return n + 1;
// };

// let plusI = function (n, i) {
//   return n + i;
// };

// let greaterThan10 = function (n) {
//   if (n > 10) {
//     return n;
//   }
//   return;
// };

// console.log(filter([0, -1, 1, 2, 3], plusOne));
// console.log(filter([1, 2, 3], plusI));
// console.log(filter([0, 10, 20, 30], greaterThan10));
let obj = { name: "meet", age: 12 };

let { age } = obj;
console.log(age);
