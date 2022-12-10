// Task #4

class ProcessIdentityClass<X,Y> {
	private value: X;
	private message: Y;

	constructor(value: X, message: Y) {
		this.value = value;
		this.message = message;
	}

	getIdentity() : X {
		console.log(this.message);
		return this.value;
	}
}

let processorInstance1 : ProcessIdentityClass<number, string>;
processorInstance1 = new ProcessIdentityClass(0, "hello");

let output = processorInstance1.getIdentity();
console.log(output)