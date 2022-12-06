# Assignments

## PE01

```html

```

## PE02

```js

```

### Trevor

#### Task #1

```ts
// Declaring Variables
var firstName:string;
var lastName:string;
var fullName:string;
var age:number;
var ukCitizen: boolean;

// Initilizing variables
firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + ' '+ lastName;

// If else statement that checks if the bool value of 'ukCitizen' is true
if(ukCitizen){
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
       console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}
```

#### Task #2

```ts
// Declaring variables
var x: number;
var y: number;
var a: number;

// Initializing variables
x = 5;
y = 7;
a = x+y;

// Outputting the value of a
console.log(a);
```

#### Task #3

```ts
// Declaring variables
// The value of randomNumbers is initialized to an empty array
var randomNumbers: number[] = [];
var nextNumber: number;

// Pushes random numbers to the randomNumber array
for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}

// Outputs the randomNumbers array
console.log(randomNumbers);
```

## PE04

```ts
//let pizzaSlices:string[] = ["Cheese", "Peperoni", "Sausage", "BBQ", "Mac & Cheese", "Chicken Alfredo"];

let pizzaSlices =[
    {
        name: "Cheese",
        type: "Vegetarian",
        price: 40

    },{
        name: "Pepperoni",
        type: "Meat",
        price: 35

    },{
        name: "Sausage",
        type: "Meat",
        price: 35

    },{
        name: "BBQ Chicken",
        type: "Meat",
        price: 35

    },{
        name: "Mac & Cheese",
        type: "Vegetarian",
        price: 40

    },{
        name: "Chicken Alfredo",
        type: "Meat",
        price: 35

    }
]

const transactions = [
    {slices: ["Mac & Cheese", "Mac & Cheese", "Pepperoni", "Pepperoni", "BBQ Chicken"], cost: 220},
    {slices: ["Cheese", "Pepperoni", "Pepperoni", "Chicken Alfredo", "Pepperoni", "Cheese"], cost: 200},
    {slices: ["Chicken Alfredo", "Mac & Cheese", "BBQ Chicken", "Chicken Alfredo"], cost: 145},
    {slices: ["Sausage", "BBQ Chicken", "BBQ Chicken", "BBQ Chicken", "Sausage", "Sausage", "Chicken Alfredo"], cost: 245},
    {slices: ["Chicken Alfredo", "Mac & Cheese", "BBQ Chicken"], cost: 110}
]

var totalSales: number = 0 ;

totalSales = transactions.reduce((totalSum, currentSum) => totalSum + currentSum.cost, 0);

console.log(`You’ve made $${totalSales} today!`);


for(let i = 0; i< transactions.length; i++){
    const currentTransactionSlice = transactions[i].slices;
    console.log(currentTransactionSlice);

    let pizzaSum = currentTransactionSlice.reduce(...);
}
```

## PE05

```ts
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
    outputHTML.innerHTML = <p>The user input: `${userInput}`</p>
                           <p>Task 2 function answer: `${task2FunctionAnswer}`</p>
                           <p>The value of the Fibonacci sequence at the `${userInput}` position is `${calcedFib}`</p>;
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PE05 - Trevor Sparks</title>
    <script type="text/javascript" src="PE05.js"></script>
</head>
<body>
    <h1>Click the button to perform calculations and get user input</h1>
    <button onclick="whenTheButtonIsClicked();">Click me!</button>
   <div id="output"></div>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PE05 - Trevor Sparks</title>
    <script type="text/javascript" src="PE05.js"></script>
</head>
<body>
    <h1>Click the button to perform calculations and get user input</h1>
    <button onclick="whenTheButtonIsClicked();">Click me!</button>
    <p id="userInput">The user input:</p>
    <p id="task2FunctionAnswer">Task 2 function answer:</p>
    <p id="calcedFib">The Fibonacci value and the users input index: </p>
</body>
</html>
```

## PE06

```ts
interface Pizza{
    type: string,
    slices: number,
    crust?: string
}

interface Toppings extends Pizza{
    sauce: "Tomato" | "Alfredo" | "BBQ Sauce",
    pineapple: boolean,
    parmesan: boolean,
    crust?: string
}

var myPizza: Toppings = ({
    type: "Meat lovers",
    slices: 6,
    sauce: "Tomato",
    pineapple: false,
    parmesan: true,
    crust: "Stuffed"
});

console.log("Number of slices in myPizza: ", myPizza.slices);

function checkSlices(pizza: Toppings): string{
    if(pizza.slices > 8){
        return "The number of slices is too high";
    }else if(pizza.slices == 8){
        return `The whole pizza is remaining`;
    }else{
        return `There is ${pizza.slices}/8 remaining of the pizza`;
    }
};

console.log(checkSlices(myPizza));
```

## PE07

```ts

```

## PE08

```ts

```

## PE09

```ts

```

## PE10

```ts

```
