const fs=require("fs")
const path=require("path")
const filePath=path.join(__dirname,"book.json")
console.log(filePath)
const readfile=()=>{
    const fileData=fs.readFileSync(filePath,"utf-8");
    console.log(JSON.parse(fileData))
    return JSON.parse(fileData)

}
// console.log(readfile())
module.exports={readfile}