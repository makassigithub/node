function getInfo(firstName,lastName, ...foods){
    
           //Let's the the ternary operator to define our variable
    let info = foods.length === 0 ? 'No food':
               foods.length ===1 ? 'the food ' + foods[1]:
               'the foods ' + foods.join(" and ");
               
               console.log(firstName + " " + lastName + " likes "+ info);
}

getInfo("Brahima", "Traore");
getInfo("Brahima", "Traore", "Potatoes");
getInfo("Brahima", "Traore", "Potatoes","Papayas","Cheese");
