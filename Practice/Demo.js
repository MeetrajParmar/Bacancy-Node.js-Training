// async function demo() {
//   console.log("Before Await!!");
//   await Promise.resolve().then(() => {
//     console.log("Resolved!!");
//   });
//   await Promise.resolve().then(() => {
//     console.log("Resolved!! 3333");
//   });
//   console.log("After await!!");
// }
// async function demo1() {
//   console.log("Before  1 Await!!");
//   await Promise.resolve().then(() => {
//     console.log("Resolved 1!!");
//   });
//   console.log("After 1 await!!");
// }

// console.log("Before ASYNC");

// demo();
// console.log("After ASYNC");
// console.log("After 3 ASYNC");
// demo1();
// console.log("After 4 ASYNC");

// let arr = [1, 2, 4, 5];

// arr = [];
// console.log(arr);

// let merge2Obj = (o1, o2) => {
//   return {
//     ...o1,
//     ...o2,
//     name: [o1.name, o2.name],
//   };
// };

// const obj1 = {
//   name: "meet",
//   age: 12,
//   place: "Surat",
// };

// const obj2 = {
//   name: "Zenil",
//   position: "SDE",
//   isAdmin: true,
//   salary: 30000,
// };

// console.log(merge2Obj(obj1, obj2));

let [a, ...rest] = [1, 2, 3, 54];

console.log(a);
console.log(rest);

function restExample(...rest) {
  console.log(rest);
}

restExample(1, 2, 34, 5, "KEadsdasdasd");
restExample(32);
