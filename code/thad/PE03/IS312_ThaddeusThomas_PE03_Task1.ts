/*
 * DATE:    10-20-2022
 * AUTHOR:  Thaddeus Thomas
 * CLASS:   IS 312 | FALL '22
 * TASK:    PE03 - TASK #1
 *
 * Instructions:
 * --------------------------------------------------------------------------------------
 * For this exercise you will examine the following code,
 *  and then apply TypeScript types to the variable declarations.
 * The resulting JavaScript should look identical once you have completed this task.
 * You should note in your lab report any observations about
 *  the outcomes or issues you had with this task.
 */

// TypeScript
let firstName: string;
let lastName: string;
let fullName: string;
let age: number;
let ukCitizen: boolean;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = `${firstName} ${lastName}`;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}
