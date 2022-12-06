interface ProcessIdentity<T, U> {
  value: T;
  message: U;
  process(): T;
}

class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
  value: X;
  message: Y;
  constructor(value: X, message: Y) {
    this.value = value;
    this.message = message;
  }

  process(): X {
    return this.value;
  }
}

var processor = new processIdentity(5, "Hello World");
console.log(processor.process());
processor.value = 5;
console.log(processor.process());
