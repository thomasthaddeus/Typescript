// Task #1
interface Identity<T, U> {
	value : T;
	message : U
}

let object1 : Identity<number, string>;
let object2 : Identity<string, number>;

// Task #2

interface ProcessIdentity<T, U> {
	(value: T, message: U) : T;
}

function myProcessIdentity<T, U>(value: T, message: U) : T {
	console.log(message)
	return value
}

// function type variable / variable that is a function
let myprocessor : ProcessIdentity<number, string> = myProcessIdentity;
let returnval = myprocessor("hello", 1)
console.log('return value is '+returnval)
