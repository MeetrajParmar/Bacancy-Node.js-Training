// TASK 3:DELAYED PROMISE: CREATE PROMISE THAT WILL RESOLVE "DONE" AFTER 1 SECOND;

const DelayedPromise1 = new Promise((resolve, reject) => {
  console.log("BEFORE TIMEOUT IN PROMISE 1");
  setTimeout(() => {
    resolve("Promise 1 is Success!!");
  }, 2000);
  console.log("AFTER TIMEOUT IN PROMISE 1");
})
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });

const DelayedPromise2 = new Promise((resolve, reject) => {
  console.log("BEFORE TIMEOUT IN PROMISE 2!");
  setTimeout(() => {
    reject("Promise 2 Failed!");
  }, 1000);
  console.log("AFTER TIMEOUT IN PROMISE 2!");
})
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });
