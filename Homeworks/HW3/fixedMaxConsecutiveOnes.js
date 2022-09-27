function fixedMaxConsecutiveOnes(nums) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) count++;
        if (count > max) max = count;
        if (nums[i + 1] === 0) count = 0;
    }
    return max;
}

module.exports = { fixedMaxConsecutiveOnes };