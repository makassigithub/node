const http = require('http');

const server = http.createServer();
const requestListener = (req,res)=> {
	res.write("Hello world");
	res.end();
}

// server is a envent emitter and can listen to an event called "request"

server.on('request',requestListener);

server.listen('8282',()=>{
   console.log('server en fonction');
});
