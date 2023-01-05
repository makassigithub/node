"use strict";
var name = 'Brahima';
console.log('name starts with "b": ', name.startsWith('b'));
console.log('name starts with "B": ', name.startsWith('b'.toUpperCase()));
console.log('name ends with "a": ', name.endsWith('a'));
console.log('name contains "h": ', name.includes('h'));
var newName = name.repeat(2);
console.log(newName);
console.log(("my variables are " + name + " and " + newName));
