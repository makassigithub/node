"use strict";
var House = function() {
  function House(location) {
    this._location = location;
  }
  return ($traceurRuntime.createClass)(House, {
    get location() {
      return this._location;
    },
    set location(loc) {
      this._location = loc;
    }
  }, {});
}();
var house1 = new House('Miami');
console.log('house1: ', house1);
console.log('house1: ', house1.location);
house1.location = 'Montreal';
console.log('New location: ', house1.location);
