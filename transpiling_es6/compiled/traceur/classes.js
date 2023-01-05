"use strict";
Object.defineProperties(module.exports, {
  __esModule: {value: true},
  default: {
    enumerable: true,
    get: function() {
      return Student;
    }
  }
});
var Student = function() {
  function Student(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
    Student.Count++;
  }
  return ($traceurRuntime.createClass)(Student, {
    equals: function(student) {
      return (student.name === this.name && student.age === this.age && student.country === this.country);
    },
    toString: function() {
      return (this.name + " is " + this.age + " and from " + this.country);
    }
  }, {isCreated: function() {
      return Student.Count > 0;
    }});
}();
Student.Count = 0;
var student1 = new Student("Brahim", 34, "CI");
var student2 = new Student("Salif", 37, "Brazza");
var student3 = new Student("Brahim", 34, "CI");
console.log("A student object is created: ", Student.isCreated());
console.log("student2 info: ", student2.toString());
console.log("student1 === student3: ", student1.equals(student3));
console.log("student1 === student2: ", student1.equals(student2));
