'use strict';

export const openBigGalleryCaller = function () {
  // check if page contains variables
  if (
    document.querySelector('.cards') !== null &&
    document.querySelector('.overlay') !== null &&
    document.querySelectorAll('.gallery-popup__close') !== null
  ) {
    const cardsContainer = document.querySelector('.cards');
    const overlay = document.querySelector('.overlay');
    const btnClosePopupGallery = document.querySelectorAll(
      '.gallery-popup__close'
    );
    const allGallerys = document.querySelectorAll('.gallery-popup');

    //close popup
    const closeGallery = function () {
      allGallerys.forEach(el => el.classList.add('hidden'));
      overlay.classList.add('hidden');
    };

    //click to close popup
    btnClosePopupGallery.forEach(btn =>
      btn.addEventListener('click', function () {
        closeGallery();
      })
    );

    cardsContainer.addEventListener('click', function (e) {
      if (
        e.target.classList.contains('swiper-button-next') ||
        e.target.classList.contains('swiper-button-disabled') ||
        e.target.classList.contains('swiper-button-prev') ||
        e.target.classList.contains('cards')
      ) {
        return;
      } else {
        const clicked = e.target.closest('.card__img-box');
        const curGalleryBox = document.querySelector(
          `.gallery-popup--${clicked.dataset.tab}`
        );

        //open big gallery
        const openBigGallery = function () {
          curGalleryBox.classList.remove('hidden');
          overlay.classList.remove('hidden');
        };
        openBigGallery();

        //key to close popup
        document.addEventListener('keydown', function (e) {
          if (
            e.key === 'Escape' &&
            !curGalleryBox.classList.contains('hidden')
          ) {
            closeGallery();
          }
        });
      }
    });

    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('overlay')) {
        closeGallery();
      }
    });
  } else {
    return;
  }
};
