/*
 * DATE: 10-20-2022
 * AUTHOR: Thaddeus Thomas
 * CLASS: IS 312 | FALL '22
 * TASK: PE03 - TASK #3
 *
 * Instructions:
 * ------------------------------------
 * For this final task, you will modify the code below to
 *  define the array to a type that matches the type of the items in the array:
 * Note any interesting results, or errors in your lab report.
*/

// Typescript
let randomNumbers: number;
let nextNumber: number;

for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}

console.log(randomNumbers);
