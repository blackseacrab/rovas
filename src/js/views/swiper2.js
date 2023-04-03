'use strict';

export const swiperCaller2 = function () {
  if (document.querySelector('.mySwiper2') !== null) {
    const swiper2 = new Swiper('.mySwiper2', {
      effect: 'coverflow',
      grabCursor: true,
      autoHeight: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      keyboard: {
        enabled: true,
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
