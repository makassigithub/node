
const PORT = 8000;
const server = require('net').createServer();

let sockets = {};
let counter = 0;

function timeStamp(){
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

server.on('connection',socket =>{
    socket.id = counter++;
    socket.write(`Please enter your name: `);
   
   socket.on('data',data => {

    if(!sockets[socket.id]){
        socket.name = data.toString().trim();
        socket.write(`Welcome ${socket.name}!\n`);
        sockets[socket.id] = socket;
        return;
    }

    Object.entries(sockets).forEach(([key,cs]) =>{
        if(socket.id == key) return;
        cs.write(`${socket.name} ${timeStamp()}:    `);
        cs.write(`${data}`);
    })
   })

   socket.on('end',()=> {
    delete sockets[socket.id];
    console.log('client disconnected');
   });
});

server.listen(8000,()=> console.log(`Server listening to ${PORT}`));
