// Closures = Example 1
const x = 'OUTER';
function second1() {
	console.log(`Example 1: x=${x}`);
}
function first1() {
	const x = 'FIRST'; 
	second1();
} 
first1();

// // Closures = Example 2
// const x = 'OUTER';
// function second(x) {
// 	console.log(x);
// }
// function first() {
// 	const x = 'FIRST'; 
// 	second(x);
// } 
// first();

// // Closures = Example 3
// function second(callbackFunction) {
// 	const name = 'new';
// 	callbackFunction();
// }

// function first() {
// 	const name = 'old';
// 	const printName = () => console.log(name);
// 	second3(printName);
// }

// first();


// // Closure = Example 4
// var passed = 3;

// var addTo = function(){
// 	var inner = 2;
// 	return passed + inner;
// }

// console.log(addTo())

// // A generator function
// const nextSquare = (() => {
// 	let previous = -1;
// 	return () => {
// 		previous++;
// 		return previous*previous;
// 	}
// })();


