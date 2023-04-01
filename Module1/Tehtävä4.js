// Get the student's name
let name = prompt("What is your name?");

// Draw a random number from 1 to 4
const randomNumber = Math.floor(Math.random() * 4) + 1;

// Use a switch statement to assign the house based on the random number
let house;
switch (randomNumber) {
  case 1:
    house = "Gryffindor";
    break;
  case 2:
    house = "Slytherin";
    break;
  case 3:
    house = "Hufflepuff";
    break;
  case 4:
    house = "Ravenclaw";
    break;
  default:
    house = "unknown";
}

// Output the result to the HTML document
document.write(name + ", you are " + house + ".");
