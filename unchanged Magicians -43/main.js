"use strict";
function show_magician(magicians) {
    magicians.forEach(name => console.log(name));
}
// functions to make magicians great through .map() methods
function make_great(magician) {
    return magician_names.map(name => `The Great ${name}`);
}
// define an array of magicians names
let magician_names = ["Teller", "Ricky jay", "Shin Lim"];
// call make_great function to modify magicians names
let great_magicians = make_great(magician_names);
console.log(great_magicians);
// making a copy of original array through ,slice function
let copy_magician_names = magician_names.slice();
//  modify tehe copied array to include "the great"
let copy_great_magicians = make_great(copy_magician_names);
// show both arrays original and copied
// original
show_magician(magician_names);
// copied
show_magician(copy_great_magicians);
