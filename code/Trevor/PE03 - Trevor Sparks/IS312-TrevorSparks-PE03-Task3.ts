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
