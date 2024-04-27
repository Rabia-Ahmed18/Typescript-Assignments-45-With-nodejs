"use strict";
// / Creating a function
function make_shirts(size = "large", printMessage = "I Love Typescript") {
    console.log(`Creating a ${size} size shirt with ${printMessage} prints on it`);
}
make_shirts();
function make_shirts2(size = "medium", printMessage = "I Love Coding") {
    console.log(`Creating a ${size} size shirt with ${printMessage} prints on it`);
}
make_shirts2();
