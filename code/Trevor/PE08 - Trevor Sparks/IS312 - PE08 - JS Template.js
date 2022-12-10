// Upper and lower limit set
var upperLimit = 21;
var lowerLimit = 0;
// Initialization of userInput var
var userInput;
// function to validate user input. It checks to see if the users input is in between two
// pre-specified values
function myFunction() {
    while (true) {
        try {
            //getUserInput();
            userInput = Number(prompt('Please input a number between 1 and 20'));
            // call the validate user function to make sure the user input a valid number
            if (userInput > lowerLimit && userInput < upperLimit) {
                return userInput;
            }
            else {
                alert("Number not within range, please try again.");
                throw "Number not within range.";
            }
        }
        catch (e) {
            console.log(e);
            continue;
        }
        finally {
            console.log("The user input: " + userInput);
        }
    }
}
