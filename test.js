const mod = require("./modules");

console.log(mod);

/*What is node module? : a wrapping function of a code in a file
That return the module.exports object
function wrapperFunction(exports,module, require,__filanme,__dirname){
	return module.exports;
}(module.exports); */

console.log("exports:");
console.log(exports);

console.log("-------------------------------------------");

console.log("module:");
console.log(module);

console.log("-------------------------------------------");
console.log("require:");
console.log(require);

console.log("-------------------------------------------");
console.log("__filename:");
console.log(__filename);

console.log("-------------------------------------------");
console.log("__dirname:");
console.log(__dirname);

