'use strict';

const featuredInBox = document.querySelector('.featured-in__logos');
const featuredInItems = document.querySelectorAll('.featured-in__logo');

const featuredInAnimation = function () {
  const featuredInAnimationItems = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    featuredInItems.forEach((el, i) => {
      el.classList.add('fade-in-bottom');
      el.style.animationDelay = `${(i + 1) * 200}ms`;
    });
    //STOP OBSERVING
    observer.unobserve(entry.target);
  };

  const featuredInBoxObserver = new IntersectionObserver(
    featuredInAnimationItems,
    {
      root: null,
      threshold: 0,
    }
  );

  featuredInBoxObserver.observe(featuredInBox);
};
export const featuredInCaller = function () {
  if (
    document.querySelector('.featured-in__logos') !== null &&
    document.querySelectorAll('.featured-in__logo') !== null
  ) {
    featuredInAnimation();
  } else {
    return;
  }
};
