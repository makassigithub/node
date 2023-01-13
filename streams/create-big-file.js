const fs = require('fs');

let fileStream = fs.createWriteStream('./big_file');

for(let i = 0; i <1e6; i++){
    fileStream.write('this file is used to show performance of streams on serverside \n');
}

fileStream.end();