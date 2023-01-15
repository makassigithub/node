const http = require('http');

const pid = process.pid;

http.createServer()
    .on('request',(req,res)=>{
        for(let i = 0; i< 1e7; i++); // simulate intense cpu work
        res.end(`handled by process: ${pid} \n`);
    })
    .listen(8080,()=>console.log(`Started process: ${pid} ...`));

    process.on('message',(msg)=> console.log(msg));