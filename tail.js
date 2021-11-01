const tail = function(arr) {
  return arr.slice(1);
};

module.exports = tail;


/* I misunderstood the assignment and modified the assertEqual function instead.
const assertEqual = function(actual, expected){
  for (let i = 0; i < actual.length; i++){
    if (actual[i] !== expected[i]){
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}.`);
    }
  }
  if (actual.length !== expected.length){
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}.`);
  }
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`);
};
*/