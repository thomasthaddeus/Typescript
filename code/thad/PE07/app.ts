/*
** CLASS:   IS 312: Web Design and Programming
** ASGN:    PE07: Programming Exercise
** QUARTER: FALL 2022/23
** STUDENT: Thaddeus Thomas
** DATE:    11 DEC 2022
*/

/*Task #1
Paste your source code into the lab report under `1-4`
*/
interface Identity<T,U> {
    process(value: T, message: U): void;
};

let obj1: Identity<number, string>;
let obj2: Identity<string, number>;

// Task #2
interface ProcessIdentity<T, U> {
    (value: T, message: U): T
};

/* Task 2-1
Why do you think you would write it this way?
Probably because its used as a template. Either that or its used a function in comparisons

What benefits does it have?
You could parse strings with it relatively easily for finding duplicates.
*/

// Paste your source code into your lab report under Task 2-3
function processIdentity <T, U> (arg: T){
     (value: T, message: U): T
     return T
    };
    console.log(processIdentity<U>

/*
let: ProcessIdentity<number, string> = myProcessIdentity;
let myprocessor("hello", 1)
console.log('return value is ')
*/

/*
 Task 2-7
 How does Typescript handle it?
 - No Clue
*/
let processor = new ProcessIdentity<number, string>();

/*
return number1 and return number2

*/
