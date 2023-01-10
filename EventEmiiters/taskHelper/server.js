const Emitter = require('events');

class Server extends Emitter {
    constructor(client){
        super();
        this.tasks = {};
        this.taskId = 1;

        process.nextTick(()=>this.emit('response','please wrtie a commad from the list: '));
        client.on('command',(command,args)=> {
            switch(command){
                case 'help':
                case 'add':
                case 'ls':
                case 'delete':
                    this[command](args);
                    break;
                default:
                    this.emit('response','unknown...');
                    break;          
            }
        })
    }

    taskStringList(){
       return  Object.keys(this.tasks).map(key => 
        `${key}: ${this.tasks[key]}`
        ).join('\n');
    }

    help(){
        this.emit('response',`Available commands: 
        add,
        ls,
        edit
        `);
    }

    add(args){
        this.tasks[this.taskId] =  args.join(' ');
        this.emit('response',`Added Task: ${this.tasks[this.taskId]}`);
        ++this.taskId;
    }

    ls(){
        this.emit('response',
        `List of Tasks: 
            ${this.taskStringList()}
        `);
    }

    delete(args){
        delete this.tasks[args[0]]
        this.emit('response',`Deleted taskId: ${args[0]}`);
    }
}

module.exports = (client) => new Server(client);