const http=require("http")
const file=require("fs")
const server=http.createServer((req,res)=>{
    const data=file.writeFile("./write.txt","hello boss","utf8",(err)=>{
        if(err){
            console.log("something went wrong")
            res.writeHead("200",{"content-type":"application/json"})
            res.end()
        }else{
            console.log("file is sucessfully updated")
            res.writeHead("500",{"content-type":"application/json"})
            res.end(data)
        }
    })
})
server.listen(4000,()=>{
    console.log("server is runing")
})