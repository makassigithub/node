process.on('message',(msg)=>{
    if(msg=='start'){
        const sum = compute();
        process.send(sum);
    }
})

function compute(){
    let sum = 0;
    for(let i = 0; i< 1e10 ; i++){
        sum += i;
    } 
    return sum;
}