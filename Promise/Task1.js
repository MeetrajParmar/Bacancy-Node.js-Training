//TASK 1: Promise with conditional resolve/reject

function checkAdult(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve(`For ${age} : I'm Adult!!`);
    } else {
      reject(`For ${age}: I'm Child!!`);
    }
  });
}

checkAdult(12)
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });

checkAdult(55)
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });
checkAdult(19)
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });
