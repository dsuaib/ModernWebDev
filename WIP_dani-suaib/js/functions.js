function displayName (name) {
    console.log('hello ' + 'name :>> ', name);
}

displayName('Dani')

function toFahrenheit (celsius) {

    let Fahrenheit = celsius * (9 / 5) + 32
    console.log('Fahrenheit :>> ', Fahrenheit);
    // [°C] = ([°F] − 32) × 5⁄9
    // [°F] =[°C] × 9⁄5 + 32
}
function toCelsius (fahrenheit) {

    let celsius = (fahrenheit - 32) * (5 / 9)
    console.log('celsius :>> ', celsius);
}
toFahrenheit(60)
toCelsius(212)