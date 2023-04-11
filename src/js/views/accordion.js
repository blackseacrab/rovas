'use strict';

const accordionBox = document.querySelector('.accordion-box');
const accordionItems = document.querySelectorAll('.accordion__item');

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

const accordionAnimation = function () {
  const accordionAnimationItems = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    accordionItems.forEach((el, i) => {
      el.classList.add('flip-in-hor-top');
      el.style.animationDelay = `${(i + 1) * 300}ms`;
    });

    //STOP OBSERVING
    observer.unobserve(entry.target);
  };

  const accordionBoxObserver = new IntersectionObserver(
    accordionAnimationItems,
    {
      root: null,
      threshold: 0,
    }
  );

  accordionBoxObserver.observe(accordionBox);
};
export const accordionCaller = function () {
  if (
    document.querySelector('.accordion-box') !== null &&
    document.querySelectorAll('.accordion__item') !== null
  ) {
    revealAccordionItems();
    accordionAnimation();
  } else {
    return;
  }
};
