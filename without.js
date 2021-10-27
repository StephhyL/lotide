const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}.`);
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}.`);
    }
  }
  console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}.`);
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

const without = (sourceArr, removeItems) => {
  let newSource = [...sourceArr];
  let withoutArr = [];
  
  for (let i = 0; i < newSource.length; i++) {
    for (let element of removeItems) {
      if (newSource[i] === element) {
        newSource.splice(i, 1, 'x');
      }
    }
  }
  
  for (let value of newSource) {
    if (value !== 'x') {
      withoutArr.push(value);
    }
  }
  return withoutArr;
};

let words3 = ['1', 'a', 3]
console.log(without(words3, ['a']));
