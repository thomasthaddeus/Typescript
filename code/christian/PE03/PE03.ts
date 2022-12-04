let firstName;
let lastName;
let fullName;
let age;
let ukCitizen;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) 
{
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}
let x;
let y;
let a;

x = 'five';
y = 7;
a = x + y;

console.log(a);

let randomNumbers = [1,10];
let nextNumber = x;
for (let i = 0; i < 10; i++) 
{
nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
randomNumbers[i] = nextNumber;
}
console.log(randomNumbers);