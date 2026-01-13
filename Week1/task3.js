const prompt = require("prompt-sync")();
let input;
do {
  console.log(
    "Select the Number for Role:\n1.Admin\n2.Manager\n3.User\n4.Exit"
  );
  input = prompt();
  switch (input) {
    case "1":
      console.log("Admin has Full access.");
      break;
    case "2":
      console.log("Manager has Moderate Access.");
      break;
    case "3":
      console.log("User has No Access.");
      break;
    case "4":
      break;
    default:
      console.log("Invalid Role.");
  }
} while (input != 4);
