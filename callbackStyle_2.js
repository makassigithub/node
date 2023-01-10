const fs = require('fs');

function even(file,cb){
    fs.readFile(file,function(err,data){
        if(err) return cb(err);
        const lines = data.toString().trim().split('\n');
        cb(null,lines);
    })
}


even('./data.js',function(err, lines){

    if(err) throw err;

    lines.map(Number).filter(function(item){
        if(item % 2 === 0) console.log(item);
    })
})