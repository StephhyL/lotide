const assert = require('chai').assert;
const tail = require('../tail');

describe ("#tail", () => {

  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);  
  });

  it("should not alter the original inputed array. The length of words array should still remain 3 after being inputted into the tails array", () => {  
    let words = ["Yo", "Light", "House"];
    tail(words);
    assert.strictEqual(words.length, 3);    
  });  


})

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");