/* Your unit test here */
var assert = require('assert');
var demoFib = require('./maxConsecutiveOnes.js')

describe('maxConsecutiveOnes(n)', function() {
    describe('Cases', function() {
        it('should return 1 when n is [1]', function() {
            assert.equal(demoFib.maxConsecutiveOnes([1]), 1);
        });
        it('should return 4 when n is [1, 1, 1, 0, 1, 1, 1, 1]', function() {
            assert.equal(demoFib.maxConsecutiveOnes([1, 1, 1, 0, 1, 1, 1, 1]), 4);
        });
        it('should return 2 when n is [0, 1, 1]', function() {
            assert.equal(demoFib.maxConsecutiveOnes([0, 1, 1]), 2);
        });
    });
});