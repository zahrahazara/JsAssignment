const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let participants = [];

rl.question('Enter the names of six participants (one per line):\n', (answer) => {
  participants.push(answer.trim());
  if (participants.length < 6) {
    rl.prompt();
  } else {
    participants.sort().reverse();
    console.log('Participant List (in reverse alphabetical order):');
    for (let participant of participants) {
      console.log(`- ${participant}`);
    }
    rl.close();
  }
});

rl.prompt();
