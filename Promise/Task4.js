// TASK 4: PROMISE ALL WITH MIXED DELAYS:

const promise1 = new Promise((resolve, reject) => {
  let err = true;
  if (err) {
    console.log("Reject1!!");
    reject(`Reject-Promise1!!!`);
  } else {
    console.log("Resolve1");
    resolve(`SUCCESS-Promise1!!`);
  }
});
const promise2 = new Promise((resolve, reject) => {
  let err = false;
  if (err) {
    console.log("Reject2!!!");
    reject(`Reject-Promise 2!!!`);
  } else {
    console.log("Resolve2!!!");
    resolve(`SUCCESS-Promise 2!!`);
  }
});
Promise.all([promise1, promise2])
  .then(() => {
    console.log("All Promise Resolve");
  })
  .catch(() => {
    console.log("Some Promise has  fail!!!");
  });
