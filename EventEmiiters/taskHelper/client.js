const Emitter = require('events');
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const client = new Emitter();
const server = require('./server')(client);

server.on('response',response => {
    console.clear();
    //console.log(response);
    //console.log('>');
    process.stdout.write(response);
    process.stdout.write('\n> ');
})

let command, args ;
rl.on('line',(input)=> {
    [command, ...args] = input.split(' ');
    client.emit('command',command,args);
});