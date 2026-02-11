/*
Build a REST API using Node’s http module that supports 
GET, POST, and DELETE for a resource (e.g., todos).
*/
import { createServer } from "node:http";

const host = "127.0.0.1";
const port = 4000;

let todos = [
  { id: 1, text: "Node JS", compelete: false },
  { id: 2, text: "Express JS", compelete: true },
];

const server = createServer((req, res) => {
  //log
  console.log(
    `[${new Date().toLocaleString()}:] Method:${req.method}  URL:${req.url}`,
  );

  //GET METHOD
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    todos.forEach((ele) => {
      res.write(`${ele.id} ${ele.text} ${ele.compelete} \n`);
    });
    res.end();
    return;
  }

  //POST
  if (req.url === "/" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const parsed = JSON.parse(body);

        todos.push(parsed);

        res.writeHead(201, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Todo added", todos }));
      } catch (err) {
        res.writeHead(400, { "content-type": "application/json" });
        res.end(
          JSON.stringify({ error: "Invalid JSON", details: err.message }),
        );
      }
    });

    return;
  }

  //DELETE
  if (req.method === "DELETE") {
    const id = Number(req.url.slice(req.url.length - 1));

    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(`Task Not found:${id}`);
      return;
    }
    res.writeHead(200, { "content-type": "application/json" });
    res.end("DELETE SUCCESSFULL");
    return;
  }
  res.writeHead(404, { "content-Type": "text/plain" });
  res.end("PAGE NOT FOUND");
});

/*
curl.exe -X DELETE "http://127.0.0.1:4000/3"

Invoke-RestMethod -Method DELETE -Uri "http://127.0.0.1:4000/1"


curl -X POST "http://127.0.0.1:4000" 
-H "Content-Type: application/json" 
-d "{\"id\":2,\"text\":\"JSON\",\"completed\":false}"

*/

server.listen(port, host, () => {
  console.log(`Server Running @ http://${host}:${port}/`);
});
