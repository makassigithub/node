(function tryItWithVar() {
  var name = "brahima";
  //console.log('before forloop: '+i);

  for (var i = 0; i < name.length; i++) {
    console.log("inside for loop: " + name[i]);
  }

  console.log("after forloop: " + i);
})();

(function tryItWithLet() {
  var name = "brahima";
  //console.log("before forloop: " + i);

  for (let i = 0; i < name.length; i++) {
    console.log("inside for loop: " + name[i]);
  }

  //console.log("after forloop: " + i);
})();
