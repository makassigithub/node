const path = require("path");
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const stat = util.promisify(fs.stat);
     
const testFilePath = path.resolve(process.env.HOME,'.bashrc');
console.log("Read from process: ", testFilePath);

fs.readFile(__filename,(err,streamData)=>{
	console.log("inside callback: ", streamData);
})

stat('.').then(stats => {
	console.log("inside promise pattern: ", stats);
});

(async ()=>{
	const data = await readFile(__filename);
	console.log('inside async/await pattern: '+ data);
})()
