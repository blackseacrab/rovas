'use strict';

export const reveal = function () {
  if (document.querySelector('.accordion-box') !== null) {
    const box = document.querySelector('.accordion-box');

    box.addEventListener('click', function (e) {
      e.target.closest('.accordion__item').classList.toggle('open');
    });
  } else {
    return;
  }
};
