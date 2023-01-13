function areEquals(obj1,obj2) {
    //var AreEqual = true;
    if (typeof obj1 === 'object' && typeof obj2  && !Array.isArray(obj1)){
        if (Object.keys(obj1).length !== Object.keys(obj2).length){
            return false;
        }
        for (var field in obj1){
            if (!obj2[field]){
                return false;
            }else if (obj2[field] && obj2[field] !== obj1[field]){
                return false;
            }
        }
        return true;
    } else if (typeof obj1 === typeof obj2 && Array.isArray(obj1)){
        
        if (obj1.length !== obj2.length){
            return false;
        }
        for (var i = 0; i<obj1.length;i++){
                if(obj1[i] !== obj2[i]) {
                    return false;
                }
            }
        return true;
    } 
        return false;
}
       
//Testing arrays
Object.prototype = areEquals;
 var a1 = [2,3,4,5];
 var a2 = [2,3,4,5];
 var a3 = [2,3,4,5,6]
 console.log('a1 = a2 =>'+ areEquals(a1,a2));
 console.log('a1 = a3 =>'+ areEquals(a1,a3));
//Testing objects
var o1 = {name:'Traore',age:35};
var o2 = {name:'Traore',age:35};
var o3 = {name:'Traore',age:35,alias:'BT'};
console.log('o1 = o2 =>'+ areEquals(o1,o2));
console.log('o1 = o3 =>'+ areEquals(o1,o3));