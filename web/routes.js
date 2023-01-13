const fs  = require('fs');
const server = require('http').createServer();

server.on('request',(req,res)=>{
    console.log(req.url);
    switch(req.url){
        case '/home':
        case '/about':
        case '/index' :
            res.writeHead(200,{'content-type':'text/plain'});
            res.end(fs.readFileSync(`./pages${req.url}.html`))
            break;
        case '/api':
            res.writeHead(200,{'content-type':'application/json'});
            res.end(JSON.stringify({fn:'Brahima', ln:'Traore'}));
        case '/':
            res.writeHead(301,{'Location':'/index'});
            res.end();
            break;
        default:
            res.writeHead(404);
            res.end();
            break;
    }
})

server.listen(8000,()=> console.log('server started...'));