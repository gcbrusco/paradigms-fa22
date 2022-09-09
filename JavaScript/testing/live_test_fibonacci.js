var assert = require('assert');
var demoFib = require('./demoFibonacci')




// describe():  Groups tests 
// Arguments
//    - Test group name
//    - Callback function

// it(): Defines a test case (e.g., “It should equal X” or “It should log the user in.”)
// Arguments
//    - Test description
//    - Callback function containing test (with an assertion -- or anything that throws an Error)
describe('fibonacci(n)', function() {
  describe('Base recursion cases', function() {
    it('should return 0 when n is 0', function() {
      assert.equal(demoFib.fibonacci(0), 0);
    });
    it('should return 1 when n is 1', function() {
      assert.equal(demoFib.fibonacci(1), 1);
    });
  });
  //DEMO1: add two other groups 
  // (Group 1: stress-testing, Group 2: malicious user)
  
  //DEMO2: add an alternative assertion using exceptions
  // throw new Error(...)
  
});  
