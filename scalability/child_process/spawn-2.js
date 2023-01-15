const { spawn } = require('child_process');

//Demo: child.stdin
const child2  = spawn('wc');
process.stdin.pipe(child2.stdin);
child2.stdout.on('data', (data) => {
    console.log(`child2 stdout: \n${data}`)
});

// node spawn-2.js
// enter words
// press Ctrl+D