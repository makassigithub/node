//ES6 OOP is implemented through classes

 export default class Student{

  //Student object constructor
  constructor(name, age,country) {
    this.name = name;
    this.age = age;
    this.country  = country;
    Student.Count++ ;
  }
  
  //class method
  static isCreated(){
    return Student.Count>0;
  }
  
  //This is not a standard Js method
  equals(student){
    return (
        student.name === this.name &&
        student.age === this.age &&
        student.country === this.country 
    );
  }
  
  //instance method
  toString(){
    return (this.name +" is "+this.age +" and from "+ this.country );
  }
}

//Class property
Student.Count = 0;

let student1 = new Student("Brahim",34,"CI");
let student2 = new Student("Salif",37,"Brazza");
let student3 = new Student("Brahim",34,"CI");

console.log("A student object is created: ",Student.isCreated());
console.log("student2 info: ",student2.toString());
console.log("student1 === student3: ",student1.equals(student3));
console.log("student1 === student2: ",student1.equals(student2));