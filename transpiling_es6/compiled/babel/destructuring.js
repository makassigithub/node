"use strict";

//CASE OF ARRAYS

var houses = [{ duplex: {
                      number: 5,
                      location: "Magog"
           } }, { condo: {
                      number: 3,
                      location: "Brompton"
           } }, { appartment: {
                      number: 34,
                      location: "Merry"
           } }];

//Positional destructing of an arrays
var dups = houses[0],
    conds = houses[1],
    apparts = houses[2];

console.log(dups); //{ duplex: { number: 5, location: 'Magog' } }

//We may point to only one element in ths array
//cast the first element of the array into dps
var dps = houses[0];

console.log(dps); //{ duplex: { number: 5, location: 'Magog' } 

// Can skip elements (elision)
var index2 = houses[1];

console.log(index2); //{ condo: { number: 3, location: 'Brompton' } }

//CASE OF OBJECTS
var places = {
           duplex: {
                      number: 5,
                      location: "Magog"
           },
           condo: {
                      number: 3,
                      location: "Brompton"
           },
           appartment: {
                      number: 34,
                      location: "Merry"
           }
};

//Destructurin all from the objects
//Work as if are copying objetc properties into new properties
var dp = places.duplex,
    cd = places.condo,
    apt = places.appartment;

console.log(dp); //{ number: 5, location: 'Magog' }

//We can also use the shorthands if we want to use the same prps
var duplex = places.duplex;

console.log(duplex); //{ number: 5, location: 'Magog' }