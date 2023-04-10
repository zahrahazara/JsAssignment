const numbers = [];

function addNumber() {
  const input = parseInt(document.getElementById("number-input").value);
    if (input !== 0 && !isNaN(input)) {
      numbers.push(input);
    document.getElementById("number-input").value = "";
  }
}

function displayNumbers() {
  const sortedNumbers = numbers.sort((a, b) => b - a);
  let output = "The given numbers are: ";
    for (let i = 0; i < sortedNumbers.length; i++) {
      output += sortedNumbers[i] + " ";
  }
  document.getElementById("number-list").textContent = output;
}