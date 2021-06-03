const request = require('request');
const args = process.argv.splice(2);
 let URL = args[0];
 let fp = args[1];
 console.log(URL);
 console.log(fp);
 request(URL,(error,response,body)=>{
   console.log('error:', error); // Print the error if one occurred
   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   console.log('body:', body); // Print the HTML for the Google homepage.
 })
