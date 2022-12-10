var processIdentityClass = /** @class */ (function () {
    function processIdentityClass(value, message) {
        this.value = value;
        this.message = message;
    }
    processIdentityClass.prototype.process = function () {
        return this.value;
    };
    return processIdentityClass;
}());
var processInstance = new processIdentityClass(0, "hello");
var returnval = processInstance.process();
console.log(returnval);
// processInstance.value = '100';
// Task #4
// class Dog {
// 	name
// 	age	
// 	bark(name) {
// 		this.name + " goes woof woof"
// 	}
// }
// 	// constructor(name, birthyear : number) {
// 	// 	this.name = name;
// 	// 	this.age = currentYear - birthyear;
// 	//   }
// }
// let spot = Dog() // Instantiation
// spot.bark()
