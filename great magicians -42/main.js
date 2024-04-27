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
