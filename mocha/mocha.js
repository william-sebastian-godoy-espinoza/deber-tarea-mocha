const assert = require('chai').assert;


function findMax(array) {
  
  let max = array[0];

  
  for (let i = 1; i < array.length; i++) {
    
    if (array[i] > max) {
    
      max = array[i];
    }
  }

  
  return max;
}


describe('findMax function', () => {
  it('should return the correct maximum value in the array', () => {
    const array = [2, 8, 4, 10, 6];
    const result = findMax(array);
    assert.strictEqual(result, 10, 'Expected maximum value to be 10');
  });

  it('should return the correct maximum value for negative numbers', () => {
    const array = [-5, -2, -8, -3, -10];
    const result = findMax(array);
    assert.strictEqual(result, -2, 'Expected maximum value to be -2');
  });

  it('should return the same value for an array with a single element', () => {
    const array = [7];
    const result = findMax(array);
    assert.strictEqual(result, 7, 'Expected maximum value to be 7');
  });
});

