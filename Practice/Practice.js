//Task 1: Sum(): We can enter any number of parameter.

let sum_num = (...rest) => {
  return rest.reduce((acc, val) => acc + val, 0);
};

// console.log(sum_num(1, 3, 4));
// console.log(sum_num(1, 3, 4, 4, 7, 2, 1, 3));
// console.log(sum_num(1, 3, 4, 4, 6, 2, 3));

//Task 2: frequent(): Return Most Frequent element.

function mostFrequent(arr) {
  const count = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  let maxCount = 0;
  let result;

  for (let key in count) {
    if (count[key] > maxCount) {
      maxCount = count[key];
      result = key;
    }
  }
  return Number(result);
}

console.log(
  mostFrequent([1, 2, 2, 2, 1, 5, 3, 13, 54, 1, 3, 1, 3, 1, 3, 3, 3, 3]),
);

/*
for in: Object key & array index:
for of: Give value of array
forEach: Does not return value/resultant array. It work for Arrays only, unless we customise to use it in another way!
*/
let a = 1;
a + 3;
console.log(a);

const at = "3" + "3";
console.log(at);

let str = "Meet";
console.log("GARBARE".slice(2));
