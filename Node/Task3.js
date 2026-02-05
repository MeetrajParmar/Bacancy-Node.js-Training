/*
Implement a simple configuration loader that reads environment 
variables and falls back to defaults using a custom module.

*/

import { loadEnvFile } from "node:process";

loadEnvFile("./.env");

console.log(`The Username:${process.env.ID}`);
console.log(`The Username:${process.env.PASSWORD}`);

function toJSON(response) {
  if (response.status != 200) {
    console.log(`ERROR in Fetching URL:${process.env.URL}!!`);
  }
  return response.json();
}

fetch(process.env.URL)
  .then(toJSON)
  .then((data) => {
    console.log(data[0]);
  });
