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

const cardBox = document.querySelector('.cards');
const card = document.querySelectorAll('.card');

const mediaQuery450px = window.matchMedia('(max-width: 450px)');

const galleryPgAnimation = function () {
  const handleMobileChange = function (e) {
    // Check if the media query is true
    if (e.matches) {
      // Then log the following message to the console
      card.forEach((item, i) => {
        const cardsAnimations = function (entries, observer) {
          const [entry] = entries;

          if (!entry.isIntersecting) return;
          console.log(entry);

          item.classList.add('slide-in-bottom');

          //STOP OBSERVING
          observer.unobserve(entry.target);
        };

        const boxObserver = new IntersectionObserver(cardsAnimations, {
          root: null,
          threshold: 0,
          rootMargin: '20px',
        });
        const curCard = document.querySelector(`.card__img-box--${i + 1}`);

        boxObserver.observe(curCard);
      });
    } else {
      const cardsAnimations = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        card.forEach((el, i) => {
          el.classList.add('slide-in-bottom');
          el.style.animationDelay = `${(i + 1) * 250}ms`;
        });
        //STOP OBSERVING
        observer.unobserve(entry.target);
      };

      const boxObserver = new IntersectionObserver(cardsAnimations, {
        root: null,
        threshold: 0,
      });

      boxObserver.observe(cardBox);
    }
  };
  // Register event listener
  mediaQuery450px.addListener(handleMobileChange);

  // Initial check
  handleMobileChange(mediaQuery450px);
};

export const galleryPgHeroCaller = function () {
  if (
    document.querySelector('.cards') !== null &&
    document.querySelectorAll('.card') !== null
  ) {
    galleryPgAnimation();
  } else {
    return;
  }
};
