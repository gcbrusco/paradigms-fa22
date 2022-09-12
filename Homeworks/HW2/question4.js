function reversedSum(num1, num2) {
    //console.log(num1 + ' ' + num2);
    // make both strings
    num1 = String(num1);
    num2 = String(num2);
    //console.log(num1 + ' ' + num2);
    //reverse strings
    num1 = parseInt(num1.split("").reverse().join(""));
    num2 = parseInt(num2.split("").reverse().join(""));
    //console.log(num1 + ' ' + num2);
    let sum = num1 + num2;
    return parseInt(String(sum).split("").reverse().join(""));
}