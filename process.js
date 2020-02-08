process.on('exit',code=> {
  console.log(`process exiting with code ${code}`);
})

process.on('uncaughtException', excep => {
	// because of this implementation node will keep running
	// that's why we must force exit
	console.log('ohh! it is broken');
	console.log(excep);

	process.exit(1);
});


// Keep the event loop busy

process.stdin.resume();

// simulate a error
console.log(toto);

