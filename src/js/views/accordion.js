'use strict';

const box = document.querySelector('.accordion-box');
export const reveal = function () {
  if (document.querySelector('.accordion-box') !== null) {
    box.addEventListener('click', function (e) {
      e.target.closest('.accordion__item').classList.toggle('open');
      const content = e.target.closest('.accordion__item').children[1];
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  } else {
    return;
  }
};
export const accordionAnimation = function () {
  const accordionItems = document.querySelectorAll('.accordion__item');
  console.log(accordionItems);

  const accordionAnimationItems = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);
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

  accordionBoxObserver.observe(box);
};
