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
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Welcome to the Server</h1>");
    res.write("<h3>To Do List</h3>");
    res.write(
      `<h3>ID   TASK   COMPLETED</h3>\n<p>${todos[0].id}  ${todos[0].text} ${todos[0].compelete}\n<p>${todos[1].id}  ${todos[1].text} ${todos[1].compelete}</p>`,
    );
    res.end();
    return;
  }
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
    const id = Number(req.url.slice(3));

    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end("Task Not found");
      return;
    }
    res.writeHead(200, { "content-type": "application/json" });
    res.end("DELETE SUCCESSFULL");
  }
  res.writeHead(404, { "content-Type": "text/plain" });
  res.end("PAGE NOT FOUND");
});

/*
curl.exe -X DELETE "http://127.0.0.1:4000/3"


Invoke-RestMethod -Method DELETE -Uri "http://127.0.0.1:4000/1"



curl.exe -X POST "http://127.0.0.1:4000" ^
  -H "Content-Type: application/json" ^
  -d "{\"id\":3,\"text\":\"HTML\",\"completed\":false}"
*/

server.listen(port, host, () => {
  console.log(`Server Running @ http://${host}:${port}/`);
});
