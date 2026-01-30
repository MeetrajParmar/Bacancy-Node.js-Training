/*
TASK 5: PARALLEL EXECUTION : Run two async function in parallel execution.
*/
const Promise1 = new Promise((resolve, reject) => {
  console.log("Promise 1 Started!");
  setTimeout(() => {
    resolve("Resolved Promise 1!!");
  }, 2000);
  console.log("Promise 1 Ended!!");
})
  .then((msg) => {
    console.log(msg);
  })
  .catch(() => {
    console.log("Promise 1 has failed");
  });

const Promise2 = new Promise((resolve, reject) => {
  console.log("Promise 2 Started!");
  setTimeout(() => {
    resolve("Resolved Promise2!!");
  }, 2000);
  console.log("Promise 2 Ended!!");
})
  .then((msg) => {
    console.log(msg);
  })
  .catch(() => {
    console.log("Promise 2 has failed");
  });

async function runParrellel() {
  const [res1, res2] = await Promise.all([Promise1(), Promise2()]);
  console.log(res1);
  console.log(res2);
}
