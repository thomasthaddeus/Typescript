/*  Course:     IS 312 – Web Design and Programming
*   Quarter:    Fall 2022-23
*   Your Name:  Thaddeus Thomas
*   Task #1:    Input Validation
*   For this task you will need to create two functions:
*   1. A function that creates a input prompt that requests the user to input
       a number between 1 and 20.
    2. A function to validate the input the user gave,
         to verify that the user’s input is valid and a number.
*/

// Task #1
function inputNumber() {
    var usrInput = readInt("Please input a number between 1 & 20. ");
    validInput(usrInput);
}

function validInput(input: number) {
    if(typeof input === "number" && input >= 1 && input <= 20) {
        console.log(`"${input} is a number between 1 & 20!"`);
        return true
    } else {
        console.log(`"${input} that is not a valid answer"`);
        return false
    }
}

inputNumber()

// Task #2
function taskTwo(p1: number = usrInput, p2: number = <input>) {
    if (p1 <= 0) {
        return p2
    } else {
        for(let i = 1; i <= p1; --i){
            p2 = (p1 * p2);
            p1 = (p1 - 1);
        }
    }
}


// TODO:Task #3