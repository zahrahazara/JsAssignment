'use strict';
// show map using Leaflet library. (L comes from the Leaflet library)
const map = L.map('map', {tap: false});
L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
}).addTo(map);
map.setView([60, 24], 7);


// Get references to the HTML elements
const gameLink = document.getElementById("game-link");
const playerForm = document.getElementById("player-form");
const playerName = document.querySelector(".box table tr:nth-child(1) td");
const playerModal = document.getElementById("player-modal");
const pageTitle = document.querySelector(".page-title");
const gameStatus = document.getElementById("game-status");
const distanceTable = document.getElementById("distance-table");
const continueButton = document.getElementById("continue-button");


gameLink.addEventListener("click", function(event) {
  event.preventDefault();
  playerModal.classList.add("visible");
});

playerForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const playerName = playerName.value;
  if (playerName) {
    playerModal.classList.remove("visible");
    pageTitle.textContent = "Welcome, " + playerName + "!";
    gameStatus.querySelector("td:first-child").textContent = "Player Name: " + playerName;
    map.addEventListener("click", function(event) {
      // handle map click event
    });
  }
});

// function to fetch data from API
async function getData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Inlavid server input');
  }
  const data = await response.json();
  return data
}

// function to update game info
function updateGame(game) {
  const name = document.querySelector('#player-name').innerHTML = game.name;
  const pFlight = document.querySelector('#p-flight').innerHTML = game.flight;
  const pRange = document.querySelector('#p-range').innerHTML = game.range;
  let currentToDiamond = document.querySelector('#goal-distance');
  if (game.distance_to_goal <= 300) {
    currentToDiamond.innerHTML = "Etäisyys timanttiin on noin 0 - 300 km.";
  } else if (game.distance_to_goal > 300 && game.distance_to_goal <= 600) {
    currentToDiamond.innerHTML = "Etäisyys timanttiin on noin 300 - 600 km.";
  } else if (game.distance_to_goal > 600) {
    currentToDiamond.innerHTML = "Etäisyys timanttiin on yli 600 km.";
  } else {
    currentToDiamond.innerHTML = "abc";
  }

}

async function gameSetup() {
  try {
    const gameData = await getData('http://127.0.0.1:5000/newgame?player=Martti');
    console.log(gameData);
    updateGame(gameData.game);
    console.log(gameData.game.distance_to_goal);
  } catch (error) {
    console.log(error);
  }
}
gameSetup();

