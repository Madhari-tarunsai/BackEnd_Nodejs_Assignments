const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    try {
        const data = fs.readFileSync("./Read.txt", "utf8");
        console.log(data);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ content: data }));
    } catch (err) {
        console.log("Something went wrong, please try again");
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
    }
});

server.listen(3001, () => {
    console.log("Server is running");
});
