let lastElement = (arr) => {
  return arr[arr.length - 1];
};

//console.log(lastElement([1, 2, 4, 64, 2, 47, 5, 3, 2]));

let combineArray = (...rest) => {
  let combineArray = [];
  //   for (let i in arr1) {
  //     combineArray.push(arr1[i]);
  //   }
  //   for (let j in arr2) {
  //     combineArray.push(arr2[j]);
  //   }
  //   return combineArray;
  //console.log(rest.length);
  //   for (let i in rest) {
  //     console.log(i);
  //   }

  for (let i of rest) {
    //console.log(i, "\n");
    for (let j of i) {
      combineArray.push(j);
    }
  }

  return combineArray;
};

// console.log(combineArray([1, 2, 3, 4, 5], [5, 3, 5, 2, 4], [19, 2]));

// let arr = [1, 3, 4, 6, "stra", "m", 4, 7, 1.0];

// for (let i of arr) {
//   if (typeof i === "string") {
//     console.log(i);
//   } else {
//     console.log("Number:", i, typeof i);
//   }
// }

// let ObjectLength = (obj) => {
//   let length = Object.keys(obj).length;
//   console.log(length);
// };

// let obj1 = {
//   name: "Meet",
//   age: 19,
//   location: "Surat",
//   profile: "Product",
//   salary: false,
// };
// ObjectLength(obj1);

// //Reverse Array:
// console.log("Reverse Array:");

// let reverseArray = (arr1) => {
//   for (let i = arr1.length - 1; i >= 0; i--) {
//     console.log(arr1[i]);
//   }
// };

// reverseArray([1, 4, 3, 52, 3, 6, 2]);

// let reverseArray = (arr) => arr.reduce((acc, curr) => [curr, ...acc], []);
// console.log(reverseArray([1, 2, 34, 5, 3, 5]));

let palidromeArray = (arr) => {
  let reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  console.log("Aray:", arr, "\nReverse Array:", reverseArray);
  for (let i in arr) {
    if (arr[i] == reverseArray[i]) {
      return true;
    } else return false;
  }
};

console.log(palidromeArray([1, 2, 3]));

let arr = [1, 3, 4, 5, 6, 8, 8];

let numArray = arr.filter((num) => num >= 4);
console.log(numArray);

//Array of Object

let library = [
  {
    id: 1,
    title: "Book 1",
    author: "Author 1 ",
    genre: "History",
    publish: 1990,
    edition: 2010,
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2 ",
    genre: "History",
    publish: 1990,
    edition: 2010,
  },
  {
    id: 3,
    title: "Book 3",
    author: "Author 3",
    genre: "History",
    publish: 1990,
    edition: 2010,
  },
  {
    id: 4,
    title: "Book 4",
    author: "Author 4",
    genre: "History",
    publish: 1990,
    edition: 2010,
  },
  {
    id: 5,
    title: "Book 5",
    author: "Author 5",
    genre: "Fictional",
    publish: 1990,
    edition: 2010,
  },
  {
    id: 6,
    title: "Book 6",
    author: "Author 6 ",
    genre: "Fictional",
    publish: 1997,
    edition: 2000,
  },
];

// let qur = library.filter((onj) => onj.publish > 1990);
// console.log(qur);

let result = library.forEach((items) => {
  //console.log(items);
});
console.log(typeof result);

// const MyNum = [1, 2, 3, 5, 6, 7];
// let nw = MyNum.map((num) => num + 10)
//   .map((num) => num - 4)
//   .filter((num) => num > 10);
// console.log(nw);

// const sumAR = MyNum.reduce((acc, curr) => acc * curr, 0);
// console.log(sumAR);

console.log([..."Hello", ...[{ name: "Meet", age: 10 }]]);

/*
[..."heelo",{}]
*/

let days = ["Monday"];

days.push("Tuesday");
days.push("Wednesday");
days.push("Thursday");
days.push("Friday");
days.push("Saturday");
days.push("Sunday");

console.log(days);

days.pop();

console.log(days);

days.unshift("Monday");
console.log(days);
