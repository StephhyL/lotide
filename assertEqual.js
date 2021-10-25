const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`)
    : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}.`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("sTring", "sTring");
assertEqual("Hello", "hello");
assertEqual(10, 10);
assertEqual(100, 1);


/*
the assertEqual function is more practical than using console.assert()
const sum = function (a, b){
  return a + b;
}

console.assert(sum(1, 2) === 3); ---> no output because it is true;
console.assert(sum(1, 2) === 5); // Assertion failed message;
*/