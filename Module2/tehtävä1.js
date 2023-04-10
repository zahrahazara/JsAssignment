// Prompt the user for five numbers and store them in an array
const numbers =[];
for (let i = 0; i < 5; i ++){
  const number = parseInt(prompt('Enter number ${i + 1}:'))
  numbers.push(number);
}

// Reverse the order of the numbers using a for-loop
const reversedNumbers = [];
for (let i = number.length -1; i >= 0 ; i -- ){
  reversedNumbers.push(numbers[1]);
}

// Display the reversed numbers as HTML elements
const outputDiv = document.getElementById("output");
for (let i = 0; i < reversedNumbers.length; i ++){
  const number = reversedNumbers[i];
  const numberElement = document.createElement("p");
  numberElement.textContent = number;
  outputDiv.appendChild(numberElement)
}

