const fs = require('fs')
const readFile = fs.readFile('./index.html','utf8',(err,data) =>{
  if(err){
    throw err
  }
  const writeFile = fs.writeFile("./indexA.html",data)
})