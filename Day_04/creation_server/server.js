const http=require("http")
const server=http.createServer((req,res)=>{
    res.writeHead("200",{"content-type":"application/json"})
    res.write("hello welcome to node js.....")
    res.end("thank for come")
});
server.listen(3200,()=>{
    console.log("server is runing on the port no 3000")
})