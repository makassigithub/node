console.log("FOR LOOP");
// var creates a single binding
console.log('Using var inside a loop');
const my_array = [];
for(var i = 0; i< 5;i++){
    my_array.push(function(){
        return i;
    })
}
my_array.map(function(x){
  console.log(x()); //[5,5,5,5,5]
})
// 'let' would solve this probleme.
console.log('\nUsing let inside a loop');
const my_array2 = []
for(let i = 0; i< 5;i++){
    my_array2.push(function(){
        return i;
    })
}
my_array2.map(function(x){
  console.log(x()); //[0,1,2,3,4]
})

// 'const' works like var, but will not be reassigned
// i++ will throw an error

console.log("FOR-IN, FOR-OF");
// var still creates a single binding
my_array3 = []
for(var i of [0,1,2,3,4,]){
my_array3.push(() => i);
}
my_array3.map(x => console.log(x())); // [4,4,4,4,4]

//const creates one immutable binding per iteration
// same for let, but the binding are mutable
my_array4 = []
for(const i of [1,2,3,4,]){
my_array4.push(() => i);
}
my_array4.map(x => console.log(x())); // [0,1,2,3,4]
