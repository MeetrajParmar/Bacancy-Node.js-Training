/*
Implement manual request body parsing and 
JSON response handling without using Express.
*/

import { createServer } from "node:http";

const host = "127.0.0.1";
const port = 4000;

const data = {
  id: 1,
  name: "Meet",
  age: 12,
};

const server = createServer((req, res) => {
  console.log(
    `[${new Date().toLocaleString()}:] Method:${req.method}  URL:${req.url}`,
  );

  //POST
  if ((req.url = "/" && req.method === "POST")) {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const parse = JSON.parse(body);
        res.writeHead(200, { "content-type": "application/json" });
        res.end("VALID JSON");
      } catch (err) {
        res.writeHead(201, { "content-type": "application/json" });
        res.end("INVALID JSON");
      }
    });
    return;
  }
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("SERVER SUCCESSFULLY CREATED!");
});

server.listen(port, host, () => {
  console.log(`Server @ http://${host}:${port}`);
});

/*
RESULT:
curl -X POST "http://127.0.0.1:4000" -H "Content-Type: application/json" -d "{\"name\":\"Ali\"}"
VALID JSON


curl -X POST "http://127.0.0.1:4000" "Meet"
INVALID JSON

*/
