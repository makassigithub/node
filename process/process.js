console.log('process: ', process);
console.log('argv0: '+process.argv0);
console.log('argv[0]: '+process.argv[0]);
console.log('argv[1]: '+process.argv[1]);
console.log('argv[2]: '+process.argv[2]);

var args = process.argv.splice(2);
console.log(args);