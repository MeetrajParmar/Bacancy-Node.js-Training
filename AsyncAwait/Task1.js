// // TASK 1: Async function returning value: Create an async function that returns a number and log it.

function delay(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i);
    }, 2000);
  });
}
async function findMax(num) {
  console.log("Findding");
  for (let i = 0; i < 100000000; i++) {
    if (num < i) {
      let val = await delay(i);
      return val;
    }
  }
}

async function large() {
  let prevnum = 9999999;
  let num = await findMax(prevnum);
  console.log(`Number large than ${prevnum} is: ${num}`);
}

large();
