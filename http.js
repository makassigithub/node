const server = require('http').createServer();

server.on('request',(req,res)=>{
  res.writeHead(200,{'content-type': 'text/plain'});
  res.write('Hello!\n');
  setTimeout(()=> res.write('How are you ?\n'),10000);
  setTimeout(()=> res.write('Nice to talk to you!\n'),20000);
  //res.end();
});

server.timeout = 5000;
server.listen('8000');
