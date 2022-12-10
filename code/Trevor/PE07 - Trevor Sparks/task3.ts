// Task #3
interface IProcessIdentity<T, U> {
	value: T;
	message: U;
	process() : T;
}

class processIdentityClass<X,Y> implements IProcessIdentity<X, Y> {
	value: X;
	message: Y;
	process() : X {
		return this.value;
	}
	constructor(value: X, message: Y) {
		this.value = value;
		this.message = message;
	}

}

let processInstance : processIdentityClass<number, string> = new processIdentityClass(0, "hello")
let returnval = processInstance.process();
console.log(returnval)
//processInstance.value = '100';