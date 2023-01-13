var name = 'Brahima';
var age = 34;

function  changeName(){
//This function changes 'name' in global scope
//which is very dangerous
   name += 'ba';  
   console.log(name);
}

function scopeAge() {
   var age = 43;
   console.log(age);
   age = age+1;
   console.log(age);
}

changeName();
scopeAge();

console.log('global:' ,age);
console.log('global:' ,name);