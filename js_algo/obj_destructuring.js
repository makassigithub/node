//DESTRURING ASSIGNEMENT IN ARRAYS:

'use strict'
var house = {
                location:'Beauregard',
                price:800,
                occupants : ['BT','CT','HT']
            };
// The left-hand side to be assigned is a block not an object
// assignement is based on names based on their names
var {location,price,occupants} = house;
console.log('location: ',location, 'price: ', price, 'occupants: ',occupants);

// If all the properties will not be assigned:
var {occupants} = house
console.log('occupants: ',occupants);

/*assigning object:
    Without declaration, the ( .. ) around the assignment statement is required  
    Because the left-hand side is not considered as an object but a block
*/
 var e,f ; // This semi-colon is very important otherwhise the next line can be considered as a func param
({e,f} = {e:'i am', f:'happy'});
console.log('e: ', e,'----','f:',f);

var {g} = {e:'i am', f:'happy',g:'today'};
console.log('g', g);

var h;
//{h} = {e:'i am', f:'happy',g:'today',h:'too'};
       ({h} = {e:'i am', f:'happy',g:'today',h:'too'});
console.log('h: ', h);


//Default vaules wiht object
var friend = {name:'mani'}; 
var {name = 'hamed', age= 45} = friend; // variables are assigned with default values in the block scope
console.log('name: ',name,'----','age: ',age);


// Default value using functionss
function describeObject(data) {
    
   data = data === null ? {} : data
   var server = data.url === 'undefined' ? 'http://standard.com' : data.url;
   var host_location = data.host === 'undefined' ? 'USA': data.host;
   var payload = data.payload === 'undefined' ? [1,2,3] : data.payload;
    
  console.log(server +' is at ' + host_location +  ' and contains: '+ payload);
}

describeObject(null);
describeObject({url:'http://makassi.com', host: 'germany', payload:['data','is','here']}); //ES5
//describeObject({url:'http://makassi.com', host: 'germany', payload:['data','is','here']} = {}); //6

/****************************************************************************************/
//Unpacking fields (property name) from objects passed as function parameter
function findId({id}){
    console.log('id: ', id);
    return id;
}

var testObject = {id:'#2', name: 'John Doe'};
findId(testObject);


var testObject2 = {id:'#2', name: 'John Doe'};

console.log(testObject == testObject2); //false

var testObject3 = Object.assign(testObject);
console.log(testObject == testObject3);// true

var testObject4 = testObject;
console.log(testObject == testObject4);// true


/****************************************************************************************/
function whois({displayName, fullName: {firstName: name}}) {
  console.log(displayName + ' is ' + name);
}

var user = { 
  id: 42, 
  displayName: 'jdoe',
  fullName: { 
      firstName: 'John',
      lastName: 'Doe'
  }
};

whois(user); // "jdoe is John"


//Object properties are also pattern, the can be nested.

const obj = {families:{traore:10}};
const {families:{traore:size}} = obj;
console.log('family_size: ',size);

/******************************************************************************************/
/*Object patterns coerce source values to objects calling toObject() on them, instead of Object()
 Object() converts null and undefined to {} whilst toObject throws type error
*/
const {length: lgth} = 'abc';
console.log("length of 'abc': ",lgth);

const {toString: str} = 123;
console.log("toString on 123 returns: ",str);
/******************************************************************************************/
//Array patterns work with iterables and Array sources are destructured using iterator

// Strings are iterable
const [a,...b] = 'abcdef';
console.log('a: ', a ,'***', 'b: ',b);

const [x] = [true,false];
console.log('x: ',x)

/******************************************************************************************/
//Default values are computed on demand
/*
const {prop: y=someFunc()} = someValue;
is equivalent to:
let y;
if (someValue.prop === undefined) {
y = someFunc();
} else {
y = someValue.prop; 
}
*/

function log(x){
    console.log(x);
    return 'YES';
}

 const [ a_ =log('hi')] = []; // log() is called
 const [ b_=log('salut')] = [100] //log() is not called
 
console .log('a_ : ',a_);
console.log('b_ : ',b_);