function Input() {
    var input = console.log("input a number between 1 and 20.");
    return validateInput(input);
}
function validateInput(input) {
    if (input >= 1 && input <= 20 && !isNaN(input)) {
        return input;
    }
    else {
        console.log("Wrong number!");
        return Input();
    }
}
var input = Input();
console.log(input);
function someFunction(parameter1, parameter2) {
    if (parameter1 <= 0) {
        return parameter2;
    }
    else {
        parameter2 *= parameter1;
        parameter1--;
        return someFunction(parameter1, parameter2);
    }
}
var output = someFunction(5, 2);
console.log(output);
var a = parseInt('Input Value: ');
var b = 0, c = 1, d;
console.log('Fibonacci Sequence:');
for (var i = 1; i <= a; i++) {
    console.log(b);
    d = b + c;
    b = c;
    c = d;
}
console.log('Program end');
