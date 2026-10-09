const display = document.querySelector('.display');
const digitButtons = document.querySelectorAll('.digit');
const clearButton = document.querySelector('.clear');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');

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

digitButtons.forEach((button) =>
  button.addEventListener('click', () => {
    if (operator) {
      secondNumber += button.textContent;
      display.textContent = secondNumber;
    } else {
      firstNumber += button.textContent;
      display.textContent = firstNumber;
    }
  }),
);

function clearCalculator() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  display.textContent = '0';
}

clearButton.addEventListener('click', clearCalculator);

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => {
    if (secondNumber) {
      calculate();
    }
    operator = button.dataset.op;
  }),
);

function calculate() {
  const result = operate(operator, firstNumber, secondNumber);
  display.textContent = result;
  firstNumber = result;
  secondNumber = '';
}

equalsButton.addEventListener('click', calculate);
