const { spawn } = require('child_process');

//const child = spawn('pwd'); 
//const child = spawn('find',['.','-type','f']); // triggers child,stderr

/*
    Some child objects: 
    child.stdin: writable stream / opposite of parent type
    child.sdtout - child.stderr : readable stream / opposite of parent type

    Some child events: 
    disconnect: triggered when parent_process calls child.disconnect
    error: when error occurs on the child process
    message: triggered when when parent sends data to child.
    close: when  child.sdtout/child.stderr/child.stdout are closed.

*/

const child = spawn('find',['.','-type','f']);

// processes implements EventEmitter
child.on('exit',(code,signal)=>{
    console.log(`Child process exited with code: ${code} and signal: ${signal}`);
});

child.stdout.on('data',(data)=>console.log(`child stdout: \n${data}`));
child.stderr.on('data',(data)=>console.log(`child stderr: \n${data}`));



