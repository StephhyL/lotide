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

const middle = (arr) => {
  let result = [];

  const arrLength = arr.length;
  const centre = arrLength / 2;
  const centreIndex = centre - 1;

  if (arrLength <= 2) {
    result = [];
  } else if (Number.isInteger(centreIndex)) {
    result.push(arr[centreIndex], arr[centreIndex + 1]);
  } else {
    result.push(arr[Math.ceil(centreIndex)]);
  }
  return result;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);