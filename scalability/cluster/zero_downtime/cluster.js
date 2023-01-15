const os = require('os');
const cluster  = require('cluster');

if(cluster.isMaster){
    const cpus = os.cpus().length;
    console.log(`Forking for ${cpus} CPUs`);
    
    for(let i = 0; i < cpus; i++){
          cluster.fork();
    }
    cluster.on('exit',(worker,code,signal)=>{
        if(code !== 0 && !worker.exitedAfaterDisconnect){
            console.log(`Worker ${worker.is} crashed`);
            console.log('Starting a new worker...');
            cluster.fork();
            console.log(`New number of workers: ${Object.keys(cluster.workers).length}`)
        }
    })

}else {
   require('./server');
}

