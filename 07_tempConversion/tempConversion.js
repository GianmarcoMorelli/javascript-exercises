const convertToCelsius = function(tempOne) {
  let resOne = (tempOne - 32) * (5/9);
  return parseFloat(resOne.toFixed(1));
};

const convertToFahrenheit = function(tempTwo) {
  let resTwo = tempTwo * (9/5) + 32;
  return parseFloat(resTwo.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
