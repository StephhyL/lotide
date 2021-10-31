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

const flatten = (arr) => {
  let flattenArr = [...arr];
  for (let element of arr) { // looping through all the elements of the originalArr
    if (Array.isArray(element)) {
      for (let value of element) {
        flattenArr.splice(flattenArr.indexOf(element), 0, value);
      }
      flattenArr.splice(flattenArr.indexOf(element), 1);
    }
  }
  return flattenArr;
};


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);