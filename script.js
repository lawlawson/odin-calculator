let firstNumber = '';
let operator = '';
let secondNumber = '';

function addNumbers(num1, num2) {
  return num1 + num2;
}

function subtractNumbers(num1, num2) {
  return num1 - num2;
}

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

function divideNumbers(num1, num2) {
  return num1 / num2;
}

function operate(op, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (op === '+') {
    return addNumbers(num1, num2);
  } else if (op === '-') {
    return subtractNumbers(num1, num2);
  } else if (op === '*') {
    return multiplyNumbers(num1, num2);
  } else if (op === '/') {
    return divideNumbers(num1, num2);
  } else {
    return 'error';
  }
}

