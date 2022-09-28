const { resolveObjectURL } = require('buffer')
const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
  const read = fs.readFile('./index.html','utf8',(err,data) =>{
    if(err){
      res.writeHead(404);
      res.end("This file is not found")
    }
    else {
      res.writeHead(200,{'Content-text':'text/html'})
      res.end(data)
    }

    
  })
  
})