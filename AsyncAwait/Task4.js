/* 
TASK 4: SEQUENTIAL ASYNC CALLS
CALL TWO ASYNC FUNCTION ONE AFTER ANOTHER.
*/
async function secondAsync() {
  return "I'm SECOND ASYNC FUNCTION!";
}

const firstAsync = async () => {
  return "I'M FIRST SYNC FUNCTION!";
};

const runSequential = async () => {
  console.log("BEFORE ASYNC 1");
  const v1 = await firstAsync();
  console.log(v1);
  console.log("AFTER ASYNC 1");

  console.log("BEFORE ASYNC 2");
  const v2 = await secondAsync();
  console.log(v2);
  console.log("AFTER ASYNC 2");
};

runSequential();
