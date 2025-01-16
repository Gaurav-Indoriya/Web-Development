const h = require('http')
//console.log(h)
h.createServer((req,res)=>{
    res.write("Welcome Gaurav Indoriya")
    res.end()
}).listen(4444,console.log("server start localhost:4444"))
