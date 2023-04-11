'use strict';
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
    tabsContent.forEach(c => c.classList.remove('services__content--active'));

    // Activate tab
    clicked.classList.add('services__tab--active');

    // Activate content area
    document
      .querySelector(`.services__content--${clicked.dataset.tab}`)
      .classList.add('services__content--active');
  });
};

const tabAnimation = function () {
  const tabAnimationItems = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    tabsCell.forEach((el, i) => {
      el.classList.add('fade-in-bottom');
      el.style.animationDelay = `${(i + 1) * 200}ms`;
    });
    //STOP OBSERVING
    observer.unobserve(entry.target);
  };

  const tabBoxObserver = new IntersectionObserver(tabAnimationItems, {
    root: null,
    threshold: 0,
  });

  tabBoxObserver.observe(tabsContainer);
};

export const tabCaller = function () {
  if (
    document.querySelectorAll('.services__tab') !== null &&
    document.querySelector('.services__tab-container') !== null &&
    document.querySelectorAll('.services__content') !== null
  ) {
    tabSelections();
    tabAnimation();
  }
};
