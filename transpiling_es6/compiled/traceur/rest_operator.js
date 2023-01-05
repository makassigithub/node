"use strict";
function getInfo(firstName, lastName) {
  for (var foods = [],
      $__0 = 2; $__0 < arguments.length; $__0++)
    foods[$__0 - 2] = arguments[$__0];
  var info = foods.length === 0 ? 'No food' : foods.length === 1 ? 'the food ' + foods[1] : 'the foods ' + foods.join(" and ");
  console.log(firstName + " " + lastName + " likes " + info);
}
getInfo("Brahima", "Traore");
getInfo("Brahima", "Traore", "Potatoes");
getInfo("Brahima", "Traore", "Potatoes", "Papayas", "Cheese");
