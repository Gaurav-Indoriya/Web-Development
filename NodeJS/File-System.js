const f = require('fs')
//console.log(f)

//Asychronous
f.readFile(__dirname + "/file-test.txt","utf-8",(err,data) =>{
    if(err) throw err;
    console.log(data);
})
console.log("Hello Gwalior")

//Synchronous

// f.readFileSync(__dirname + "/file-test.txt","utf-8",(err,data) =>{
//     if(err) throw err;
//     console.log(data);
// });
// console.log("Hello Gwalior")
