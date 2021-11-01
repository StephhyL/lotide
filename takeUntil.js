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
  eqArrays(arr1, arr2) ? console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}.`)
    : console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}.`);
};

// slice of the array with elements taken from the beginning // until the callback returns a truthy value // callback(oneParam) oneParam = item in the array

const takeUntil = function(array, callback) {
  const resultArr = [];
  for (const element of array) {
    if (!callback(element)) {
      resultArr.push(element);
    } else {
      return resultArr;
    }
  }
};

module.exports = takeUntil;

// prelim test without assertion
// const animals = ["dog", "cat", "bird"];
// console.log(takeUntil(animals, animal => animal === "cat"));

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
// assertArraysEqual(results1, [1,2,5,7,2]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

/*

const pets = ['dog', 'hen', 'bird'];
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
assertArraysEqual(map(foods, foodColours), ["red", "green", "brown"]); // pass */