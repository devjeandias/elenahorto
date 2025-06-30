$(function() {
    $('.slider.dobble').bxSlider({
        slideWidth: 257,
        minSlides: 2,
        maxSlides: 2,
        moveSlides: 1,
        slideMargin: 30,
        pager: false
    });

    $('.slider.single').bxSlider({
        slideWidth: 543,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        pager: false
    });

    $('.slider-events').bxSlider({
        slideWidth: 257,
        minSlides: 1,
        maxSlides: 4,
        slideMargin: 30,
        moveSlides: 1,
        controls: false,
        pager: true
    });
});