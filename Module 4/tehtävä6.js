'use strict'
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchTerm = searchInput.value;
  const url = `https://api.chucknorris.io/jokes/search?query=${searchTerm}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      resultsContainer.innerHTML = '';
      if (data.total === 0) {
        resultsContainer.innerHTML = '<p>No jokes found. Please try again.</p>';
      } else {
        data.result.forEach(joke => {
          const article = document.createElement('article');
          const jokeText = joke.value;
          const p = document.createElement('p');
          p.innerText = jokeText;
          article.appendChild(p);
          resultsContainer.appendChild(article);
        });
      }
    })
    .catch(error => console.error(error));
});

