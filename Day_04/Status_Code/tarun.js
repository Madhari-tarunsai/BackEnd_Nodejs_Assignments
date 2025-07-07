const http=require("http")
const url=require("url")
const server=http.createServer((req,res)=>{
  console.log("url:",req.url,"method:" ,req.method)
  console.log(url.parse(req.url))
  if (req.method==="GET"){
    res.writeHead(200,{"content-type":"application/json"})
    res.write("hi")
    res.end("")
}
else{
    res.writeHead("404",{"content-type":"application/json"})
    res.write("something went wrong")
    res.end("")
}
  
   
});
server.listen(1010, () => {
  console.log("Server is running on port 1010");
});