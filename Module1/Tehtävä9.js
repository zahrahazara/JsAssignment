// Get the number from the user
const number = prompt("Enter an integer:");

// Check if the number is a prime number
let isPrime = true;
for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

// Output the result to the HTML document
if (isPrime) {
  document.write(number + " is a prime number.");
} else {
  document.write(number + " is not a prime number.");
}


