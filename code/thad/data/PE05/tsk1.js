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
var numRet = function (x) { return Number(x); };
function inputNumber() {
    var usrInput = prompt("Please input a number between 1 & 20. ");
    var num1 = numRet;
    validInput(num1);
}
function validInput(input) {
    if (typeof input === "number" && input >= 1 && input <= 20) {
        console.log("\"".concat(input, " is a number between 1 & 20!\""));
        return true;
    }
    else {
        console.log("\"".concat(input, " that is not a valid answer\""));
        return false;
    }
}
inputNumber();
var num1 = numRet;
// Task #2
function taskTwo(p1, p2) {
    if (p1 === void 0) { p1 = num1; }
    if (p2 === void 0) { p2 = num1; }
    if (p1 <= 0) {
        return p2;
    }
    else {
        while (p1 > 0) {
            p2 = p1 * p2;
            taskTwo(p1, p2);
            p1 -= 1;
            return p1;
        }
    }
}
// Task #3 - Fibonacci
function fibonacci(i) {
    if (i === void 0) { i = inputNumber(); }
    var x = 0;
    var y = 1;
    var j = 0;
    while (i > j) {
        var alpha = x + y;
        x = y;
        y = alpha;
        j += 1;
        return i;
    }
}
fibonacci();
