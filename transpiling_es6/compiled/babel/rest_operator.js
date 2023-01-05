'use strict';

function getInfo(firstName, lastName) {
       for (var _len = arguments.length, foods = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              foods[_key - 2] = arguments[_key];
       }

       //Let's the the ternary operator to define our variable
       var info = foods.length === 0 ? 'No food' : foods.length === 1 ? 'the food ' + foods[1] : 'the foods ' + foods.join(" and ");

       console.log(firstName + " " + lastName + " likes " + info);
}

getInfo("Brahima", "Traore");
getInfo("Brahima", "Traore", "Potatoes");
getInfo("Brahima", "Traore", "Potatoes", "Papayas", "Cheese");