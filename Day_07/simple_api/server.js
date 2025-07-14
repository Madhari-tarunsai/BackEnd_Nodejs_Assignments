const express=require("express")
const app=express();
app.get("/",(req,res)=>{
    res.json({method:"get",apiname:"im get api"})
})
app.post("/addproduct",(req,res)=>{
    res.json({method:"post",apiname:"im a post api"})
})
app.put("/update",(req,res)=>{
    res.send("im from pust api")
})
app.patch("/updateall",(req,res)=>{
    res.send("im from patch api")
})
app.delete("/delete",(req,res)=>{
    res.json("im from delete api")
})
app.listen(8000,()=>console.log("server is runing"))