/*IS312 - PE08: Validating User Input & Regular Expressions
All of your JS code should be included in this file.
The myFunction() function can be modified in whatever way you need to, to complete the assigned task(s) as appropriate.

Please note, as this is a HTML based interface the prompt() will be functional, as it will use the browser's Window object of which
prompt() is a method.  This will not be a Command Line program so readline is not necessary.  You may have to copy & paste your code into
this file from the TypeScript compilers' JS output.
*/

// This is the core function called by the button.
function myFunction() {
    var uI = prompt("Please input a number between 1 & 20. ");
    if (typeof uI === "number" && uI >= 1 && uI <= 20) {
        console.log("\"".concat(uI, " is a number between 1 & 20!\""));
        return true;
    } try {
        console.log("\"".concat(uI, " that is not a valid answer\""));
        while (p1 > 0) {
            p2 = p1 * p2;
            p1 -= 1;
            return p1;
        }
    } finally {
        if (p1 <= 0) {
            return p2;
        }
        var x = 0;
        var j = 0;
        while (i > 0) {
            var alpha = x + y;
            x = y;
            y = alpha;
            j += 1;
        }
    }
}

myFunction();