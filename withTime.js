const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
    execute(asyncFunc, ...args){
        console.log('---> start executing');
        asyncFunc(...args,(err, data)=>{
           if(err){
              return this.emit('error', err);
	 }
         this.emit('data',data);
	 console.log('done executing -->');
      });

    }
}

const withTime = new WithTime();
      withTime.on('data',data => {
          console.log(`The data length is ${data.length}`);
});

//Listen to error to avoid craches
     //withTime.on('error',console.error);

//Or more specificly the uncaughtError event on the process itself
//but do not forget to exit to stop the process
     process.once('uncaughtException',err => {
         console.error(err);
          process.exit(1);
     });

withTime.execute(fs.readFile, __filename);
withTime.execute(fs.readFile,'');
