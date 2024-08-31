const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operation = '';
let result = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'AC') {
      clearDisplay();
    } else if (value === '<') {
      backspace();
    } else if (value === '=') {
      calculate();
    } else if (['+', '-', '*', '/'].includes(value)) {
      operation = value;
      previousNumber = currentNumber;
      currentNumber = '';
      display.value = previousNumber + operation ;
    } else{
      currentNumber += value;
      if (previousNumber !== '' ) {
        display.value = previousNumber + operation + currentNumber ;
    } else {
      display.value = currentNumber;
    }
  }
 });
});

function clearDisplay() {
  display.value = '';
  currentNumber = '';
  previousNumber = '';
  operation = '';
  result = '' ;
}

function backspace() {
  currentNumber = currentNumber.slice(0, -1);
  display.value = currentNumber;
}

function calculate() {
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);
  let result;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 0;
  }

  display.value = result.toString();
  currentNumber = result.toString();
  previousNumber = '';
  operation = ''; 
}
