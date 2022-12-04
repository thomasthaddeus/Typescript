var firstName;
var lastName;
var fullName;
var age;
var ukCitizen;
firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;
if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
}
else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}
var x;
var y;
var a;
x = 'five';
y = 7;
a = x + y;
console.log(a);
var randomNumbers = [1, 10];
var nextNumber;
for (var i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers[i] = nextNumber;
}
console.log(randomNumbers);
