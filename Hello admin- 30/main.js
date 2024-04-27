"use strict";
// creating an array
let userNames = ["sana", "amna", "maha", "admin", "iqra"];
// using forEach loop on array
userNames.forEach(oneUser => {
    if (oneUser === "admin") {
        console.log(`Hello ${oneUser} ,Would you like to see a status report`);
    }
    else {
        console.log(`Hello ${oneUser} ,Thank you for logging in again.`);
    }
});
