function findMaxConsecutiveOnes(nums) {
    var max = 0; // max consecutive nums
    var count = 0; // counting nums
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++;
        } else {
            count = 0;
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
}
module.exports = { findMaxConsecutiveOnes }