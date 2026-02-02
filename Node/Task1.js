/*
Build a Node.js script that reads a large text file 
using streams and prints word count, line count, and file size.
*/
import path from "node:path";
import * as fs from "fs";
const notes = "Node/Demo.txt";

path.dirname(notes);
path.basename(notes);
path.extname(notes);

// const outputFilePath = "Node/Demo.txt";
async function readFile(filePath) {
  const readStream = fs.readFileSync(filePath, { encoding: "utf8" });
  try {
    for await (const chunk of readStream) {
      console.log("--- File chunk start ---");
      console.log(chunk);
      console.log("--- File chunk end ---");
    }
    console.log("Finished reading the file.");
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}

try {
  await readFile("Node/Demo.txt");
} catch (error) {
  console.error(`Error: ${error.message}`);
}
