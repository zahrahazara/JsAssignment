const form = document.querySelector('#source');
const target = document.querySelector('#target');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Stop the default action of the form

  const firstName = form.querySelector('input[name="firstname"]').value;
  const lastName = form.querySelector('input[name="lastname"]').value;

  target.textContent = `Your name is ${firstName} ${lastName}`;

  form.reset(); // Reset the form after submission
});

