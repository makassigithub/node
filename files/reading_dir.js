//How to play with file system using nodejs built-in file system

var fs = require('fs');
var out;

console.log('currenr directory: ',__dirname);
//read current directory asynchronously
fs.realpath(__dirname, function(err, /* [cache], */ path) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('realpath async: ' + path);
});

//read current directory asynchronously
out = fs.realpathSync(__dirname);
console.log('real path sync: ' + out);

//Reading directory statistics
fs.stat(__dirname, function(err, stat) {
    if (err) return;
    var isDir = false;
    fs.readdir(__dirname, function(err, contents) {
        if (err) return;
        contents.forEach(function(f) {
            console.log('contents: ' + f);
    });
    });
});
//get list of what’s in the directory
out = fs.readdirSync(__dirname);
console.log('readdir sync: ' + out);