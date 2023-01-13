const {Writable} = require('stream');

let outStream = new Writable({
    write(chunck,encoding,callback){
        console.log(chunck.toString());
        callback();
    }
})
 process.stdin.pipe(outStream);
//process.stdin.pipe(process.stdout);
