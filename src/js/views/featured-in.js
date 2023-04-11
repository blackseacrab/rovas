'use strict';

import { DEFAULT_ANIMATION, DEFAULT_ANIMATION_DELAY } from '../config';
import { compositionAnimation } from '../helpers';

export const featuredInCaller = function () {
  if (
    document.querySelector('.featured-in__logos') == null &&
    document.querySelectorAll('.featured-in__logo').length == 0
  ) {
    return;
  } else {
    const featuredInBox = document.querySelector('.featured-in__logos');
    const featuredInItems = document.querySelectorAll('.featured-in__logo');

    /////////////////////////////////////////////////////////////
    //CALL Functions

    compositionAnimation(
      featuredInItems,
      DEFAULT_ANIMATION,
      DEFAULT_ANIMATION_DELAY,
      featuredInBox
    );
  }
};
