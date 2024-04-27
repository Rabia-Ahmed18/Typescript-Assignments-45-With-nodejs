import { create } from "domain";

function create_cars(manufacturer , model , ...options){
    // initialize a car object with manufacturer and model
let car={
    manufacturer:manufacturer,
    model:model

};

// add an additional objects to the car project
options.forEach(options=>{
    let[key,value]=options.split(":");
    car[key.trim()]=value.trim();
});
return car;
}

// call the function to create the object
let myCar=create_cars("toyota" ,"corolla" , "color:black" , "sunroof:true");
// printt the variable to ensure all the information in the car object

console.log(myCar);
