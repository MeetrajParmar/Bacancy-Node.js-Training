// // const PromisOne = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("Success!!");
// //     console.log("Promise 1 is acting!");
// //   }, 3000);
// // });

// // PromisOne.then((value) => {
// //   setTimeout(() => {
// //     console.log("Promise 1 is Resolve!");
// //   }, 0);
// //   console.log(value, "Resolve is Successfull!");
// // });

// // let vr = () => {
// //   console.log("Hello");
// // };
// // const PromiseTwo = new Promise((resolve, reject) => { 
// //   console.log("Promise 2 is compelete!");
// // });

// //resolve and Reject accept only 1 value.
// //But we use Array!
// // const PromiseThreee = new Promise((resolve, reject) => {
// //   let error = false;
// //   let user = "Meet";
// //   if (!error) {
// //     resolve(user, "Success Resolve!");
// //   } else {
// //     reject([user, 404, "User not found!"]);
// //   }
// // });

// // PromiseThreee.then((value) => {
// //   console.log("Hello ", value);
// //   return value;
// // }) //Chaining .then we access the value which is returning. We can access it using it .then again.
// //   .then((us1) => {
// //     console.log("Second 2nd then", us1);
// //   })
// //   .catch(([user, errroCode, message]) => {
// //     console.log("Something Went Wrong!!", errroCode, user, message);
// //   })
// //   .finally(() => {
// //     console.log("Finally is called!");
// //     vr();
// //   });

// const PromiseFour = new Promise((resolve, reject) => {
//   let error = false;
//   if (!error) {
//     resolve({ username: "Meet", age: 10 });
//   } else {
//     reject("Something went Wrong!");
//   }
// });
// let cosumePromise = async () => {
//   try {
//     const response = await PromiseFour;
//     console.log(response);
//     console.log("Promise Four is successfull!");
//   } catch (error) {
//     console.log("There is Error in Cosume Promise!");
//   }
// };

// cosumePromise();

// const resp = fetch("https://api.github.com/users/hiteshchoudhary")
//   .then(() => {
//     console.log("Response is successfull!");
//     console.log(resp);
//   })
//   .catch(() => {
//     console.log("Error in fetching the Code!!");
//   })
//   .finally(() => {
//     console.log("Fetch is executed Successfully!!");
//   });

// /*Microtask queue. How to check which wait function will go to microtask queue and which will go to the callback queue
// Promises  (Fetch)
// MutationObserver goes to microtask queue. Microtask queue has more prioroty!
// */

// /*

// Hoisting: Access the value without declaring it before defining the function:
// getName();//hello
// console.log(x);//undefined

// let x=4;

// let getName()=>{
//     console.log("Heelo");
//   }
// */

const Promise1 = new Promise((resolve, reject) => {
  let error = true;
  if (!error) {
    resolve("Promise 1");
  } else {
    reject("Promise 1 fail");
  }
})
  .then((value) => {
    console.log(value);
  })
  .catch(() => {
    //console.log("Promise 1 fail!");
    throw new Error("Promise 1 fail");
  });

const Promise2 = new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    resolve("Promise 2");
  } else {
    reject("Promise 2 fail");
  }
})
  .then((value) => {
    console.log(value);
  })
  .catch(() => {
    throw new Error("Promise 2 fail");
  });

const Promise3 = new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    // setTimeout(() => {
    //   console.log("Promise 3 Settimeout");
    // }, 4000);
    resolve("Promise 3");
  } else {
    reject("Promise 3 fail");
  }
})
  .then((value) => {
    console.log(value);
  })
  .catch(() => {
    throw new Error("Promise 3 fail");
  });

Promise.all([Promise1, Promise2, Promise3])
  .then(() => {
    console.log("All Promise Fullfill!");
  })
  .catch(() => {
    console.log("Anyone Fail!!");
  });

// Promise.allSettled([Promise1, Promise2, Promise3])
//   .then(() => {
//     console.log("All Promise Settled!!");
//   })
//   .catch(() => {
//     console.log("Settling is not done!!");
//   });

// Promise.any([Promise1, Promise2, Promise3])
//   .then(() => {
//     console.log("Any Promise Fullfilled!!");
//   })
//   .catch(() => {
//     console.log("Promise not fullfilled!!");
//   });

// Promise.race([Promise1, Promise2, Promise3])
//   .then(() => {
//     console.log("Someone has arrived first!");
//   })
//   .catch(() => {
//     console.log("No one has arrived!!");
//   });

// Promise.all get rejected when Anyone promise fail!!
// Promise.allSettled never get rejected. As the promise always get settled(resolve/reject).
// Promise.any get rejected,  when all promises get rejected.
// Promise.race get rejected/not fullfilled, when all promised get rejected.
