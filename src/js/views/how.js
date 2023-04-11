'use strict';

import { DEFAULT_ANIMATION_DELAY, TERTIARY_ANIMATION } from '../config';
import { compositionAnimation } from '../helpers';

export const howCaller = function () {
  if (
    document.querySelector('.how-box') == null &&
    document.querySelectorAll('.how__item').length == 0
  ) {
    return;
  } else {
    const howBoxEl = document.querySelector('.how-box');
    const howItems = document.querySelectorAll('.how__item');
    const mediaQuery450px = window.matchMedia('(max-width: 450px)');

    const howAnimations = function () {
      const handleMobileChange = function (e) {
        // Check if the media query is true
        if (e.matches) {
          // Then log the following message to the console

          howItems.forEach((item, i) => {
            const howCardsAnimations = function (entries, observer) {
              const [entry] = entries;

              if (!entry.isIntersecting) return;
              item.classList.add('slide-in-bottom');

              //STOP OBSERVING
              observer.unobserve(entry.target);
            };

            const howBoxObserver = new IntersectionObserver(
              howCardsAnimations,
              {
                root: null,
                threshold: 0,
                // rootMargin: '100px',
              }
            );

            const curItem = document.querySelector(`.how__item--${i + 1}`);

            howBoxObserver.observe(curItem);
          });
        } else {
          compositionAnimation(
            howItems,
            TERTIARY_ANIMATION,
            DEFAULT_ANIMATION_DELAY,
            howBoxEl
          );
        }
      };
      // Register event listener
      mediaQuery450px.addListener(handleMobileChange);

      // Initial check
      handleMobileChange(mediaQuery450px);
    };

    howAnimations();
  }
};
