"use strict";
let guestList = ["Iqra", "Maha", "Nimra"];
let cannotCome = guestList[0];
console.log(cannotCome);
guestList.splice(0, 1, "Saba");
guestList.forEach(guest => console.log(`Hello! ${guest} , Would you like to have dinner with me?`));
