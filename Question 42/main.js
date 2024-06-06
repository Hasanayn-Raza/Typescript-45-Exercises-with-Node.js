var magician_names = ["Charles", "David", "Harry"];
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great Magician ".concat(name); });
}
var great_magicians = make_great(magician_names);
console.log(great_magicians);
show_magicians(magician_names);
