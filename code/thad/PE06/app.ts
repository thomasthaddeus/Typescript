/*  Course:     IS 312 – Web Design and Programming
 *  Quarter:    Fall 2022-23
 *  Your Name:  Thaddeus Thomas
 *  Task #1:    Declaring an Interface
 *  Task #2     Instancing an Interface
 *  Task #3     Extending Interfaces
 *  Task #4     Learning And Challenges
 */

// Task #1
interface Pizza {
    type: string,
    slices: number,
    crust?: string;
};

let myPizza: Pizza = {
    type: 'cheese',
    slices: 8,
    crust: 'stuffed'
};

console.log(myPizza)

// Task #2
function checkSlices () {
    let a: number = 1;
    let b: number = 8;
    const isBetween = (a, b, i) => i > a && i < b ;
    return isBetween;
};

// Task #3
interface Toppings extends Pizza {
    get sauce(): any;
    set sauce(string: 'tomato' | 'alfredo' | 'bbq sauce')
    pineapple?: boolean;
    parmesan?: boolean;
    crust?: boolean;
};
