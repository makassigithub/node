const server = require('http').createServer();

server.on('request',(req,res)=>{
    if(req.url == '/compute'){
        let sum = 0;
        for(let i = 0; i< 1e10; i++){
            sum += i;
        }
        res.end(`The sum is: ${sum} \n`);
    } else {
        res.end('Ok \n');
    }
})

server.listen(8000,()=>console.log('server stated...'));