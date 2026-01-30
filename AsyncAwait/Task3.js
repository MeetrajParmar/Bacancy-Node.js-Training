/*
TASK 3: Error handling with try/catch:
Reject a Promise and catch the error.
*/
async function run() {
  try {
    await new Promise((resolve, reject) => {
      let err = true;
      if (err) {
        reject("Error in Promise");
        //throw new Error("Error in Promise");
      }
      resolve("Everything is fine!!");
    })

      .then((msg) => {
        console.log(`${msg}`);
      })
      .catch((msg) => {
        // console.log(`${msg}`);
        throw new Error(msg);
      });
  } catch (error) {
    console.log(`${error}`);
  }
}

run();
