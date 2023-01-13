function createurDeNom() {
  var nom = "Alban";

  return {
    getNom: function () {
      return nom;
    },
    setNom: function (autreNom) {
      nom = autreNom;
    },
  };
}

var leNom = createurDeNom();
console.log(leNom.getNom());

leNom.setNom("Brahima");
console.log(leNom.getNom());
