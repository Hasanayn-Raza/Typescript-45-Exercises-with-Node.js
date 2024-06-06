"use strict";
// Defining Variables
let a = "a";
let upperCase = "A";
let five = 5;
let ten = 10;
let cities = ["Karachi", "Hyderabad", "Lahore", "Islamabad", "Quetta"];
//1. Test for inequality and equality with strings
console.log("Is a equal to a?");
console.log(a == "a");
console.log("\nIs a not equal to a?");
console.log(a != "a");
//2. Test using lowercase function
console.log("\nIs A equal to a after changing it to lowercase?");
console.log(upperCase.toLowerCase() == "a");
console.log("\nIs A  not equal to a after changing it to lowercase?");
console.log(upperCase.toLowerCase() != "a");
//3. Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Equality and Inequality
console.log("\nIs five equal to ten?");
console.log(five == ten);
console.log("\nIs five not equal to ten?");
console.log(five != ten);
//Greater than and Less than
console.log("\nIs five greater than 1?");
console.log(five > 1);
console.log("\nIs ten less than five?");
console.log(ten < five);
//Greater than or Equal to
console.log("\nIs ten greater than or equal to five?");
console.log(ten >= five);
//Less than or Equal to
console.log("\nIs ten less than or equal to five?");
console.log(ten <= five);
//4. Tests using "and" and "or" operators
//Using && Operator
console.log("\nTen is not equal to five and ten is greater than five");
console.log(ten != five && ten > five);
console.log("\nTen is not equal to five and ten is less than five");
console.log(ten != five && ten < five);
//Using || Operator
console.log("\nFive is greater than 2 OR Ten is equal to five");
console.log(five > 2 || ten == five);
console.log("\nFive is greater than Ten OR Ten is equal to Five");
console.log(five > ten || ten == five);
//5. Test whether an item is in a array
console.log("\nIs Karachi included in the array?");
console.log(cities.includes("Karachi"));
//6. Test whether an item is not in a array
console.log("\nIs Sukkur included in the array?");
console.log(cities.includes("Sukkur"));
