function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
// Get a reference to the unordered list element in the HTML document
const resultElement = document.getElementById('result');

// Roll the dice until the result is 6
let roll;
do {
  roll = rollDice();
  const listItem = document.createElement('li');
  listItem.textContent = `Dice roll: ${roll}`;
  resultElement.appendChild(listItem);
} while (roll !== 6);
