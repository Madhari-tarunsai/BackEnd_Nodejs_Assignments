const express=require("express")
const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.post("/addbook",(req,res)=>{
    console.log(req.body)
    console.log(req.query)
    const data1=req.query
    const data=req.body
    res.json({"message":"data created sucessfully",data,params:data1.price})
})
app.listen(4000,()=>console.log("server is runing"))