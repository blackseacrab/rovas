'use strict';

const howBoxEl = document.querySelector('.how-box');
const howItems = document.querySelectorAll('.how__item');
const mediaQuery450px = window.matchMedia('(max-width: 450px)');

const howAnimations = function () {
  const handleMobileChange = function (e) {
    // Check if the media query is true
    if (e.matches) {
      // Then log the following message to the console
      console.log(`450px`);

      howItems.forEach((item, i) => {
        const howCardsAnimations = function (entries, observer) {
          const [entry] = entries;

          if (!entry.isIntersecting) return;
          // console.log(entry);
          console.log(entry);
          item.classList.add('slide-in-bottom');

          //STOP OBSERVING
          observer.unobserve(entry.target);
        };

        const howBoxObserver = new IntersectionObserver(howCardsAnimations, {
          root: null,
          threshold: 0,
          // rootMargin: '100px',
        });

        const curItem = document.querySelector(`.how__item--${i + 1}`);

        howBoxObserver.observe(curItem);
      });
    } else {
      const howCardsAnimations = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        howItems.forEach((el, i) => {
          el.classList.add('slide-in-bottom');
          el.style.animationDelay = `${(i + 1) * 250}ms`;
        });
        //STOP OBSERVING
        observer.unobserve(entry.target);
      };

      const howBoxObserver = new IntersectionObserver(howCardsAnimations, {
        root: null,
        threshold: 0,
      });

      howBoxObserver.observe(howBoxEl);
    }
  };
  // Register event listener
  mediaQuery450px.addListener(handleMobileChange);

  // Initial check
  handleMobileChange(mediaQuery450px);
};
export const howCaller = function () {
  if (
    document.querySelector('.how-box') !== null &&
    document.querySelectorAll('.how__item') !== null
  ) {
    howAnimations();
  } else {
    return;
  }
};
