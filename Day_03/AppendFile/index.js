// const http=require("http")
// const file=require("fs")
// const server=http.createServer((req,res)=>{
//     const data=file.appendFile("./WriteFile/write.text","im upadated file","utf8",(err)=>{
//         if(err){
//             console.log("something went wrong")
//             res.writeHead("200",{"content-type":"application/json"})
//             res.end()
//         }
//         else{
//             console.log("file append sucessfully");
//             res.writeHead("500",{"content-type":"application/json"})
//             res.end(data)
            
//         }
//     })
// })
// server.listen(2500,()=>{
//     console.log("server is runing")
// })


const http = require("http");
const file = require("fs");

const server = http.createServer((req, res) => {
    file.appendFile("./WriteFile/write.txt", "I'm updated file\n", "utf8", (err) => {
        if (err) {
            console.log("Something went wrong");
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ status: "error", message: "Failed to append file" }));
        } else {
            console.log("File append successfully");
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ status: "success", message: "File appended successfully" }));
        }
    });
});

server.listen(2500, () => {
    console.log("Server is running on port 2500");
});
