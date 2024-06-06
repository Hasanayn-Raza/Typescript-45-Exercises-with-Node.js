let magician_names = ["Charles","David","Harry"]

function show_magicians(magicians: string[]){
  magicians.forEach(name => console.log(name))
}

function make_great(magicians){
  return magicians.map(name => `The Great Magician ${name}`)
}

let copyOfMagicianNames = magician_names.slice()

let copyOfGreatMagicians = make_great(copyOfMagicianNames)


//Original
console.log("Original Array of Magicians");
show_magicians(magician_names);
console.log("---------------------------");

//Copy
console.log("Copy Array of Magicians");
show_magicians(copyOfMagicianNames)
console.log("---------------------------");

//Original
console.log("Orginal Array of Great Magicians");
console.log(make_great(magician_names))
console.log("---------------------------");


//Copy
console.log("Copy Array of Great Magicians");
console.log(make_great(copyOfGreatMagicians))