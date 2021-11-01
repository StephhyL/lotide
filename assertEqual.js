const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`)
    : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}.`);
};

module.exports = assertEqual;





/*
the assertEqual function is more practical than using console.assert()
const sum = function (a, b){
  return a + b;
}

console.assert(sum(1, 2) === 3); ---> no output because it is true;
console.assert(sum(1, 2) === 5); // Assertion failed message;
*/