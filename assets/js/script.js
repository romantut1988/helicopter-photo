function test(a, b) {
    return a + b
}

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
//# sourceMappingURL=script.js.map
