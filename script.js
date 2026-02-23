// Slideshow
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}, 3000);

// Music toggle
let music = document.getElementById("music");
function toggleMusic() {
  if (music.paused) music.play();
  else music.pause();
}

// Surprise
function showSurprise() {
  document.getElementById("surprise").style.display = "block";
}
