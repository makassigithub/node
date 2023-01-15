const server  = require('http').createServer();
const {fork}  = require('child_process');

const forked = fork('compute_worker.js');

server.on('request',(req,res)=> {
  console.log(req.url);
    if(req.url == '/compute'){
      forked.send('start');
      forked.on('message',msg => res.end(`Sum is: ${msg} \n`));
    } else {
        res.end('Ok \n');
    }
})

server.listen(8000,()=> console.log('Listening...'));