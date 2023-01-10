const Emitter  = require('events');
const fs  = require('fs');

class ExecuteAndLog extends Emitter {
    execute(asyncFunc, ...args){
        console.time('execute');

        asyncFunc(...args,(err,data)=>{
            if(err){
               return  this.emit('error',err);
            }

            this.emit('data',data);
        });
        console.timeEnd('execute');
    }
}

const executor = new ExecuteAndLog();
      
      executor.on('data', data => console.log(`Length: ${data.length}`))
      executor.prependListener('data',data=> console.log(`Characters: ${data.toString().length}`));
      process.once('uncaughtException',err=>{
        console.log('uncaughtException thrown', err);
        //Do some cleaUp task here
        process.exit(1);
      })
      //executor.on('error', console.error);
      executor.execute(fs.readFile,__filename);
     // executor.execute(fs.readFile,'');
      