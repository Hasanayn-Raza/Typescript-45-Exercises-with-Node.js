let magician_names = ["Charles","David","Harry"]

function show_magicians(magicians: string[]){
  magicians.forEach(name => console.log(name))
}

function make_great(magicians){
  return magicians.map(name => `The Great Magician ${name}`)
}

let great_magicians = make_great(magician_names)

console.log(great_magicians);

show_magicians(magician_names)
