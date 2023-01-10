
const fs  = require('fs');

const string = "demarré";
const buffer = Buffer.from("demarré");

console.log(string, string.length);
console.log(buffer, buffer.length);

const conversionMap = {
    '88':'65',
    '89':'66',
    '90':'67',
}

fs.readFile(__filename,(err,buffer) => {
    const tag = buffer.slice(-4,-1);
    console.log("TAG:----",tag,"----TAG");
    for(let i=0; i<tag.length; i++){
        tag[i] = conversionMap[tag[i]];
      
    }

    console.log(buffer.toString());
})