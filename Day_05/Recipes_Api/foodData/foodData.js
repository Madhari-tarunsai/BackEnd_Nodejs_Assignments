const fs=require("fs")
const path=require("path")
const pathFile=path.join(__dirname,"food.json")
console.log(pathFile)
const foodItems=()=>{
    const fileData=fs.readFileSync(pathFile,"utf-8")
    return(JSON.parse(fileData))
}
module.exports={foodItems}
