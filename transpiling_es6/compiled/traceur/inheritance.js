"use strict";
function $__interopRequire(id) {
  id = require(id);
  return id && id.__esModule && id || {default: id};
}
var Student = $__interopRequire("./classes").default;
var Teacher = function($__super) {
  function Teacher(name, age, country, course) {
    $traceurRuntime.superConstructor(Teacher).call(this, name, age, country);
    this.course = course;
  }
  return ($traceurRuntime.createClass)(Teacher, {
    equals: function(anotherTeacher) {
      return (this.name === anotherTeacher.name && this.course === anotherTeacher.course);
    },
    isOld: function() {
      return this.age > 50;
    }
  }, {}, $__super);
}(Student);
var teacher1 = new Teacher('Toufik', 53, 'Algeria', 'Java');
var teacher2 = new Teacher('Alban', 30, 'Ivory Coast', 'PHP');
var teacher3 = new Teacher('Toufik', 50, 'Canada', 'Java');
var teacher4 = new Teacher('Brahima', 50, 'BurKina');
console.log('teacher4: ', teacher4.toString());
console.log(teacher4);
console.log('At lest one teacher is created: ', Teacher.isCreated());
console.log('teacher1 === teacher3', teacher1.equals(teacher3));
console.log('Alban is old', teacher2.isOld());
console.log('Toufik is old', teacher1.isOld());
