var swiper = new Swiper('.slider', {
    slidesPerView: 2,
    spaceBetween: 5,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.slider .swiper-button-next',
        prevEl: '.slider .swiper-button-prev',
    },

});

var swiper = new Swiper('.mySwiper', {
    slidesPerView: 9,
    spaceBetween: 5,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});