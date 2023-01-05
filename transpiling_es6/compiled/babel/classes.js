"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//ES6 OOP is implemented through classes

var Student = function () {

  //Student object constructor
  function Student(name, age, country) {
    _classCallCheck(this, Student);

    this.name = name;
    this.age = age;
    this.country = country;
    Student.Count++;
  }

  //class method


  _createClass(Student, [{
    key: "equals",


    //This is not a standard Js method
    value: function equals(student) {
      return student.name === this.name && student.age === this.age && student.country === this.country;
    }

    //instance method

  }, {
    key: "toString",
    value: function toString() {
      return this.name + " is " + this.age + " and from " + this.country;
    }
  }], [{
    key: "isCreated",
    value: function isCreated() {
      return Student.Count > 0;
    }
  }]);

  return Student;
}();

//Class property


exports.default = Student;
Student.Count = 0;

var student1 = new Student("Brahim", 34, "CI");
var student2 = new Student("Salif", 37, "Brazza");
var student3 = new Student("Brahim", 34, "CI");

console.log("A student object is created: ", Student.isCreated());
console.log("student2 info: ", student2.toString());
console.log("student1 === student3: ", student1.equals(student3));
console.log("student1 === student2: ", student1.equals(student2));