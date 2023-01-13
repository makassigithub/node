const fs = require('fs');

const server = require('https')
	.createServer({
	  key:  fs.readFileSync('./key.pem'),
	  cert: fs.readFileSync('./certificate.pem')
	});

server.on('request',(req,res)=>{
  res.writeHead(200,{'content-type': 'text/plain'});
  res.end('Hello!\n');
});

server.listen('443',()=>console.log('Listening at localhost:443'));
