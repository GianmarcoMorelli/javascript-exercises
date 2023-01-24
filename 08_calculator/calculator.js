const add = function() {
	let len = arguments.length;
  let i = 0;
  let sum = 0;

  for(i = 0; i < len; i++){
    sum += arguments[i];
  }
  return sum;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(input) {
	let len = input.length;
  let i = 0;
  let sum = 0;

  for(i = 0; i < len; i++){
    sum += input[i];
  }
  return sum;
};

const multiply = function(input) {
  let len = input.length;
  let i = 0;
  let prod = 1;

  for(i = 0; i < len; i++){
    prod *= input[i];
  }
  return prod;
};

const power = function(a,b) {
	let i = 0;
  let res = 1;
  for(i = 0; i < b; i++){
    res *= a;
  }
  return res;
};

const factorial = function(a) {
	let i = 1;
  let res = 1;
  for(i = 1; i <= a; i++){
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
