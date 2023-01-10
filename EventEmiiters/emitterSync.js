const Emitter  = require('events');

class ExecuteAndLog extends Emitter {
    execute(taskFunc){
        this.emit('begin');
        taskFunc();
        this.emit('end');
    }
}

const executor = new ExecuteAndLog();
      executor.on('begin',()=> console.log('*** task execution starting ***'));
      executor.on('end',()=> console.log('*** task execution ended ***'));
      executor.execute(()=> console.log('Task is executing.....'));
      