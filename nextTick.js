const fs = require('fs');

function fileSize(fileName,cb){
  if(typeof fileName !== 'string'){
   /* 
    * This will make fileSize a synchronous function
    * Then the Hello! will not be printed.
    *
    * return cb(new TypeError('fileName must be a string'));
    * 
    * */

  /* Keep fileSize async by using process.nextTick to execute the cb after
   The run to completion
   * */ 

    return process.nextTick(cb, new TypeError('fileName msut be a string'));
  };

  fs.stat(fileName, function(err, stats){
      if(err){
         return cb(err)
      }
      
      return cb(null,stats.size);
  });
}


fileSize(__filename, function(err, size){
   if(err){
	throw err;
   }
   
   console.log(`The size of file Byte is: ${size}`);
})

console.log('Hello!');
