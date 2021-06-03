const request = require('request');
const args = process.argv.splice(2);
const fs = require('fs');
 let URL = args[0];
 let fp = args[1];
 console.log(URL);
 console.log(fp);

 request(URL,(error,response, body) =>{
   let byteCounter = body.length;
   fs.writeFile(URL,fp,()=>{
    console.log (`downloaded ${byteCounter} bytes & saved the file to ${fp}`);
   })
 })
 
 
 