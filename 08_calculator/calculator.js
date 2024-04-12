const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((acumulator, current) => acumulator + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((acumulator, current) => acumulator * current, 1);

};

const power = function(base, power) {
  let element = 1;
  for (let i = 0; i < power; i++) {
    element = element * base;
  }
  return element;
};

const factorial = function(fnum) {
  if (fnum == 0) return 1;
  return fnum * factorial(fnum - 1);
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
