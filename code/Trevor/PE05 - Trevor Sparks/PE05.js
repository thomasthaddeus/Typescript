// Upper and lower limit set
var upperLimit = 21;
var lowerLimit = 0;
var userInput;
function getUserInput() {
    userInput = Number(prompt('Please input a number between 1 and 20'));
    validateUserInput(upperLimit, lowerLimit, userInput);
    return userInput;
}
function validateUserInput(upperLimit, lowerLimit, userInput) {
    if (userInput > lowerLimit && userInput < upperLimit) {
        return userInput;
    }
    else {
        console.log("The number is too high or too low");
        getUserInput();
    }
}
function someFunction(p1, p2) {
    if (p1 <= 0) {
        return p2;
    }
    else {
        p2 = p1 * p2;
        p1--;
        return someFunction(p1, p2);
    }
}
function calcFibb(input) {
    if (input === 1) {
        return 0;
    }
    else if (input === 2) {
        return 1;
    }
    else {
        return calcFibb(input - 2) + calcFibb(input - 1);
    }
}
function whenTheButtonIsClicked() {
    getUserInput();
    var task2FunctionAnswer = someFunction(userInput, userInput);
    var calcedFib = calcFibb(userInput);
    var outputHTML = document.getElementById('output');
    outputHTML.innerHTML = "<p>The user input: ".concat(userInput, "</p>\n                            <p>Task 2 function answer: ").concat(task2FunctionAnswer, "</p>\n                            <p>The value of the Fibonacci sequence at the ").concat(userInput, " position is ").concat(calcedFib, "</p>");
}
