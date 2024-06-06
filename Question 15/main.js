"use strict";
let guestList = ["Hasan", "Ali", "Ahmed", "Hasanayn", "Ibraheem", "Umar"];
let cannotCome = guestList[0];
console.log(cannotCome, "will not be able to make it to the dinner tonight");
guestList.splice(0, 1, "Bilal");
guestList.forEach(guest => console.log(`Hey ${guest}, would you like to have dinner with us tonight?`));
