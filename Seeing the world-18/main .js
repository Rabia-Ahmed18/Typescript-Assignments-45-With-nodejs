"use strict";
// creating an array of countries and printing its original order
let countriesToVisit = ["China", "Denmark", "Brazil", "America"];
console.log("Original Order", countriesToVisit);
// print the array in alphabetical order without modifying the actaul listof array
console.log("Albhabetical Order:", [...countriesToVisit].sort());
// show that the array is still in orginal order
console.log("Still in original order:", countriesToVisit);
// printed the reverse order without modifying the actaul list of array
console.log("Reverse order:", [...countriesToVisit].reverse());
// show that the array is still in orginal order
console.log("Still in original order:", countriesToVisit);
// We have changed the original array list
console.log("Original array reversed!", countriesToVisit.reverse());
// again reversing the reversed array of list
console.log("Back to original order:", countriesToVisit.reverse());
// Print the array to show that its order has been changed to alphabetical order
console.log("Sorted in alphabetical or:", countriesToVisit.sort());
// We have changed the original array list AGAIN
console.log("Original array reversed!", countriesToVisit.reverse());
