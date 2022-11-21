// Declaring variables
// The value of randomNumbers is initilized to an empty array
var randomNumbers: number[] = [];
var nextNumber: number;

// Pushes random numbers to the randomNumber arary 
for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;      
    randomNumbers.push(nextNumber);
}

// Outputs the randowmNumbers array   
console.log(randomNumbers);
