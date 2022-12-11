/*
** CLASS:   IS 312: Web Design and Programming
** ASGN:    PE07: Programming Exercise
** QUARTER: FALL 2022/23
** STUDENT: Thaddeus Thomas
** DATE:    11 DEC 2022
*/

interface Identity<T,U> {
    process(value: T, message: U): void;
};


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


let: ProcessIdentity<number, string> = myProcessIdentity;
let myprocessor("hello", 1)
console.log('return value is '`${}`)
