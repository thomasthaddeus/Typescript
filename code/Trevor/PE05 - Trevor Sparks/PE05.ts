// Upper and lower limit set
const upperLimit: number = 21;
const lowerLimit: number = 0;
// Initialization of userInput var
let userInput:number;

//Function to get user input
function getUserInput(): number{
    // Use prompt to prompt the user for input, and the number function to
    // convert the recived string to a numeber
    userInput = Number(prompt('Please input a number between 1 and 20'));
    // call the validate user function to make sure the user input a valid number
    validateUserInput(upperLimit, lowerLimit, userInput);
    return userInput;
}

// function to validate user input. It checks to see if the users input is in between two
// pre-specified values
function validateUserInput(upperLimit: number, lowerLimit: number, userInput: number){
    if(userInput > lowerLimit && userInput < upperLimit){
        return userInput;
    }else{
        console.log("The number is too high or too low");
        getUserInput();
    }
}

// Task 2 function
function someFunction(p1: number, p2: number):number{
    if(p1 <= 0){
        return p2;
    }else{
        p2 = p1 * p2;
        p1--;
        return someFunction(p1,p2);
    }
} 

// recursive function to calculate the Fibonacci sequence at the user specified index
function calcFibb(input:number){
    if(input === 1){
        return 0;
    }else if(input === 2){
        return 1;
    }else{
        return calcFibb(input-2)+calcFibb(input-1);
    }
}

// funciton to call the get user function, calculate the other 
// necessary numbers, and output HTML to the webpage
function whenTheButtonIsClicked(){
    getUserInput();
    let task2FunctionAnswer = someFunction(userInput, userInput);
    let calcedFib = calcFibb(userInput);
    let outputHTML = document.getElementById('output');
    outputHTML.innerHTML = `<p>The user input: ${userInput}</p>
                            <p>Task 2 function answer: ${task2FunctionAnswer}</p>
                            <p>The value of the Fibonacci sequence at the ${userInput} position is ${calcedFib}</p>`;
}
