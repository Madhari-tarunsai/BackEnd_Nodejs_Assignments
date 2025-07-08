const http = require("http");
const url = require("url");
const { foodItems } = require("./foodData/foodData.js");

console.log(foodItems());
const server = http.createServer((req, res) => {
  const pathurl = url.parse(req.url);
  const pathName = pathurl.pathname;
  const method = req.method;
  const path = pathName.split("/");
  const id = path[2];
  console.log(pathurl);
  if (method === "GET" && pathName === "/recepieitems") {
    const data = foodItems();
    res.writeHead("200", { "content-type": "application/json" });
    res.write(JSON.stringify(data));
    return res.end();
  } else if (method === "GET" && pathName === `/recepieitems/${id}`) {
    const data = foodItems();
    const items = data.find((x) => x.id == id);
    if (items) {
      res.write(JSON.stringify(items));
      return res.end();
    } else {
      res.write("data not found");
      return res.end();
    }
  }

  res.writeHead("200", { "content-type": "application/json" });
  res.write("im a resturent");
  res.end();
});
server.listen(3004, () => {
  console.log("server is runing");
});
