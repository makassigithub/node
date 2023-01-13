

console.log('1er cycle:',1);

setTimeout( function(){
    console.log('2eme cycle:',2);
},0);

console.log('1er cycle:',3);

setTimeout( function(){
    setTimeout( function(){
        console.log('3eme cycle:',4);
    },0);
},0)

console.log('1er cycle:',5);
