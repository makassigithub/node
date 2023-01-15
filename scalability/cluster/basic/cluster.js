const os  =require('os');
const cluster  = require('cluster');

if(cluster.isMaster){
    const cpus = os.cpus().length;
    console.log(`Forking for ${cpus} CPUs`);
    
    for(let i = 0; i < cpus; i++){
          cluster.fork();
    }
    //cluster has workers stored in  it
    console.dir(cluster.workers, {depth:0});
    Object.values(cluster.workers).forEach(worker => {
        worker.send(`hello worker: ${worker.id}`);
    });

}else {
   require('./server');
}