class processIdentity<T, U> {
  private value: T;
  private message: U;
  constructor(value: T, message: U) {
    this.value = value;
    this.message = message;
  }
  getIdentity(): T {
    console.log(this.message);
    return this.value;
  }
}

var processor = new processIdentity(5, "Hello World");
console.log(processor.getIdentity());
