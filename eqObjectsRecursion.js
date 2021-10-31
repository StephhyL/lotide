const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`)
    : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}.`);
};

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


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { // checks # keys in each object via key arrays lengths
    return false;
  }
  //base case

  for (const key in object1) { // for all the keys in object1
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (typeof object1[key] === 'object') {
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) { //if the key in object1 does not equal key in object2
      return false;
    }
  }
  return true;
};

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
console.log(eqObjects({ a: { z: 1, h: { i:78}}, b: 2 }, { a: { z: 1, h: { i:78}}, b: 2 })); // => true