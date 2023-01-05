/**
* Writing files
*/
var fs = require('fs');
//initial write
fs.writeFile('write.txt', 'This is the contents!', function(err) {
    if (err) throw err;
    console.log('huzzah');
});
try {
    fs.writeFileSync('./doesnotexist/newfile.txt', 'content');
} catch(err) {
    console.log('unable to create a file in a non existent sub directory');
    console.log(err);
}
//appending
fs.appendFile('write.txt', 'More content', function(err) {
    if (err) throw err;
    console.log('appended');
});
var ws = fs.createWriteStream('write.txt');
ws.write('new content\r\n', function() {
    console.log('write stream hath written.');
});