process.on('message',(message)=>{
    console.log('message form parent: ',message);
})

let counter = 0;

setInterval(() => {
    if(counter <= 10){
        process.send({counter: counter++});
    } else {
        process.exit(0);
    }
}, 1000);
