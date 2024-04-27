// Define a function with a rest parameter that accepts items argumenst representing our sandwich

function makeSandwich(...items:string[]){
    console.log("\nmaking a sandwich with the following items: \n");
items.forEach(singleItem=> console.log(singleItem));
console.log("\nNow Enjoy Sandwich");

}
// call the funtion 3 items  with 3 different number of arguments

makeSandwich("chicken" , "cheese" , "ketchup" , "mayo" , "egg");

makeSandwich("bread" , "butter");

makeSandwich("letuce");