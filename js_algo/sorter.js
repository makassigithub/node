
//Insertion sorting
function sort (data){
    console.log('initial: '+ data);
      for( let j = 1; j < data.length; j++)
      {   
            let key = data[j];
            let i = j-1;
            while( i >= 0 && data[i]> key)
            {
                data[i+1] = data[i];
                console.log('i:'+i+'j:'+j +'/data[i+1] = data[i]::'+data);
                i--;
            }
            console.log('-----------------------------');
            data[i+1] = key;
            console.log('data[i+1] = key:'+data);
            
      }
      
      return data;

}

const myData = [3,2,1];

console.log('final: '+sort(myData));