var assert = require('assert');
var demoFib = require('../../Homeworks/HW2/question2.js')

describe('findMaxConsecutiveOnes(n)', function() {
    describe('Cases', function() {
        it('should return 2 when n is [1,0,1,1]', function() {
            assert.equal(demoFib.findMaxConsecutiveOnes([1, 0, 1, 1]), 2);
        });
        it('should return 0 when n is []', function() {
            assert.equal(demoFib.findMaxConsecutiveOnes([]), 0);
        });
        it('should return 1 when n is [0,0,1,0,1]', function() {
            assert.equal(demoFib.findMaxConsecutiveOnes([0, 0, 1, 0, 1]), 1);
        });
        it('should return 3 when n is [0,1,1,1,0]', function() {
            assert.equal(demoFib.findMaxConsecutiveOnes([0, 1, 1, 1, 0]), 3);
        });
    });
});