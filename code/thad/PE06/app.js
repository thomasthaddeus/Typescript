/*  Course:     IS 312 – Web Design and Programming
 *  Quarter:    Fall 2022-23
 *  Your Name:  Thaddeus Thomas
 *  Task #1:    Declaring an Interface
 *  Task #2     Instancing an Interface
 *  Task #3     Extending Interfaces
 *  Task #4     Learning And Challenges
 */
;
var myPizza = {
    type: 'cheese',
    slices: 8,
    crust: 'stuffed'
};
console.log(myPizza);
// Task #2
function checkSlices() {
    var a = 1;
    var b = 8;
    var isBetween = function (a, b, i) { return i > a && i < b; };
    return isBetween;
}
;
;
