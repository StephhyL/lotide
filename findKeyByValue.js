const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`)
    : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}.`);
};

// using for in loop
const findKeyByValue = (object, value) => {
  for (const key in object) {
    if (value === object[key]) {
      return key;
    }
  }
  return;
};

/* using Object.keys and for...of
const findKeyByValue = (object, value) => {
  let keyArr = Object.keys(object);  // ['sci_fi', 'comedy', 'drama']
  console.log(keyArr);
  for (const keyName of keyArr) { // keyName = sci_fi; keyName = comedy, etc
    if (object[keyName] === value) {
      return keyName;
    }
  }
  return;
};
*/


const bestTVShowsByGenre = {
  show: "The Wire",
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "show");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, 7), undefined);