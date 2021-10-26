const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`)
    : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}.`);
};


const tail = function(arr) {
  return arr.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

console.log(tail([1]));
console.log(tail([]));


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