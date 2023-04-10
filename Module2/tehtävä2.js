// Get references to the form and output div
const form = document.querySelector('form');
const participantList = document.getElementById('participantList');

// Add event listener to form submit button
form.addEventListener('submit', function(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get the number of participants from the form input
  const numParticipants = parseInt(form.elements.numParticipants.value);

  // Prompt the user for each participant name and store them in an array
  const participants = [];
  for (let i = 0; i < numParticipants; i++) {
    const name = prompt(`Enter participant ${i+1} name:`);
    participants.push(name);
  }

  // Sort the participant names in alphabetical order
  participants.sort();

  // Display the participant names as an ordered list
  const ol = document.createElement('ol');
  for (let i = 0; i < participants.length; i++) {
    const li = document.createElement('li');
    li.textContent = participants[i];
    ol.appendChild(li);
  }
  participantList.innerHTML = '';
  participantList.appendChild(ol);
});
