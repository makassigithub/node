
function createurDeNom() {
    var nom = "Alban";

// la fonction externe createurDeNom() retoune un object qui contient un fonction
// qui pointe sur la variable "nom" dans la fonction externe (c'est la defintion du closure) 
    return {
    getNom: function(){
        return nom;
    },
    setNom: function(autreNom){
        nom= autreNom;
    }

    }
};

var leNom = createurDeNom();
    console.log(leNom.getNom());

//Normalement quand une fonction rend(return) toute les variable qui st en l'interieur son detruite
//puis la memoire est restituée a l'OS, mais a cause du closure, la variable "nom" reste encore 
//et donc modifiable

    leNom.setNom("Brahima");
    console.log(leNom.getNom());
   
