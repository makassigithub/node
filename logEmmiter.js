const EventEmitter = require('events');

class WithLog extends EventEmitter {
  
  execute(task){
     console.log('before executing');
     this.emit('begin');
     task();
     this.emit('end');
     console.log('after execution');
  }
}

const withLog = new WithLog();
      withLog.on('begin',()=> console.log('*****Begining execution*****'));
      withLog.on('end',()=> console.log('*****Ending execution*****'));
   
      withLog.execute(()=>console.log('*****executing task*****'));


