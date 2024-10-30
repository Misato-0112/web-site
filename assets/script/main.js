$(document).ready(function () {
    var hamburger = $(".hamburger-nav");
    $(".hamburger__button").on("click", function () {
        hamburger.toggleClass("hamburger-nav--active");
    });

    $(window).on("resize", function () {
        hamburger.removeClass("hamburger-nav--active");
    });

    if ($(".accordion").length > 0) {
        $(".accordion__item").click(function () {
            var parentItem = $(this);
            var detail = parentItem.find(".accordion__detail");
            var button = parentItem.find(".accordion-summary__button");

            if (detail.hasClass("accordion__detail--active")) {
                detail.removeClass("accordion__detail--active");
                button.removeClass("accordion-summary__button--active");
                parentItem.removeClass("accordion__item--active");
            } else {
                detail.addClass("accordion__detail--active");
                button.addClass("accordion-summary__button--active");
                parentItem.addClass("accordion__item--active");
            }
        });
    }

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
