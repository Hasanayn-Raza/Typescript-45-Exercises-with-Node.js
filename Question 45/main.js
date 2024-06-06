function makingCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (option) {
        var _a = option.split(":"), a = _a[0], b = _a[1];
        car[a.trim()] = b.trim();
    });
    return car;
}
var car = makingCar("Daihatsu", "Mira", "Color: Light Blue", "Sunroof: False");
console.log(car);
