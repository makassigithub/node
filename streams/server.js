const fs = require('fs');

const server = require('http').createServer();

server.on('request',(req,res)=>{
   /*  fs.readFile('./big_file',(err,data)=>{
        if(err) throw err;
        res.end(data);
    }) */

    const fileStream = fs.createReadStream('./big_file');
    fileStream.pipe(res);
})

server.listen(8000,()=>console.log('serving...'));
