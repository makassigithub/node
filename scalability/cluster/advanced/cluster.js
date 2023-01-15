const os = require('os');
const cluster = require('cluster');

const computeNumberOfUsersInDB = () => {
    this.count = this.count || 5;
    this.count = this.count * this.count;
    return this.count;
}

if(cluster.isMaster){
   cpus = os.cpus().length;
   for(let i = 0; i< cpus; i++){
        cluster.fork();
   }

   const updateWorkers = () => {
        const usersInDB = computeNumberOfUsersInDB();
        Object.values(cluster.workers).forEach(worker =>{
            worker.send({usersInDB});
        })
    }

    updateWorkers();
    setInterval(updateWorkers,10000);

} else {
  require('./server.js');
}