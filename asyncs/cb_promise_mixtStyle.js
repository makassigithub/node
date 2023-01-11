const fs = require('fs');

const countOdd = function(file,cb=()=> {}){
	return new Promise(function(resolve, reject){
        	fs.readFile(file,function(err, data){
                  if(err){
	           
                    reject(err);
	            return cb(err);
	        }
	   
	const lines = data.toString().trim().split('\n');
         
        resolve(lines);
	return cb(null,lines);
	   
	})
    });	
}


countOdd('./data.js')
    .then(function(lines){
	console.log('succeed with promise');
        lines.map(Number).filter(function(num){
           if(num % 2 !== 0){
            console.log(num);
           }
        })
    })
    .catch(function(err){
         throw err;
    })

countOdd('./data.js',function(err,lines){

	if(err){
           throw error;
	}
	console.log('succeed with callack');
	
       lines.map(Number).filter(function(num){
       if(num % 2 !== 0){
          console.log(num);
       }
    })
});

