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
