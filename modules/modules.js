/*console.log("The modules object: ");
console.log(module);

console.log("File level export object: ");
console.log(exports);

module.exports.hello = true;
exports = {exports:{hello: false}}; */

//Will be exported
//module.exports.a = 'a';
//module.exports.b = 'b';
//exports.c = 'c'; // shortcut for module.exports

//Will not be exported
exports = {d:'d'};
//Unless you do this
module.exports = exports;

