import Student from './classes';

class Teacher extends Student {
    constructor(name, age,country,course){
        super(name,age,country);
        this.course = course;
    }
    
    //Override superClass's equal
    equals(anotherTeacher){
        return(
            this.name===anotherTeacher.name &&
            this.course===anotherTeacher.course
        );
    }
    
    //Subclass can define iot"s own method
    isOld(){
        return this.age>50;
    }
    
}

let teacher1 = new Teacher('Toufik',53,'Algeria','Java');
let teacher2 = new Teacher('Alban',30,'Ivory Coast','PHP');
let teacher3 = new Teacher('Toufik',50,'Canada','Java');

//If is ommit the last param, it"s set to null in the object.
let teacher4 = new Teacher('Brahima',50,'BurKina');


//The subclass will access the toString() from the superClass
console.log('teacher4: ',teacher4.toString());
console.log(teacher4);

//Subclass inherits both instance and static methods.
console.log('At lest one teacher is created: ', Teacher.isCreated());//true;

//This return true base on the overriden version of equals
console.log('teacher1 === teacher3',teacher1.equals(teacher3));

            
console.log('Alban is old', teacher2.isOld());
console.log('Toufik is old', teacher1.isOld());
