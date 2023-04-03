'use strict';

export const tabSelections = function () {
  if (
    document.querySelectorAll('.services__tab') !== null &&
    document.querySelector('.services__tab-container') !== null &&
    document.querySelectorAll('.services__content') !== null
  ) {
    const tabs = document.querySelectorAll('.services__tab');
    const tabsContainer = document.querySelector('.services__tab-container');
    const tabsContent = document.querySelectorAll('.services__content');

    tabsContainer.addEventListener('click', function (e) {
      const clicked = e.target.closest('.services__tab');

      // Guard clause
      if (!clicked) return;

      // Remove active classes
      tabs.forEach(t => t.classList.remove('services__tab--active'));
      tabsContent.forEach(c => c.classList.remove('services__content--active'));

      // Activate tab
      clicked.classList.add('services__tab--active');

      // Activate content area
      document
        .querySelector(`.services__content--${clicked.dataset.tab}`)
        .classList.add('services__content--active');
    });
  } else {
    return;
  }
};
