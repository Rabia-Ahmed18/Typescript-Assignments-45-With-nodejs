"use strict";
//  creating a function
function describe_city(city, country = "Pakistan") {
    console.log(` ${city} is in ${country}`);
}
// calling a function
// --1
describe_city("karachi");
// --2
describe_city("Hyderabad");
// --3
describe_city("Tokyo", "Japan");
