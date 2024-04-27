"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create_cars(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // add an additional objects to the car project
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create the object
var myCar = create_cars("toyota", "corolla", "color:black", "sunroof:true");
// printt the variable to ensure all the information in the car object
console.log(myCar);
