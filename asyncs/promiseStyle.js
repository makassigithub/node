const fs = require('fs');

const countOdd = function(file){
	return new Promise(function(resolve, reject){
        	fs.readFile(file,function(err, data){
                  if(err){
                    return reject(err);
	        }
	   
	const lines = data.toString().trim().split('\n');
         return resolve(lines);
	   
	})
    });	
}


countOdd('./data.js')
    .then(function(lines){
        lines.map(Number).filter(function(num){
           if(num % 2 !== 0){
              console.log(num);
            }  
        })
     })
     .catch(function(err){
         throw err;
     })
