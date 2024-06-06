function makingCar(manufacturer, model, ...options){
  let car = {
    manufacturer: manufacturer,
    model: model
  }

  options.forEach(option => {
    let [a, b] = option.split(":")
    car[a.trim()] = b.trim()
  })
  return car
}

let car = makingCar("Daihatsu", "Mira", "Color: Light Blue", "Sunroof: False")

console.log(car);
