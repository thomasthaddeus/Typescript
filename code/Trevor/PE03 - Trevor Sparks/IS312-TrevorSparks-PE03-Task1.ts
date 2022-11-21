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


