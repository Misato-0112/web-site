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
