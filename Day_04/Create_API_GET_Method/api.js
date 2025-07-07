const http=require("http")
const url=require("url")
const actors=[
    {
    id: 1,
    name: "Shah Rukh Khan",
    industry: "Bollywood",
    famous_movie: "Chennai Express"
  },
  {
    id: 2,
    name: "Rajinikanth",
    industry: "Kollywood",
    famous_movie: "Kabali"
  },
  {
    id: 3,
    name: "Allu Arjun",
    industry: "Tollywood",
    famous_movie: "Pushpa"
  },
  {
    id: 4,
    name: "Aamir Khan",
    industry: "Bollywood",
    famous_movie: "Dangal"
  },
  {
    id: 5,
    name: "Yash",
    industry: "Sandalwood",
    famous_movie: "KGF"
  },
  {
    id: 6,
    name: "Dhanush",
    industry: "Kollywood",
    famous_movie: "Asuran"
  }
]


const server=http.createServer((req,res)=>{
    console.log("url:",req.url,"method:",req.method)
    console.log("object url:",url)
    if (req.method==="GET" && req.url==="/actors"){
        res.writeHead("200",{"content-type":"application/json"})
        res.write(actors)
        res.end(JSON.stringify("actors:",actors))
    }
    else{
        res.writeHead("404",{"content-type":"application/json"})
        res.end("something went wrong")
    }

});
server.listen(1000,()=>{
    console.log("server is runing")
})