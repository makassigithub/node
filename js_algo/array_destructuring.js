"use strict";

//DESTRURING ASSIGNEMENT IN ARRAYS:

/*Assigning form arrays is done based on the position
for assigning primitives variables form arrays,
Assignments are separated from declaration
we can put them into an array */

var a, b;
[a, b] = [2, 3, 4, 5];
console.log(a, b);

var c, d, rest;
[c, d, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("c: ", c);
console.log("d: ", d);
console.log("rest: ", rest);

//Parsing an array returned from a function
var firstName, lastName, age;
function getCredentials() {
  return ["Brahima", "Traore", 34];
}
[firstName, lastName, age] = getCredentials();
console.log("fn:", firstName, "----", "ln:", lastName, "age: ", "----", age);

// ignoring some members
//The left-hand side(to be assigned is not an array),
//but a block tobe use when assigning form arrays
var age2;
[, , age2] = getCredentials();
console.log("age2: ", age2);

var i, j;
[i = 33, j = 15] = [1];
console.log("i: ", i, "----", "j: ", j);

//assigning object
var e, f;
({ e, f } = { e: "i am", f: "happy" });
console.log("e: ", e);
console.log("f: ", f);

//You can also destructure in a for-of loop:
const arr = ["a", "b"];
for (const [index, element] of arr.entries()) {
  console.log(index, element);
}
