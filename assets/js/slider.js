const swiper = new Swiper('.swiper', {

    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },

        600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        769: {
            slidesPerView: 3,
            slidesPerGroup: 2,
        },

        1025: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});