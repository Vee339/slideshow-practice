var current = 0;
var total = 4;

const prev = document.getElementById("prev");
const next = document.getElementById("next");

next.addEventListener("click", function () {
  current++;

  if (current >= total) {
    current = 0;
  }

  const slides = document.getElementsByClassName("slide");
  // Loop through the slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the selected slide
  slides[current].style.display = "block";
});

prev.addEventListener("click", function () {
  current--;
  if (current <= 0) {
    current = total - 1;
  }

  const slides = document.getElementsByClassName("slide");
  // Loop through the slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the selected slide
  slides[current].style.display = "block";
});
