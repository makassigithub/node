const fs = require('fs');

const countOdd = function(file,cb){
	fs.readFile(file,function(err, data){
           if(err){
             return cb(err);
	   }
	   
	const lines = data.toString().trim().split('\n');
         return cb(null,lines);
	   
	})
}

countOdd('./data.js',function(err, lines){

      if(err) {
	 throw err;
      }

     lines.map(Number).filter(function(num){
        if(num % 2 !== 0) {
         console.log(num);
	}
     })
})
