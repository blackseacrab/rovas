'use strict';

import { MEDIA_QUERY_900_PX } from '../config';
import { fadeAnimation, mediaQuery } from '../helpers';

export const aboutUsHeroCaller = function () {
  if (
    document.querySelector('.about-us__hero__img-box') == null &&
    document.querySelector('.about-us__hero__heading') == null &&
    document.querySelector('.about-us__hero__text') == null &&
    document.getElementsByClassName('about-us__hero__img').length === 0 &&
    document.querySelector('.about-us__hero__btn') == null
  ) {
    return;
  } else {
    const aboutUsHeroImgBox = document.querySelector(
      '.about-us__hero__img-box'
    );
    const aboutUsHeroHeading = document.querySelector(
      '.about-us__hero__heading'
    );
    const aboutUsHeroText = document.querySelector('.about-us__hero__text');
    const aboutUsHeroBtn = document.querySelector('.about-us__hero__btn');
    const aboutUsHeroImg = document.getElementsByClassName(
      'about-us__hero__img'
    );
    const imageClassName = aboutUsHeroImg[0].className.split(' ')[0];
    const boxClassName = aboutUsHeroImgBox.className.split(' ')[0];

    const heroAnimationsDelays = function () {
      aboutUsHeroHeading.style.animationDelay = '.25s';
      aboutUsHeroText.style.animationDelay = '.3s';
      aboutUsHeroImgBox.style.animationDelay = '.25s';
      aboutUsHeroBtn.style.animationDelay = '1s';
    };

    const heroAnimationsMobileDelays = function () {
      aboutUsHeroHeading.classList.remove('slide-in-right');
      aboutUsHeroHeading.classList.add('slide-in-left');
      console.log(`test`);
      aboutUsHeroHeading.style.animationDelay = '.25s';
      aboutUsHeroText.style.animationDelay = '.25s';
      aboutUsHeroBtn.style.animationDelay = '.75s';
      aboutUsHeroImgBox.style.animationDelay = '0s';
    };

    //Animations
    const aboutUsHeroAnimation = function () {
      heroAnimationsDelays();

      mediaQuery(heroAnimationsMobileDelays, MEDIA_QUERY_900_PX);

      //   const handleMobileChange = function (e) {
      //     // Check if the media query is true

      //     if (e.matches) {
      //       // Then log the following message to the console
      //       heroAnimationsMobileDelays();
      //     }
      //   }; // Register event listener
      //   MEDIA_QUERY_900_PX.addListener(handleMobileChange);

      //   // Initial check
      //   handleMobileChange(MEDIA_QUERY_900_PX);
    };
    /////////////////////////////////////////////////////////////
    //CALL Functions
    aboutUsHeroAnimation();

    //Fade Animation
    fadeAnimation(
      imageClassName,
      boxClassName,
      aboutUsHeroImgBox,
      imageClassName
    );
  }
};
