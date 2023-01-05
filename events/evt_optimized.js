/**
* Custom Events
*/
var events = require('events'),
    emitter = new events.EventEmitter();

function doATask(status) {
    // This event passes arguments to detail status
    emitter.emit('taskComplete', 'complete', status);
}
// register listener for task complete
emitter.on('taskComplete', function(type, status) {
    console.log('the task is ', type, ' with status ', status);
});

// call task with success status
setTimeout(doATask, 500, 'success');
// set task to fail
setTimeout(doATask, 1000, 'fail');