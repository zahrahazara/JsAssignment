function even(numbers) {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

// Example array
const numbers = [2, 7, 4];

// Call the even() function and print the results to the console
const evenNumbers = even(numbers);
console.log("Original array:", numbers);
console.log("Even numbers array:", evenNumbers);
