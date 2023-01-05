let name  = 'Brahima';

//New String methods
console.log('name starts with "b": ',name.startsWith('b'));
console.log('name starts with "B": ',name.startsWith('b'.toUpperCase()));
console.log('name ends with "a": ',name.endsWith('a'));
console.log('name contains "h": ',name.includes('h'));

//replicate a string
let newName = name.repeat(2);
console.log(newName);

//backtiks for string litterals, can define multilines
console.log(`my variables are ${name} and ${newName}`);