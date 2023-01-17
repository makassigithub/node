function areEqual(...args) {
    var arg_first = args[0];
    var arg_type = typeof arg_first;
    var arg_length = args.length;

    // If less than 2 args are provided
    if(arg_length < 2){
        return true;
    }
    
    //Ensure args have the same type
    for(var i=1; i<arg_length; i++){
        if(typeof args[i] !==  arg_type) {
            return false;
        }
    }

   /* IN CASE ALL args ARE OBJECTS OTHER THAN ARRAYS */
   if (arg_type === 'object' && !Array.isArray(arg_first)) {
        var nbr_field_firstArg = Object.keys(arg_first).length;
        for(var j=1; j<arg_length; j++){
            arg_j = args[j];
            var nbr_field_arg_j = Object.keys(arg_j).length;
            
             //objects must have the same number of key;
            if(nbr_field_arg_j !== nbr_field_firstArg){
                        return false;
            }

            //Objects must have the same field and values;
            for (var key in arg_first) {
                if (!arg_j.hasOwnProperty(key) || (arg_j.hasOwnProperty(key) && arg_first[key] !== arg_j[key] )){
                        return false;
                }
            }
        }
        return true;

    /* IN CASE ALL args ARE ARRAYS */
    } else if (Array.isArray(arg_first)){
        var length_firstArg = arg_first.length;
        
        //Arrays must have the same length
        for(var k=1; k<arg_length; k++){
            arg_k = args[k];
            if(arg_k.length !== length_firstArg){
                return false;
            }
            for(var l=0; l<length_firstArg; l++) {
                if(arg_k[l] !==arg_first[l] ){
                    return false;
                }
            }
        }
        return true;
    }

    /* IN CASE ALL args ARE PRIMITIVE TYPES */
    for (var m = 0; m< args.length; m++){
        if (args[m] !== arg_first){
            return false;
        }
    }

    return true;
};

//testing 0 and one argument
console.log('0 arg: '+ areEqual());
console.log('1 arg: '+ areEqual());

//Testing arrays
var a1 = [2,3,4,5];
var a2 = [2,3,4,5];
var a3 = [2,3,4,5,6];
var a4 = [2,3,4,5];

//console.log(areEquals(a1));
console.log('a1 = a2 =>'+ areEqual(a1,a2));
console.log('a1 = a3 =>'+ areEqual(a1,a3));
console.log('a1 = a2  = a3 =>'+ areEqual(a1,a2,a3));
console.log('a1 = a2  = a4 =>'+ areEqual(a1,a2,a4));

//Testing objects
var o1 = {name:'Traore',age:35};
var o2 = {name:'Traore',age:35};
var o3 = {name:'Traore',age:35,alias:'BT'};
var o4 = {name:'Traore',age:undefined};
var o5 = {name:'Traore',age:null};

console.log('o1 = o1 =>'+ areEqual(o1,o1));
console.log('o1 = o2 =>'+ areEqual(o1,o2));
console.log('o1 = o3 =>'+ areEqual(o1,o3));
console.log('o4 = o5 =>'+ areEqual(o4,o5));
console.log('2 = 2 =>'+ areEqual(2,2));

//Testion Constructor objects.
function Person(name,age) {
   this.name = name;
   this.age = age;
}

var p1 = new Person('Brahima',25);
var p2 = new Person('Brahima',25);
var p3 = new Person('Makassi',25);
console.log('p1 = p1 =>'+ areEqual(p1,p1));
console.log('p1 = p2 =>'+ areEqual(p1,p2));
console.log('p1 = p3 =>'+ areEqual(p1,p3));

function Human(name,age) {
   this.name = name;
   this.age = age;
}
var h1 = Human('Brahima',25);
console.log('p1 = h1 =>'+ areEqual(p1,h1));

//Testing primitives
console.log('2 = 2 =>'+ areEqual(2,2));
console.log('2 = "2" =>'+ areEqual(2,"2"));
console.log('toto = toto =>'+ areEqual('toto','toto'));