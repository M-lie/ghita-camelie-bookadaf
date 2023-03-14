// App
function changeColor(btn) {
  btn.style.backgroundColor = "#2f8d8e";
}

const swiper = new Swiper(".swiper-filters", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  slidesPerView: "auto",
  spaceBetween: 1,
});

swiper = new Swiper(".swiper-featured-artworks", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  slidesPerView: 2.3,
});

// Landing page

const swiperlp = new Swiper(".swiper-screenshots", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Default parameters
  slidesPerView: 1,

  // Breakpoints:
  breakpoints: {
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
    },
  },
});
