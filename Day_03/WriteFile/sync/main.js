const http=require("http")
const fs=require("fs")
const data=fs.writeFile("./write.txt"," The most important days of India for 2025 include Republic Day (January 26), Independence Day (August 15), Gandhi Jayanti (October 2), and Constitution Day (November 26). These dates hold particular importance because of their historical significance and frequent appearance in examinations and official celebrations.","utf8",(err)=>{
    if (err){
        console.log("err")
    }
    else{

        console.log(data)
    }
})