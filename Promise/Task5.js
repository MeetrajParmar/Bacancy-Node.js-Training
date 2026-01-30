// TASK 5: PROMISE.FINALLY USAGE: LOG "COMPELETED" REGARDLESS OF RESOLVE OR REJECT.
console.log("\n\nTASK 5:");
const finalPromise = new Promise((resolve, reject) => {
  let err = tru; //Error
  if (err) {
    reject("Promise Has been Rejected!");
  }
  resolve("Promise has been Resolved!");
})
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  })
  .finally(() => {
    console.log("Promise has been completed!!");
  });
