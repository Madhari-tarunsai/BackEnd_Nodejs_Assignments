// create a basic http server using Node.js http module for biltin 
const http=require("http")
const server=http.createServer((req,res)=>{
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("hello...!")
    res.end("im a server")
})
server.listen(5000,()=>{
    console.log("server is runing on the port number 5000")
})