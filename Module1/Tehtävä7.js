const rollDice = numRolls => {
  let diceSum = 0;
  for (let i = 0; i < numRolls; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Roll ${i+1}: ${roll}`);
    diceSum += roll;
  }
  console.log(`Total sum: ${diceSum}`);
}
