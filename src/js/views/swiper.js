'use strict';

export const swiperCaller = function () {
  if (document.querySelector('.mySwiper') !== null) {
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      grabCursor: true,
      effect: 'creative',
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ['-120%', 0, -500],
        },
        next: {
          shadow: true,
          translate: ['120%', 0, -500],
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    return;
  }
};
