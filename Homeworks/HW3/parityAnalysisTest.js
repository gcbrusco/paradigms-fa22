/* Your unit test here */
var assert = require('assert');
var demoFib = require('./parityAnalysis.js')

describe('parityAnalysis(n)', function() {
    describe('Cases', function() {
        it('Input: 25, Output: true', function() {
            assert.equal(demoFib.parityAnalysis(25), true);
        });
        it('Input: 13, Output: false', function() {
            assert.equal(demoFib.parityAnalysis(13), false);
        });
        it('Input: 1, Output: true', function() {
            assert.equal(demoFib.parityAnalysis(1), true);
        });
        it('Input: 10001, Output: false', function() {
            assert.equal(demoFib.parityAnalysis(10001), false);
        });
        it('Input: 12345, Output: true', function() {
            assert.equal(demoFib.parityAnalysis(12345), true);
        });
    });
});