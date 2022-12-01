/*  Course:     IS 312 – Web Design and Programming
 *   Quarter:    Fall 2022-23
 *   Your Name:  Thaddeus Thomas
 *   Task #1:    Input Validation
 *   For this task you will need to create two functions:
 *   1. A function that creates a input prompt that requests the user to input
 *        a number between 1 and 20.
 *   2. A function to validate the input the user gave,
 *        to verify that the user’s input is valid and a number.
 */

// Task #1
function prompt(message?: string | number, _default?: string | number): string | number
const numRet = (x: (usrInput: string) => any ): number => { return Number(x) };


function inputNumber() {
    let usrInput = prompt("Please input a number between 1 & 20. ");
    const num1 = numRet
    validInput(num1);
}

function validInput(input) {
    if(typeof input === "number" && input >= 1 && input <= 20) {
        console.log(`"${input} is a number between 1 & 20!"`);
        return true
    } else {
        console.log(`"${input} that is not a valid answer"`);
        return false
    }
}

inputNumber()
const num1 = numRet

// Task #2
function taskTwo(p1: number = num1, p2: number = num1) {
    if (p1 <= 0) {
        return p2
    } else {
        while (p1 > 0) {
            p2 = p1 * p2
            taskTwo(p1, p2)
            p1 -= 1
        return p1;
        }
    }
}

// Task #3 - Fibonacci
function fibonacci(i = inputNumber()) {
    var x: number = 0 ;
    var y: number = 1 ;
    var j = 0;
    while (i > j) {
        var alpha: number = x + y
        x = y
        y = alpha
        j += 1
    return i;
    }
}

fibonacci()