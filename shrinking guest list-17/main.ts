// creating a guestlist array.
let guestList = ["Kuku" , "Iqra" ,"Saba"];
// making variable for those guests who cant come
let cannotCome = guestList[0];

// printing the name of guest who cant come
console.log(cannotCome  , "cannot come!");

// add or remove values from guest list array
guestList.splice(0 , 1 ,"Nimra");

//  message print for bigger table
console.log("Good News! we have afound a bigger table for dinner.");

// unshift ka function starting mein value add krny k lie use hota h
guestList.unshift("Ali");

//  Adding a new value at ending index of array
guestList.push("Maha");

// Get a middle index og our guest list array
let middleIndex : number = Math.floor (guestList.length / 2);

// Adding a new guest to middle index og guest list array
guestList.splice(middleIndex,0 ,"Sana")

console.log("Updates list of our guests");
guestList.forEach(oneguest => console.log(`Hello ${oneguest}, Would you like to have dinner with me?`));

// Inform thatonly two guests can be invited for dinner.
console.log("Unfortunately, the new dinner table won't arrived on time, so i can only invite two guests to have dinner with me")

// Using while loop to remove guest from the array until only two guests remain
while(guestList.length >2){
    let removeguest  = guestList.pop();
    console.log(`Sorry, ${removeguest} I cant invite you to the dinner`);

}
// sending the invitation to last two guests on the list
console.log("Invitation to the last wo guests");
guestList.forEach(lastTwo =>console.log(`Luckily! ${lastTwo}, you are still invited to the dinner`));

// Removing last two names from the list
guestList.pop();
guestList.pop();
console.log("Empty List:" , guestList);