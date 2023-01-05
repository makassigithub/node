"use strict";
var marchandise = function() {
  function marchandise(price) {
    this.price = price;
  }
  return ($traceurRuntime.createClass)(marchandise, {}, {});
}();
