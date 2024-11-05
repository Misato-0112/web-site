$(document).ready(function () {
    // ハンバーガーメニューのフェードイン・フェードアウト
    var hamburger = $(".hamburger-nav");
    $(".hamburger__button").on("click", function () {
        hamburger.fadeToggle(300).toggleClass("hamburger-nav--active");
    });

    $(window).on("resize", function () {
        hamburger.removeClass("hamburger-nav--active").hide();
    });

    // アコーディオンのスライドイン・アウト
    if ($(".accordion").length > 0) {
        $(".accordion-summary__wrapper").click(function () {
            var parentItem = $(this).closest(".accordion__item");
            parentItem.find(".accordion__detail").slideToggle(300).toggleClass("accordion__detail--active");
            parentItem.find(".accordion-summary__button").toggleClass("accordion-summary__button--active");
            parentItem.toggleClass("accordion__item--active");
        });
    }

    // Swiperの設定
    if ($(".swiper").length > 0) {
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
});
