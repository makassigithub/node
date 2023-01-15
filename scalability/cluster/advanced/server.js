const server = require('http').createServer();

const pid = process.pid;
let userCount;
server.on('request',(req,res)=>{
    for(let i = 0; i< 1e7; i++); // simulate intense cpu work
      res.write(`handled by: ${pid} \n`);
      res.end(`users in DB: ${userCount.usersInDB}`);
})

server.listen(8000,()=> console.log(`Started process: ${pid} ...`));

process.on('message',(msg)=> {
    userCount = msg;
});