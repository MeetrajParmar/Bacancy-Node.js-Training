/*
Add basic routing and error handling 
(404, 400, 500) using only the http module.
*/

import { createServer } from "node:http";

const host = "127.0.0.1";
const port = 4000;

const user = [
  { id: 1, name: "abc" },
  { id: 2, name: "xyz" },
  { id: 3, name: null },
];

const server = createServer((req, res) => {
  //   res.writeHead(200, { "content-type": "text/plain" });
  //   res.end("SERVER CREATED SUCCESSFULL");

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("HOME PAGE");
    return;
  }

  // STATUS CODE: 500
  if (req.url.startsWith("/user") && req.method === "GET") {
    try {
      const invalidUser = user.find((ele) => !ele.name || !ele.id);

      if (invalidUser) {
        res.writeHead(500, { "content-type": "text/plain" });
        return res.end(`USER WITH ID:${invalidUser.id} IS NULL`);
      }
      res.writeHead(200, { "content-type": "text/plain" });
      res.write("ALL USER");
      res.end();
    } catch (error) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end("SERVICE NOT AVAILABLE!!");
    }
    return;
  }

  // HANDLING 404 ERROR
  res.writeHead(404, { "content-type": "text/plain" });
  res.end("PAGE NOT FOUND");
});

server.listen(port, host, () => {
  console.log(`Server listening @ http://${host}:${port}`);
});
