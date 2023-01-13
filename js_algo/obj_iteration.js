//A good habit to check if the property is not herited
//Before printing
for (var property in object) {
    if (object.hasOwnProperty(property)) {
        // do stuff
    }
}

//MDN shortcut
for (variable in object) { ...
// do stuff
}

// MDN with ES6
var obj = {a: 1, b: 2, c: 3};  
for (var prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

//Object.keys(obj) => an array of obj properties
Object.keys(obj).forEach(function(key,index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object 
});

//With ES6
Object.keys(obj).map(e => console.log(`key=${e}  value=${obj[e]}`));
