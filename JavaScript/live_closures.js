let counter = 1;

function nextOddNumber(){
	let output = counter;
	counter = counter + 2
	return output;
}

function userFunction1(){
	let nextOddNumber = nextOddNumberGenerator()
	console.log(`userFunction1 ${nextOddNumber()}`)
	console.log(`userFunction1 ${nextOddNumber()}`)
}

function userFunction2(){
	let nextOddNumber = nextOddNumberGenerator()
	console.log(`userFunction2 ${nextOddNumber()}`)
	console.log(`userFunction2 ${nextOddNumber()}`)
}


// DEMO: how to use closures to solve this problem?
// Explain: IIFE (immediately invoked function expression)

let nextOddNumberGenerator = function () {
	let innerCounter = 1;

	return () => {
		let output = innerCounter;
		innerCounter = innerCounter + 2
		return output;
	};
};



// console.log(nextOddNumberGenerator())
userFunction1()
userFunction2()
