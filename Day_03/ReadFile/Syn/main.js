const http=require("http")
const file=require("fs")
const server=http.createServer((req,res)=>{
    file.readFile("./Read.txt","utf8",(err,data)=>{
        if (err){
            console.log("Something went wrong, please try again");
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Internal Server Error" }));
        }
        else{
            console.log(data)
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify( data ));
        }
    });
   
});
 server.listen("3000",()=>{
        console.log("server is runing")
    })