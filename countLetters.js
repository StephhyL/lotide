/* assertEqual will not work on this because these are objects
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`)
    : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}.`);
};
*/

// take in a sentence (as a string)
// return a count of each letter in that sentence
// ex "LHL" --> L 2, H 1

// function to get rid of spaces in the sentence/input
const noSpaceFunc = (words) => {
  let noSpaceWord = "";
  for (let char of words) {
    if (char !== " ") {
      noSpaceWord += char;
    }
  }
  return noSpaceWord;
};

const countLetters = (words) => {
  let result = {};
  let noSpace = noSpaceFunc(words);  // input without spaces

  for (let character of noSpace) {
    if (result[character]) {
      result[character]++;
    } else {
      result[character] = 1;
    }
  }
  console.log(result);
  return result;
};


let test = countLetters("lighthouse in the house");
console.log(test);

// assertEqual(test, {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1,});