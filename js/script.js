// App
function changeColor(btn) {
  btn.style.backgroundColor = "#2f8d8e";
}

const swiper1 = new Swiper(".swiper-filters", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  slidesPerView: "auto",
  spaceBetween: 1,
});

const swiper2 = new Swiper(".swiper-featured-artworks", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  slidesPerView: 2.3,
});

// Landing page
const swiper3 = new Swiper(".swiper-screenshots", {
  direction: "horizontal",
  loop: true,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

