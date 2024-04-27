var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// creating an array of countries and printing its original order
var countriesToVisit = ["China", "Denmark", "Brazil", "America"];
console.log("Original Order", countriesToVisit);
// print the array in alphabetical order without modifying the actaul listof array
console.log("Albhabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// show that the array is still in orginal order
console.log("Still in original order:", countriesToVisit);
// printed the reverse order without modifying the actaul list of array
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
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
