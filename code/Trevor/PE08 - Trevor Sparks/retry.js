function primitiveMultiply(num1, num2) {
  let chance = Math.random();
  if (chance > 0.2) {
    return num1 * num2;
  }

  throw new Error("MultiplicatorUnitFailiure");
}

function Calculate(number1, number2) {
  let result = 0;
  for (;;) {
    try {
      result = primitiveMultiply(number1, number2);
      return result;
    } catch (e) {
      console.log("this try failed, attempting again");
    }
  }
}

console.log("hello from retry", Calculate(3, 6));
