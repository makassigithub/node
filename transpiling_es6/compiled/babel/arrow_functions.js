"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//Arrow function are Anonymeuos functions

//With no parameter we must use the parenthesis or underscore
//and no return keyword if not a block function body
var houseOwner1 = function houseOwner1() {
    return "Brahima";
};
var houseOwner2 = function houseOwner2(_) {
    return "Salif";
};
console.log(houseOwner1()); //Expect Brahima
console.log(houseOwner2()); //Expect Salif

//With one argument we may or may not use parenthesis
var square1 = function square1(x) {
    return x * x;
};
var square2 = function square2(x) {
    return x * x;
};
console.log(square1(5) === square2(5)); //Expect true

//must use parenthesis if more than parameters
var divide = function divide(x, y) {
    return x / y;
};
console.log(divide(10, 2)); //Expect 5

//Must use curly braces id using a block function body
var doWork = function doWork(arg) {
    if ((typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "object") {
        console.log(arg.join(" and "));
    } else {
        console.log("unknow type");
    }
};

doWork([1, 2, 3]); //Expect 1 and 2 and 3

//Must use a return keyWord for block function bodies

var compare = function compare(x, y) {
    var res = x > y ? "x-y is positive" : "x-y is negative";
    return res;
};

console.log(compare(2, 5));

//ES6 introduced enhanced object literals
var name = "Brahima";
var info = { name: name, age: 34, country: "BFA" };
console.log(info);

//Arrow function bind "this" to the scope where it is created
//Then cannot be used in Constructor functions in ES6
var calculation = {
    initialValue: 2,
    multiply: function multiply(x) {
        console.log('initialvalue: ', this.initialValue);
        return this.initialValue * x; // only works with ES5
    },
    soustract: function soustract(n) {
        return this.initialValue - n;
    },
    //Doesn't work bcause this is not bound to the object
    divid: function divid(a) {
        return undefined.initialValue / a;
    }
};

console.log(calculation.initialValue); //2
console.log(calculation.multiply(5)); //10
console.log(calculation.soustract(2)); //0
console.log(calculation.divid(5)); //NAN