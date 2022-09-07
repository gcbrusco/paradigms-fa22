var assert = require('assert');
var brokenFib = require('./brokenFibonacci')




// describe():  Groups tests 
// Arguments
//    - Test group name
//    - Callback function

// it(): Defines a test case (e.g., “It should equal X” or “It should log the user in.”)
// Arguments
//    - Test description
//    - Callback function containing test.


describe('fibonacci(n)', function() {
  describe('Base recursion cases', function() {
    it('should return 0 when the value is 0', function() {
      assert.equal(brokenFib.fibonacci(0), 0);
    });
    it('should return 1 when the value is 1', function() {
      assert.equal(brokenFib.fibonacci(1), 1);
    });
  });
});  
