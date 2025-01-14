const convertToCelsius = function(convertFahrenheit) {
  let celsius = (convertFahrenheit - 32) * (5 / 9);
  let roundedCelsius = Math.round(celsius * 10) / 10;
  return (roundedCelsius);
};

const convertToFahrenheit = function(convertCelsius) {
  let fahrenheit = (convertCelsius * (9 / 5) + 32);
  let roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return (roundedFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
