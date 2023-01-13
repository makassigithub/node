const server = require('http').createServer();

//sever: http.Server
server.on('request',(req,res)=>{
     //req: http.IncomingMessage
     //res: http.ServerResponse

     console.log(req.url);
    res.writeHead(200,{'content-type':'text/plain'});
    res.write('Hello \n');
    setTimeout(()=> res.write('How are you ?\n'),10000);
    setTimeout(()=> res.write('Nice to talk to you!\n',()=> res.end()),20000);
})

server.listen(8000,()=> console.log('server started...'));