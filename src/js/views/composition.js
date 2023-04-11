'use strict';

const compositionHeroImgBox = document.querySelector('.composition-box');
const compositionItems = document.querySelectorAll('.composition-box__img');

// gallery fade animation
const fadeAnimation = function () {
  const handleHover = function (e) {
    if (e.target.classList.contains('composition-box__img')) {
      const img = e.target;
      const siblings = img
        .closest('.composition-box')
        .querySelectorAll('.composition-box__img');
      console.log(siblings);
      siblings.forEach(el => {
        if (el !== img) el.style.opacity = this;
      });
    }
  };

  // Passing "argument" into handler
  compositionHeroImgBox.addEventListener('mouseover', handleHover.bind(0.4));
  compositionHeroImgBox.addEventListener('mouseout', handleHover.bind(1));
};

const compositionAnimation = function () {
  const compositionAnimationItems = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    compositionItems.forEach((el, i) => {
      el.classList.add('fade-in-bottom');
      el.style.animationDelay = `${(i + 1) * 200}ms`;
    });
    //STOP OBSERVING
    observer.unobserve(entry.target);
  };

  const compositionBoxObserver = new IntersectionObserver(
    compositionAnimationItems,
    {
      root: null,
      threshold: 0,
    }
  );

  compositionBoxObserver.observe(compositionHeroImgBox);
};

export const compositionHeroCaller = function () {
  if (document.querySelector('.composition-box') !== null) {
    fadeAnimation();
    compositionAnimation();
  } else {
    return;
  }
};
