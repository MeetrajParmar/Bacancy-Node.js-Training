const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");

let intFun;
let count = 0;
startButton.addEventListener("click", function () {
  if (count === 1) {
    console.log("Interval is running!!");
    return;
  }
  count++;
  intFun = setInterval(() => {
    console.log(Math.random() * 10);
  }, 1000);
});

stopButton.addEventListener("click", function () {
  clearInterval(intFun);
  console.log("Interval stopped!!");
  count--;
});
/*
  
const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");

let intFun = null;

startButton.addEventListener("click", function () {
  if (intFun !== null) {
    console.log("Interval is running!!");
    return;
  } // already running

  intFun = setInterval(() => {
    console.log(Math.random() * 10);
  }, 1000);
});

stopButton.addEventListener("click", function () {
  clearInterval(intFun);
  console.log("Interval is stoped!");
  intFun = null; // reset
});

*/
