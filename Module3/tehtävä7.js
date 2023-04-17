const trigger = document.getElementById("trigger");
const target = document.getElementById("target");

// add mouseover event listener to trigger element
trigger.addEventListener("mouseover", function() {
  target.src = "picB.jpg"; // change image source to picB.jpg
});

// add mouseout event listener to trigger element
trigger.addEventListener("mouseout", function() {
  target.src = "picA.jpg"; // change image source back to picA.jpg
});
