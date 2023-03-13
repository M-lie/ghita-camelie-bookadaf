function changeColor(btn) {
    btn.style.backgroundColor = "#2f8d8e";
}


const swiper = new Swiper('.swiper-filters', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 'auto',
    spaceBetween: 1,
});

swiper = new Swiper('.swiper-featured-artworks', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 2.3,
});