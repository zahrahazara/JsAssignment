const numbers = [];
let inputNumber;

while (true) {
  inputNumber = parseInt(prompt("Enter a number:"));

  if (numbers.includes(inputNumber)) {
    console.log("Number already given. Exiting program.");
    break;
  }

  numbers.push(inputNumber);
}

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);
