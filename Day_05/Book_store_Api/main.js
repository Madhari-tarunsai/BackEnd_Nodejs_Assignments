const http = require("http");
const url = require("url");

const readFile = require("./Book_data/book.json");

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url);
  const pathName = parseUrl.pathname;
  const method = req.method;
  const path = pathName.split("/");
  const id = path[2];
  if (method === "GET" && pathName === "/Books") {
    const data = readFile;
    res.writeHead("201", { "content-type": "application/json" });
    res.write(JSON.stringify(data));
    return res.end();
  } else if (method === "GET" && pathName === `/Books/${id}`) {
    const data = readFile;
    const Books = data.find((items) => items.id == id);
    if (Books) {
      res.write(JSON.stringify(Books));
      return res.end();
    } else {
      res.writeHead("404", { "content-type": "application/json" });
      res.write("not found data");
      res.end();
    }
  } else {
    res.writeHead("404", { "content-type": "application/json" });
    res.write("something went wrong");
    res.end();
  }
});
server.listen(1274, () => {
  console.log("your server is runing");
});
