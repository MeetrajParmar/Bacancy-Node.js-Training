// /*
// Build a Node.js script that reads a large text file
// using streams and prints word count, line count, and file size.
// */
// import path from "node:path";
// import * as fs from "fs";
// const notes = "Node/Demo.txt";

// path.dirname(notes);
// path.basename(notes);
// path.extname(notes);

// // const outputFilePath = "Node/Demo.txt";
// async function readFile(filePath) {
//   const readStream = fs.readFileSync(filePath, { encoding: "utf8" });
//   try {
//     for await (const chunk of readStream) {
//       console.log("--- File chunk start ---");
//       console.log(chunk);
//       console.log("--- File chunk end ---");
//     }
//     console.log("Finished reading the file.");
//   } catch (error) {
//     console.error(`Error reading file: ${error.message}`);
//   }
// }

// try {
//   await readFile("Node/Demo.txt");
// } catch (error) {
//   console.error(`Error: ${error.message}`);
// }
const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];

if (!filePath) {
  console.log("❌ Please provide a file path");
  console.log("Usage: node analyze-file.js <file-path>");
  process.exit(1);
}

const absolutePath = path.resolve(filePath);

if (!fs.existsSync(absolutePath)) {
  console.log("❌ File not found:", absolutePath);
  process.exit(1);
}

let wordCount = 0;
let lineCount = 0;
let leftover = ""; c

// Get file size
const stats = fs.statSync(absolutePath);
console.log(stats.size);
const fileSizeBytes = stats.size;
const fileSizeMB = (fileSizeBytes / (1024 * 1024)).toFixed(2);

const stream = fs.createReadStream(absolutePath, { encoding: "utf8" });

stream.on("data", (chunk) => {
  chunk = leftover + chunk;

  // Count lines
  lineCount += (chunk.match(/\n/g) || []).length;

  // Split into words
  const words = chunk.split(/\s+/);

  // Last word might be incomplete (cut by stream chunk)
  leftover = words.pop() || "";

  // Count valid words
  wordCount += words.filter((w) => w.length > 0).length;
});

stream.on("end", () => {
  // Count leftover if it is a valid word
  if (leftover.trim().length > 0) wordCount++;

  console.log("\n📄 File Analysis Report");
  console.log("------------------------");
  console.log("📌 File:", absolutePath);
  console.log("📏 File Size:", fileSizeBytes, "bytes", `(${fileSizeMB} MB)`);
  console.log("🧾 Line Count:", lineCount);
  console.log("🔤 Word Count:", wordCount);
  console.log("------------------------\n");
});

stream.on("error", (err) => {
  console.log("❌ Error reading file:", err.message);
});
