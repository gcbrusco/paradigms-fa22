let counter = 1;

function nextOddNumber(){
	let output = counter;
	counter = counter + 2
	return output;
}

function userFunction1(){
	console.log(`userFunction1 ${nextOddNumber()}`)
	console.log(`userFunction1 ${nextOddNumber()}`)
}

function userFunction2(){
	console.log(`userFunction2 ${nextOddNumber()}`)
	console.log(`userFunction2 ${nextOddNumber()}`)
}

// userFunction1()
// userFunction2()

// DEMO: how to use closures to solve this problem?



for(var i = 0 ; i < 3 ; i++){
	// setTimeout(() => console.log(i),100)
	let printI = () => console.log(i)
	printI()
}