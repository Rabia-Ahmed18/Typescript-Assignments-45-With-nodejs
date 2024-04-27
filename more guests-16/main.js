"use strict";
// creating a guestlist array.
let guestList = ["Kuku", "Iqra", "Saba"];
// making variable for those guests who cant come
let cannotCome = guestList[0];
// printing the name of guest who cant come
console.log(cannotCome, "cannot come!");
// add or remove values from guest list array
guestList.splice(0, 1, "Nimra");
//  message print for bigger table
console.log("Good News! we have a found a bigger table for dinner.");
// unshift ka function starting mein value add krny k lie use hota h
guestList.unshift("Ali");
//  Adding a new value at ending index of array
guestList.push("Maha");
// Get a middle index og our guest list array
let middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index og guest list array
guestList.splice(middleIndex, 0, "Sana");
console.log("Updates list of our guests");
guestList.forEach(oneguest => console.log(`Hello ${oneguest}, Would you like to have dinner with me?`));
