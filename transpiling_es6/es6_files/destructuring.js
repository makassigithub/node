//CASE OF ARRAYS

let houses = [{duplex: {
                        number:5,
                        location:"Magog"
             }},
             {condo: {
                        number:3,
                        location:"Brompton"
             }},
             {appartment: {
                        number:34,
                        location:"Merry"
             }},
             ];

//Positional destructing of an arrays
let [dups,conds,apparts] = houses;
console.log(dups); //{ duplex: { number: 5, location: 'Magog' } }

//We may point to only one element in ths array
//cast the first element of the array into dps
let[dps] = houses; 
console.log(dps);//{ duplex: { number: 5, location: 'Magog' } 

// Can skip elements (elision)
let [,index2,] = houses;
console.log(index2); //{ condo: { number: 3, location: 'Brompton' } }

//CASE OF OBJECTS
let places = {
               duplex: {
                        number:5,
                        location:"Magog"
                       },
                condo: {
                        number:3,
                        location:"Brompton"
                       }, 
           appartment: {
                        number:34,
                        location:"Merry"
                        },
                       };
                       
//Destructurin all from the objects
//Work as if are copying objetc properties into new properties
let { duplex:dp, condo:cd, appartment:apt} = places;
console.log(dp);//{ number: 5, location: 'Magog' }

//We can also use the shorthands if we want to use the same prps
let {duplex} = places;
console.log(duplex);//{ number: 5, location: 'Magog' }
 
