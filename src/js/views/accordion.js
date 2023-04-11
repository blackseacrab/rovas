'use strict';

import { DEFAULT_ANIMATION_DELAY, SECONDARY_ANIMATION } from '../config';
import { compositionAnimation } from '../helpers';

export const accordionCaller = function () {
  if (
    document.querySelector('.accordion-box') == null &&
    document.querySelectorAll('.accordion__item').length == 0
  ) {
    return;
  } else {
    const accordionBox = document.querySelector('.accordion-box');
    const accordionItems = document.querySelectorAll('.accordion__item');

    //Accordion revialing
    const revealAccordionItems = function () {
      accordionBox.addEventListener('click', function (e) {
        e.target.closest('.accordion__item').classList.toggle('open');
        const content = e.target.closest('.accordion__item').children[1];
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    };

    /////////////////////////////////////////////////////////////
    //CALL Functions

    compositionAnimation(
      accordionItems,
      SECONDARY_ANIMATION,
      DEFAULT_ANIMATION_DELAY,
      accordionBox
    );

    revealAccordionItems();
  }
};
