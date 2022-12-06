interface Identity<T, U> {
  value: T;
  message: U;
}

var object1: Identity<number, string> = {
  value: 5,
  message: "Hello World",
};
var object2: Identity<string, number> = {
  value: "Hello World",
  message: 5,
};

interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

var processor1: ProcessIdentity<number, string> = processIdentity;
var processor2: ProcessIdentity<string, number> = processIdentity;

var returnNumber1 = processor1(5, "Hello");
var returnNumber2 = processor2("Hello", 5);
