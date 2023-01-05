'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classes = require('./classes');

var _classes2 = _interopRequireDefault(_classes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Teacher = function (_Student) {
    _inherits(Teacher, _Student);

    function Teacher(name, age, country, course) {
        _classCallCheck(this, Teacher);

        var _this = _possibleConstructorReturn(this, (Teacher.__proto__ || Object.getPrototypeOf(Teacher)).call(this, name, age, country));

        _this.course = course;
        return _this;
    }

    //Override superClass's equal


    _createClass(Teacher, [{
        key: 'equals',
        value: function equals(anotherTeacher) {
            return this.name === anotherTeacher.name && this.course === anotherTeacher.course;
        }

        //Subclass can define iot"s own method

    }, {
        key: 'isOld',
        value: function isOld() {
            return this.age > 50;
        }
    }]);

    return Teacher;
}(_classes2.default);

var teacher1 = new Teacher('Toufik', 53, 'Algeria', 'Java');
var teacher2 = new Teacher('Alban', 30, 'Ivory Coast', 'PHP');
var teacher3 = new Teacher('Toufik', 50, 'Canada', 'Java');

//If is ommit the last param, it"s set to null in the object.
var teacher4 = new Teacher('Brahima', 50, 'BurKina');

//The subclass will access the toString() from the superClass
console.log('teacher4: ', teacher4.toString());
console.log(teacher4);

//Subclass inherits both instance and static methods.
console.log('At lest one teacher is created: ', Teacher.isCreated()); //true;

//This return true base on the overriden version of equals
console.log('teacher1 === teacher3', teacher1.equals(teacher3));

console.log('Alban is old', teacher2.isOld());
console.log('Toufik is old', teacher1.isOld());