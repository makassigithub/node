"use strict";
var $__1 = (void 0);
var houseOwner1 = function() {
  return "Brahima";
};
var houseOwner2 = function(_) {
  return "Salif";
};
console.log(houseOwner1());
console.log(houseOwner2());
var square1 = function(x) {
  return x * x;
};
var square2 = function(x) {
  return x * x;
};
console.log(square1(5) === square2(5));
var divide = function(x, y) {
  return x / y;
};
console.log(divide(10, 2));
var doWork = function(arg) {
  if ((typeof arg === 'undefined' ? 'undefined' : $traceurRuntime.typeof(arg)) === "object") {
    console.log(arg.join(" and "));
  } else {
    console.log("unknow type");
  }
};
doWork([1, 2, 3]);
var compare = function(x, y) {
  var res = x > y ? "x-y is positive" : "x-y is negative";
  return res;
};
console.log(compare(2, 5));
var name = "Brahima";
var info = {
  name: name,
  age: 34,
  country: "BFA"
};
console.log(info);
var calculation = {
  initialValue: 2,
  multiply: function(x) {
    console.log('initialvalue: ', this.initialValue);
    return this.initialValue * x;
  },
  soustract: function(n) {
    return this.initialValue - n;
  },
  divid: function(a) {
    return $__1.initialValue / a;
  }
};
console.log(calculation.initialValue);
console.log(calculation.multiply(5));
console.log(calculation.soustract(2));
console.log(calculation.divid(5));
