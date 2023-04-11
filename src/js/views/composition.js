'use strict';

import { DEFAULT_ANIMATION, DEFAULT_ANIMATION_DELAY } from '../config';
import { compositionAnimation, fadeAnimation } from '../helpers';

export const compositionHeroCaller = function () {
  if (document.querySelector('.composition-box') == null) {
    return;
  } else {
    const compositionHeroImgBox = document.querySelector('.composition-box');
    const compositionItems = document.querySelectorAll('.composition-box__img');

    const imgBoxClassName = compositionHeroImgBox.className;
    const itemClassName = compositionHeroImgBox.children[0].classList[0];
    const imgClassName =
      compositionHeroImgBox.children[0].children[0].className;

    //Fade Animation
    fadeAnimation(
      imgClassName,
      imgBoxClassName,
      compositionHeroImgBox,
      itemClassName
    );
    //Animation
    compositionAnimation(
      compositionItems,
      DEFAULT_ANIMATION,
      DEFAULT_ANIMATION_DELAY,
      compositionHeroImgBox
    );
  }
};
