//Arrow function are Anonymeuos functions

//With no parameter we must use the parenthesis or underscore
//and no return keyword if not a block function body
let houseOwner1 = () => "Brahima";
let houseOwner2 = _ => "Salif";
console.log(houseOwner1()); //Expect Brahima
console.log(houseOwner2()); //Expect Salif

//With one argument we may or may not use parenthesis
let square1 = (x) => x*x;
let square2 = x => x*x;
console.log(square1(5)===square2(5)); //Expect true

//must use parenthesis if more than parameters
let divide = (x,y) => x/y;
console.log(divide(10,2)); //Expect 5

//Must use curly braces id using a block function body
let doWork = (arg) => {
    if (typeof arg ==="object") {
        console.log(arg.join(" and "));
    }else{
        console.log("unknow type");
    }
};

doWork([1,2,3]);//Expect 1 and 2 and 3

//Must use a return keyWord for block function bodies

let compare = (x,y) => {
    let res = x>y?"x-y is positive":"x-y is negative";
    return res;
};

console.log(compare(2,5));

//ES6 introduced enhanced object literals
let name = "Brahima";
let info = {name,age:34,country:"BFA"};
console.log(info);

//Arrow function bind "this" to the scope where it is created
//Then cannot be used in Constructor functions in ES6
let calculation = {
    initialValue:2,
    multiply: function(x){
        console.log('initialvalue: ',this.initialValue);
        return this.initialValue*x; // only works with ES5
    },
    soustract: function(n){
        return this.initialValue-n;
    },
    //Doesn't work bcause this is not bound to the object
    divid: (a) => this.initialValue/a 
};

console.log(calculation.initialValue);//2
console.log(calculation.multiply(5));//10
console.log(calculation.soustract(2));//0
console.log(calculation.divid(5));//NAN


