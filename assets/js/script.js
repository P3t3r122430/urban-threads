// ===============================
// HERO SLIDESHOW
// ===============================
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Init first slide
if (slides.length > 0) {
  showSlide(currentSlide);
  setInterval(nextSlide, 4000); // change slide every 4s
}

// ===============================
// MOBILE NAV (optional future step)
// ===============================
// You can expand here later if you want a hamburger menu
