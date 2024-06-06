"use strict";
let guestList = ["Hasan", "Ali", "Ahmed", "Hasanayn", "Ibraheem", "Umar"];
let cannotCome = guestList[0];
console.log(cannotCome, "will not be able to make it to the dinner tonight");
guestList.splice(0, 1, "Bilal");
console.log("But a Good News! I've found a big dinner table, now we can have more friends over for dinner");
guestList.unshift("Shahid");
guestList.push("Usman");
let middleValue = Math.floor(guestList.length / 2);
guestList.splice(middleValue, 0, "Arham");
console.log("Our new list of guests for tonight's dinner");
guestList.forEach(guest => console.log(`Hey ${guest}, would you like to have dinner with us tonight?`));
console.log("Unfortunately the table will not be able to arrive on time, so I will only be able to invite two of you for the dinner");
while (guestList.length > 2) {
    let guestRemoved = guestList.pop();
    console.log(`Hey ${guestRemoved}, I extremely apoloize as I won't be able to invite you to the dinner`);
}
console.log("Invitation for the last two guests");
guestList.forEach(twoGuests => console.log(`You are very lucky ${twoGuests} as you are still invited to the dinner`));
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
