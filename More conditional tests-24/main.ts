// define variables
let apple  = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;

let fruits = ["apple", "banana" , "orange"];

// test for equality and inequality with string
console.log("Is apple equals to apple?");
console.log(apple == "apple");

console.log("\nIs apple not equals to apple?");
console.log(apple != "apple");

// test with lowercase funtion
console.log("\n Is APPLE equals to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() =="apple");

console.log("\n Is APPLE not equals to apple after converting to lowercase?");
console.log(upperCaseApple.toLocaleLowerCase() !=  "apple");

// tests with numerical values
// eqaul to
console.log("\n Is ten is equals to twenty?");
console.log(ten == twenty);

// not equal to
console.log("\n Is ten not equals to twenty?");
console.log(ten != twenty);

//greater than
console.log("\n Is ten greater than zero?");
console.log(ten > 0);

// smaller than
console.log("\n Is ten smaller than zero?");
console.log(ten< 0);

// greater than or equal to
console.log("\n Is ten greater than or equals to twenty?");
console.log(ten >= twenty);

// smaller than or equal to
console.log("\n Is ten smaller than or equals to twenty?");
console.log(ten <= twenty);

// tests using "and" , &&  operators 
console.log("\n twenty is not equals to ten and twenty is greater than ten");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to ten && twenty is greater than ten");
console.log(twenty != ten && twenty > 30);

// tests using "or" , || operator
console.log("\n 20 is greater than 50 || 20 is equal to 50");
console.log(twenty > 50 || twenty == 50);

// tests wetheran item is included in array
console.log("\n Is orange included in my array?");
console.log(fruits.includes("orange"));

console.log("\n Is banana not included in my array?");
console.log(!fruits.includes("banana"));