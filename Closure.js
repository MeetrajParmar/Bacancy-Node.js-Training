// function x() {
//   var a = 4;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }

// var z = x();
// console.log(typeof z);
// console.log(z);
// z();

/*
Closure is a function:
We can return the function , we assign var in function.
Child fn has access of the parent variable.
Closure:
A fn that retains access to thier surrounding state (it's lexical state), 
even after the out fn has finished execution. 
Uses of Closures:
Module Design Pattern,
Currying,
Function link once,
memoize, Maintaining state in asynce world
setTimeout, Iterators, and many more...
*/

// function ar() {
//   var b = 300;
//   function bt() {
//     var at = 13;
//     function yt() {
//       console.log(at, b);
//     }
//     yt();
//   }
//   bt();
// }
// ar();

let arr = [3, 65, 2, 8, 19];

// console.log(Math.max(...[3, 4, 6, 1]));

// let obj = {
//   name: "alsdjf",
// };

// let isEmptyObject = Object.keys(obj).length < 1;

// if (isEmptyObject) {
//   console.log("object is empty");
// } else {
//   console.log("object is not empty");
// }

// let arr = [1, "mkl", "2", 5];

// // console.log(typeof arr.join());
// // console.log(arr.reverse());
// console.log(arr.flat(0));
// let arr = [1, 2, 3, 4, ["a", [2, 5], "b", "c"], 5, 6];
// console.log(arr.flat(1));

arr.forEach((Element) => {
  console.log(Element);
});
