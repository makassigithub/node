class House {
    
    //Use _propname when we will be using getters and setters
    //using this.location instead of this_location would throw
    //Maximum call stack size exceeded exception
    
    constructor(location){
        this._location = location;
    }
    
    get location(){
        return this._location;
    }
    
    set location(loc){
      this._location = loc;
    }
}

let house1 = new House('Miami');

//Right now the house1 is
console.log('house1: ',house1);
console.log('house1: ',house1.location);

//Override location property
house1.location = 'Montreal';
console.log('New location: ', house1.location);

//Without setter we cannot reset an instamce property


