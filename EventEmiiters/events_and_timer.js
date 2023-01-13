var events = require('events'),
emitter = new events.EventEmitter();

function doATask(status) {
    if (status === 'success') {
        emitter.emit('taskSuccess'); // Specific event
    } else if (status === 'fail') {
        emitter.emit('taskFail');
    }
}

// Configure listeners and callback functions
emitter.on('taskSuccess', function() {
    console.log('task success!');
});

emitter.on('taskFail', function() {
    console.log('task fail');
});

// call task with success status
setTimeout(doATask, 500, 'success');
// set task to fail
setTimeout(doATask, 1000, 'fail');