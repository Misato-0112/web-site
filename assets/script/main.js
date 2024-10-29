$(document).ready(function () {
    var hamburger = $(".hamburger-nav");
    $(".hamburger__button").on("click", function () {
        hamburger.toggleClass("hamburger-nav--active");
    });

    $(window).on("resize", function () {
        // console.log('resize');
        hamburger.removeClass("hamburger-nav--active");
    });
});

if (document.querySelector(".swiper")) {
    const mySwiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 0,

        pagination: {
            el: ".swiper-pagination",
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
