const {fork} = require('child_process');

const forked = fork('child.js');

forked.on('message',(message)=>{
    console.log('message from child: ', message);
})

forked.send('hello world');

forked.on('exit',()=> console.log('just exited...'))

