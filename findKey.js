const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`)
    : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}.`);
};


// scan the object 
// and return the first key for which the callback returns a truthy value
// Edge Case: if no key is found, return undefined

const findKey = (obj, funcCB) => {
  // define the result/key

  // scan the object
  for (let key in obj) {
    // console.log("obj[key].stars", obj[key].stars)
    // console.log("key", key);
    // console.log("value of each key running through callback function", funcCB(key));
    // console.log("value of stars", key.stars);
    if (funcCB(obj[key])) {
      return key;
    }

    // x => x.stars === 2
    // key => key.stars === 2
    // Blue Hill



  }
  return; 
  // iterate through the object
  // for each element in the object, I am going to iterate through their value;d
 // return // name of key
}


// oject which has keys that have values (that are objects)

const hello = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(hello, "noma");