const http  = require('http');

/* const req = http.request({
    hostname: 'www.google.com'
},(res)=>{
   console.log(res.statusCode);
   console.log(res.headers);
}) 
req.end();
*/

//req: http.ClientRequest
const req = http.get('http://www.google.com',(res)=>{
    //res: http.IncomingMessage
   console.log(res.statusCode);
   console.log(res.headers);
   res.on('data',(data)=> console.log(data));
  // res.setEncoding('utf-8');
})
console.log(req.agent); // http.Agent
req.on('error',(e)=>console.log(e));
