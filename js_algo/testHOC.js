
/* const  greaterThan = a => b => a > b ;

const than2 = greaterThan(2);
console.log(than2(1));

console.log(greaterThan(2)(3));

Array.prototype.oneIsEqual= function(fn){
  for( e of this){
    if(fn(e)){
     return true;
   }     
  }
  return false;
}

const isSame = a => b => a === b ;

console.log( '[1,2,3] constains  1 :'+[1,2,3].oneIsEqual(isSame(1))); 
console.log( '[1,2,3] constains  4 :'+[1,2,3].oneIsEqual(isSame(4)));
*/


const db = {
  SM: [
    { firstName: "Brahima", lastName: "Traore" },
    { firstName: "Hedi", lastName: "Traore" },
    { firstName: "Fadil", lastName: "Traore" }
  ],
  BG: [
    { firstName: "Salif", lastName: "Traore" },
    { firstName: "Brahima", lastName: "Traore" },
    { firstName: "Maimouna", lastName: "Traore" },
    { firstName: "Losseni", lastName: "Traore" }
  ]
};

const isSamePerson = person => otherPerson =>
  otherPerson.firstName === person.firstName;

const getSmallFamily = async () => db["SM"];

const intercept = bf_persons => sm_persons =>
  bf_persons.filter(ps => {
    for (p of sm_persons) {
      if (ps.firstName === p.firstName) {
        return p;
      }
    }
    //return sm_persons.filter(isSamePerson(ps));
  });

//console.log(JSON.stringify(getSmallFamily().then(intercept(db["BG"]))));

const tester = async () => {
  const data = await getSmallFamily().then(intercept(db["BG"]));
  console.log(JSON.stringify(data));
};

tester();

