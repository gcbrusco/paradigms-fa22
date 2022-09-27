function parityAnalysis(n) {
    // Your solution here
    return ((n % 2) == (String(n).split('').map(num => Number(num)).reduce((sum, num) => sum = sum + num, 0) % 2)) ? true : false;
}

module.exports = { parityAnalysis }