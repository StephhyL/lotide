const map = (array, callback) => {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2)? console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}.`)
  : console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}.`);
};



const animals = ['dog', 'hen', 'bird'];
const num = [1,2,3,4,5];
const foods = [
  { type: 'apple', colour: "red"},
  { type: 'pear', colour: "green"},
  { type: 'nuts', colour: "brown"}
];

const animalLength = (animal) => animal.length;
const addTwoCB = (val) => val + 2;
const foodColours = (food) => food.colour;

assertArraysEqual(map(animals, animalLength), [3,3,4]); // pass
assertArraysEqual(map(num, addTwoCB), [3,4,5,6,7]); // pass
assertArraysEqual(map(foods, foodColours), ["red", "green", "yellow"]); // failed
assertArraysEqual(map(foods, foodColours), ["red", "green", "brown"]); // pass