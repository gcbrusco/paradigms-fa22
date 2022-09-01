// DEMO - PART1: BASIC FUNCTION DECLARATION
// 		- with / without arguments
// 		- with / without return
function sumArray(arr){
	let total = 0;
	for (let i = 0; i < arr.length; i++){
		total+= arr[i];
	}
	return total;
}
let arr = [1,2,3,"4" ];
// console.log(`${sumArray(arr)}`);


// DEMO - PART2: FUNCTION EXPRESSIONS
let sayHi = function(name){
	console.log("Hello, " + name);	
}
let a = sayHi;

// console.log(a + 2);
// console.log(sayHi);
// console.log(sayHi("Mark"));
// a("Joanna");

// DEMO - PART3: ARROW FUNCTIONS



// DEMO - PART4: CALLBACK FUNCTIONS





