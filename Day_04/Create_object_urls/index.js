const http = require("http");
const url=require("url")

const server = http.createServer((req, res) => {
    console.log("requested url",req.url);
     const parsedUrl = url.parse(req.url, true); 
    console.log("objecturl:",parsedUrl)

    if (req.method === "GET" && parsedUrl.pathname==="/users") {
        res.writeHead(202, "tarun", { "content-type": "application/json" });
        res.write(JSON.stringify({message:"hello nodejs"}));
        res.end();
    } else {
        res.writeHead(404, "error", { "content-type": "application/json" });
        res.write(JSON.stringify({message:"something went wrong"}));
        res.end();
    }
});

server.listen(2003, () => {
    console.log("server is runing");
});

