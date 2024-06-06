var current_users = ["Ali", "hAider", "Usman", "Hamza"];
var new_users = ["Hasanayn", "Hasan", "Ibraheem", "Haider"];
new_users.forEach(function (newUser) {
    var condition = current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); });
    if (condition) {
        console.log("Sorry \"".concat(newUser, "\" is already taken!"));
    }
    else {
        console.log("Username \"".concat(newUser, "\" is available"));
    }
});
