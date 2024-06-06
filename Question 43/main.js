var magician_names = ["Charles", "David", "Harry"];
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great Magician ".concat(name); });
}
var copyOfMagicianNames = magician_names.slice();
var copyOfGreatMagicians = make_great(copyOfMagicianNames);
//Original
console.log("Original Array of Magicians");
show_magicians(magician_names);
console.log("---------------------------");
//Copy
console.log("Copy Array of Magicians");
show_magicians(copyOfMagicianNames);
console.log("---------------------------");
//Original
console.log("Orginal Array of Great Magicians");
console.log(make_great(magician_names));
console.log("---------------------------");
//Copy
console.log("Copy Array of Great Magicians");
console.log(make_great(copyOfGreatMagicians));
