'use strict';

import {
  DEFAULT_ANIMATION,
  DEFAULT_ANIMATION_DELAY,
  MEDIA_QUERY_450_PX,
  TERTIARY_ANIMATION,
} from '../config';
import { compositionAnimation } from '../helpers';

export const galleryPgHeroCaller = function () {
  if (
    document.querySelector('.cards') == null &&
    document.querySelectorAll('.card').length == 0
  ) {
    return;
  } else {
    const cardBox = document.querySelector('.cards');
    const cardEl = document.querySelectorAll('.card');
    console.log(cardEl);
    const galleryPgAnimation = function () {
      const handleMobileChange = function (e) {
        // Check if the media query is true
        if (e.matches) {
          // Then log the following message to the console
          cardEl.forEach((item, i) => {
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
          compositionAnimation(
            cardEl,
            TERTIARY_ANIMATION,
            DEFAULT_ANIMATION_DELAY,
            cardBox
          );
        }
      };
      // Register event listener
      MEDIA_QUERY_450_PX.addListener(handleMobileChange);

      // Initial check
      handleMobileChange(MEDIA_QUERY_450_PX);
    };

    galleryPgAnimation();
  }
};
