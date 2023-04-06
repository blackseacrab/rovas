'use strict';

// Set current year
export const autoChangeYear = function () {
  const yearEl = document.querySelectorAll('.year');
  const currentYear = new Date().getFullYear();

  yearEl.forEach(year => {
    year.textContent = currentYear;
  });
  yearEl.textContent = currentYear;
};

//Footer animations
export const footerAnimationsLoader = function () {
  const footer = document.querySelector('.footer');
  const socialLogo = document.querySelector('.social__logo');
  const sociallinks = document.querySelector('.social__links');
  const sociaCopyright = document.querySelector('.social__copyright');
  const contactsHeadings = document.querySelectorAll('.contacts__heading');
  const contactsContactAddress = document.querySelector(
    '.contacts__contact__address'
  );
  const contactsContactLinks = document.querySelectorAll(
    '.contacts__contact__link-box'
  );
  const navNavItem = document.querySelectorAll('.nav__nav__item');

  const footerAnimations = function (entries, observer) {
    const [entry] = entries;

    // console.log(entries);

    if (!entry.isIntersecting) return;
    socialLogo.classList.add('slide-in-left');
    sociallinks.classList.add('slide-in-blurred-left');
    sociallinks.style.animationDelay = '.25s';
    sociaCopyright.classList.add('slide-in-left');
    sociaCopyright.style.animationDelay = '.5s';
    contactsHeadings.forEach((el, i) => {
      el.classList.add('scale-in-hor-left');
    });

    contactsContactAddress.classList.add('scale-in-hor-left');
    contactsContactAddress.style.animationDelay = '.25s';
    contactsContactLinks.forEach((el, i) => {
      el.classList.add('scale-in-hor-left');
      el.style.animationDelay = `${(i + 1) * 500}ms`;
    });
    contactsContactLinks.forEach((el, i) => {
      el.classList.add('scale-in-hor-left');
      el.style.animationDelay = `${(i + 1) * 500}ms`;
    });
    navNavItem.forEach((el, i) => {
      el.classList.add('scale-in-hor-left');
      el.style.animationDelay = `${(i + 1) * 250}ms`;
    });

    observer.unobserve(entry.target);
  };

  const footerObserver = new IntersectionObserver(footerAnimations, {
    root: null,
    threshold: 0.1,
  });

  footerObserver.observe(footer);
  // console.log(footer);
  // section.classList.add('section--hidden');
};
