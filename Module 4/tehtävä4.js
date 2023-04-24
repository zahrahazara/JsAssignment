'use strict'
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const searchTerm = searchInput.value;
  fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      resultsContainer.innerHTML = ''; // Clear previous results
      data.forEach(result => {
        const tvShow = result.show;
        const imageUrl = tvShow.image ? tvShow.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
        const article = document.createElement('article');
        article.innerHTML = `
          <h2>${tvShow.name}</h2>
          <a href="${tvShow.url}" target="_blank">${tvShow.url}</a>
          <img src="${imageUrl}" alt="${tvShow.name}">
          <div>${tvShow.summary}</div>
        `;
        resultsContainer.appendChild(article);
      });
    })
    .catch(error => console.error(error));
});
