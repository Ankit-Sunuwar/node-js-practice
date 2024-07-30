// convert the celcius to kelvin, kelvin to celcius and make a module.

const convertToCelcius = (kelvin) => {
  const celcius = kelvin - 273.15;
  return celcius;
};

const result = convertToCelcius(40);
console.log(result);

const convertToKelvin = (celcius) => {
  const kelvin = celcius + 273.15;
  return kelvin;
};

const result2 = convertToKelvin();
console.log(result2);

module.exports = { convertToCelcius, convertToKelvin };
