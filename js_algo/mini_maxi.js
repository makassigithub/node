function max_min (list) {
    // initiating max and min
    var max = list[0];
    var min = list[0];
    
    for(let i = 0; i < list.length; i++){
        if(list[i] > max){
            max = list[i];
        }
        if (list[i]< min){
            min = list[i];
        }
    }

    return [max,min];

}

data = [1,2,90,-1,34,0]

var result = max_min (data);
console.log('max:',result[0])
console.log('min:',result[1])