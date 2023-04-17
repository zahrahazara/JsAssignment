'use strict'
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const startButton = document.getElementById('start');
const resultParagraph = document.getElementById('result');

startButton.addEventListener('click', function(event) {
  event.preventDefault(); // stop the form from submitting

  const num1 = parseInt(num1Input.value);
  const num2 = parseInt(num2Input.value);
  const operation = operationSelect.value;

  let result;
  if (operation === 'add') {
    result = num1 + num2;
  } else if (operation === 'sub') {
    result = num1 - num2;
  } else if (operation === 'multi') {
    result = num1 * num2;
  } else if (operation === 'div') {
    result = num1 / num2;
  }

  resultParagraph.textContent = `The result is ${result}`;
});
