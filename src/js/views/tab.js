'use strict';

import { DEFAULT_ANIMATION, DEFAULT_ANIMATION_DELAY } from '../config';
import { compositionAnimation } from '../helpers';

export const tabCaller = function () {
  if (
    document.querySelectorAll('.services__tab').length == 0 &&
    document.querySelector('.services__tab-container') == null &&
    document.querySelectorAll('.services__content').length == 0
  ) {
    return;
  } else {
    const tabs = document.querySelectorAll('.services__tab');
    const tabsContainer = document.querySelector('.services__tab-container');
    const tabsCell = document.querySelectorAll('.cell');
    const tabsContent = document.querySelectorAll('.services__content');

    const tabSelections = function () {
      tabsContainer.addEventListener('click', function (e) {
        const clicked = e.target.closest('.services__tab');

        // Guard clause
        if (!clicked) return;

        // Remove active classes
        tabs.forEach(t => t.classList.remove('services__tab--active'));
        tabsContent.forEach(c =>
          c.classList.remove('services__content--active')
        );

        // Activate tab
        clicked.classList.add('services__tab--active');

        // Activate content area
        document
          .querySelector(`.services__content--${clicked.dataset.tab}`)
          .classList.add('services__content--active');
      });
    };

    tabSelections();

    compositionAnimation(
      tabsCell,
      DEFAULT_ANIMATION,
      DEFAULT_ANIMATION_DELAY,
      tabsContainer
    );
  }
};
