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

const letterPositions = function(sentence) {  // sentence = "hello"
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i]; // position = i

    if (results[character]) {
      results[character].push(i);
    } else {
      results[character] = [i];
    }
  }
  console.log(results);
  delete results[" "];
  return results;
};

assertArraysEqual(letterPositions("hello")["h"], [0]);
assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("hello")["l"], [2,3]);
assertArraysEqual(letterPositions("hello")["o"], [4]);

const test = letterPositions("lighthouse in the house");
console.log(test);
console.log({
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
});