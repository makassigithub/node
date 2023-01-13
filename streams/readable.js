const {Readable} = require('stream');

/*  
    const inStream = new Readable();
    inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    inStream.push(null) // Signal that the reading is finished. 
*/

const inStream = new Readable({
    read(size){
        setTimeout(() => {
            this.push(String.fromCharCode(this.currentCharCode++));
            if(this.currentCharCode > 90){
                this.push(null);
            }
        }, 100);
    }
});

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);

process.on('exit',()=>{
    console.log('\n\nCurrent charCode is: ', inStream.currentCharCode);
});

process.stdout.on('error',process.exit);
