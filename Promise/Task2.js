// Task 2: Promise chaining with transformation
let num;
//console.log(typeof num);
let numPromise = new Promise((resolve, reject) => {
  if (typeof num === "undefined") {
    num = 1;
    resolve(num * 3);
  } else {
    reject("Nothing!");
  }
})
  .then((num1) => {
    // console.log(num);
    num1 += 10;
    num = num1;
    console.log(num1);
  })
  .catch((msg) => {
    num = msg;
    // console.log(msg);
  })
  .finally(() => {
    console.log(`In finally:${num}`);
  });
