'use strict'
const target = document.querySelector("#target");

const listItem1 = document.createElement("li");
listItem1.textContent = "First item";

const listItem2 = document.createElement("li");
listItem2.textContent = "Second item";
listItem2.classList.add("my-item");

const listItem3 = document.createElement("li");
listItem3.textContent = "Third item";

target.appendChild(listItem1);
target.appendChild(listItem2);
target.appendChild(listItem3);