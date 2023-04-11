'use strict';

const aboutUsHeroImgBox = document.querySelector('.about-us__hero__img-box');
const aboutUsHeroHeading = document.querySelector('.about-us__hero__heading');
const aboutUsHeroText = document.querySelector('.about-us__hero__text');
const aboutUsHeroBtn = document.querySelector('.about-us__hero__btn');
const mediaQuery900px = window.matchMedia('(max-width: 900px)');

// gallery fade animation
const fadeAnimation = function () {
  const handleHover = function (e) {
    if (e.target.classList.contains('about-us__hero__img')) {
      const img = e.target;
      const siblings = img
        .closest('.about-us__hero__img-box')
        .querySelectorAll('.about-us__hero__img');

      siblings.forEach(el => {
        if (el !== img) el.style.opacity = this;
      });
    }
  };

  // Passing "argument" into handler
  aboutUsHeroImgBox.addEventListener('mouseover', handleHover.bind(0.5));
  aboutUsHeroImgBox.addEventListener('mouseout', handleHover.bind(1));
};

const aboutUsHeroAnimation = function () {
  aboutUsHeroHeading.style.animationDelay = '.25s';
  aboutUsHeroText.style.animationDelay = '.3s';
  aboutUsHeroImgBox.style.animationDelay = '.25s';
  aboutUsHeroBtn.style.animationDelay = '1s';

  const handleMobileChange = function (e) {
    // Check if the media query is true

    if (e.matches) {
      // Then log the following message to the console
      aboutUsHeroHeading.classList.remove('slide-in-right');
      aboutUsHeroHeading.classList.add('slide-in-left');

      aboutUsHeroHeading.style.animationDelay = '.25s';
      aboutUsHeroText.style.animationDelay = '.25s';
      aboutUsHeroBtn.style.animationDelay = '.75s';
      aboutUsHeroImgBox.style.animationDelay = '0s';
    }
  }; // Register event listener
  mediaQuery900px.addListener(handleMobileChange);

  // Initial check
  handleMobileChange(mediaQuery900px);
};

export const aboutUsHeroCaller = function () {
  if (
    document.querySelector('.about-us__hero__img-box') !== null &&
    document.querySelector('.about-us__hero__heading') !== null &&
    document.querySelector('.about-us__hero__text') !== null &&
    document.querySelector('.about-us__hero__btn') !== null
  ) {
    fadeAnimation();
    aboutUsHeroAnimation();
  } else {
    return;
  }
};
