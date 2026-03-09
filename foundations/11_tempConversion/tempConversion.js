const convertToCelsius = function(fahr) {
  let celsius = (fahr - 32) / 1.8
  celsius = Math.round(celsius * 10) / 10
  return celsius
  
  //Celsius = (Fahrenheit - 32) / 1.8
  /* Math.round(num * 10) / 10 */
};

const convertToFahrenheit = function(celsius) {

  let fahr = (celsius * 1.8) + 32
  fahr = Math.round(fahr * 10) / 10
  return fahr
};
// Fahrenheit = (Celsius * 1.8) + 32 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
