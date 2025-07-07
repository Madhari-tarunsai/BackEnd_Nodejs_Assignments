const http=require("http")
const server=http.createServer((req,res)=>{
  console.log("url:",req.url,"method:" ,req.method)
  res.writeHead(200,{"content-type":"application/json"})
  res.write("hi")
  res.end("")
   
});
server.listen(4001, () => {
  console.log("Server is running on port 4000");
});