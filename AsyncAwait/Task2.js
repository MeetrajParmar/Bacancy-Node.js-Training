// Task 2: AWAIT WITH DELAY :  WAIT 1 SECOND BEFORE LOGGING "HELLO";
async function delay(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 3000);
  }).then((message) => {
    console.log(message);
  });
}

async function delaymessage() {
  let message = "HELLO";
  console.log("BEFORE AWAIT!");
  await delay(message);
  console.log("After AWAIT!");
}
delaymessage();
