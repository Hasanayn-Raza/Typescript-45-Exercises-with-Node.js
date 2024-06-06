function sandwichFilling(...items){
  console.log("\nYour sandwich will comprise of the following items:- \n");

  items.forEach(singleFilling => console.log(singleFilling))

  console.log("\nYou may enjoy your delicious sandwich");

}
sandwichFilling("Chicken","Mayo")
sandwichFilling("Lettuce","Chicken","Mayo","Cucumber")
sandwichFilling("Chicken","Ketchup","Onion")
