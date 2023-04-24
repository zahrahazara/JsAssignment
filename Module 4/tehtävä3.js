'use strict';
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsDiv = document.getElementById("results");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value;

  // Clear old search results
  resultsDiv.innerHTML = "";

  // Send search request to TVMaze API
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
  const data = await response.json();

  // Loop through search results and display information for each show
  data.forEach((result) => {
    const tvShow = result.show;
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const name = document.createTextNode(tvShow.name);
    const summary = document.createElement("div");
    const img = document.createElement("img");
    const a = document.createElement("a");

    // Set show name
    h2.appendChild(name);
    article.appendChild(h2);

    // Set show summary
    summary.innerHTML = tvShow.summary;
    article.appendChild(summary);

    // Set show image
    const imageSrc = tvShow.image ? tvShow.image.medium : "https://via.placeholder.com/210x295?text=Not%20Found";
    img.setAttribute("src", imageSrc);
    img.setAttribute("alt", tvShow.name);
    article.appendChild(img);

    // Set show details link
    a.setAttribute("href", tvShow.url);
    a.setAttribute("target", "_blank");
    a.appendChild(document.createTextNode("View details"));
    article.appendChild(a);

    // Add article to search results
    resultsDiv.appendChild(article);
  });
});

