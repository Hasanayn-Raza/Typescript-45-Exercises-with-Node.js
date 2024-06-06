function sandwichFilling() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nYour sandwich will comprise of the following items:- \n");
    items.forEach(function (singleFilling) { return console.log(singleFilling); });
    console.log("\nYou may enjoy your delicious sandwich");
}
sandwichFilling("Chicken", "Mayo");
sandwichFilling("Chicken", "Mayo", "Cucumber");
sandwichFilling("Chicken", "Ketchup", "Onion");
