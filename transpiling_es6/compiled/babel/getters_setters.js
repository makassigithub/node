'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var House = function () {

    //Use _propname when we will be using getters and setters
    //using this.location instead of this_location would throw
    //Maximum call stack size exceeded exception

    function House(location) {
        _classCallCheck(this, House);

        this._location = location;
    }

    _createClass(House, [{
        key: 'location',
        get: function get() {
            return this._location;
        },
        set: function set(loc) {
            this._location = loc;
        }
    }]);

    return House;
}();

var house1 = new House('Miami');

//Right now the house1 is
console.log('house1: ', house1);
console.log('house1: ', house1.location);

//Override location property
house1.location = 'Montreal';
console.log('New location: ', house1.location);

//Without setter we cannot reset an instamce property