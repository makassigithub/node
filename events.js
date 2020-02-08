const EventEmitter = require('events');
global.counter = 0; // Just for demo, do not do that; accessible to all other modules;

const eventEmitter = new EventEmitter();
const timerID = setInterval(()=>{
	counter++;
	eventEmitter.emit('salut',{title: "Hi"});
	
},2000);

eventEmitter.on('salut',data=>{
	console.log('Just emitted: ',data.title);
	if(counter == 5) clearInterval(timerID);
});
