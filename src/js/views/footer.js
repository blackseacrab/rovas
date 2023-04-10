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
  const social = document.querySelector('.social');
  const socialLogo = document.querySelector('.social__logo');
  const sociallinks = document.querySelector('.social__links');
  const sociaCopyright = document.querySelector('.social__copyright');
  const contactsEl = document.querySelector('.contacts');
  const contactsHeadings = document.querySelectorAll('.contacts__heading');
  const contactsContactAddress = document.querySelector(
    '.contacts__contact__address'
  );
  const contactsContactLinks = document.querySelectorAll(
    '.contacts__contact__link-box'
  );
  const navNavItem = document.querySelectorAll('.nav__nav__item');
  const nav = document.querySelector('.nav');
  const mediaQuery = window.matchMedia('(min-width: 600px)');

  const socialClassManipulator = function (
    socialLogo,
    sociallinks,
    sociaCopyright
  ) {
    //social
    socialLogo.classList.add('slide-in-left');
    sociallinks.classList.add('slide-in-blurred-left');
    sociallinks.style.animationDelay = '.25s';
    sociaCopyright.classList.add('slide-in-left');
    sociaCopyright.style.animationDelay = '.25s';
  };
  const contactsClassManipulator = function (
    contactsHeadings,
    contactsContactAddress,
    contactsContactLinks
  ) {
    //CONTACTS
    contactsHeadings.forEach((el, i) => {
      el.classList.add('scale-in-hor-left');
    });
    contactsContactAddress.classList.add('scale-in-hor-left');
    contactsContactAddress.style.animationDelay = '.25s';
    contactsContactLinks.forEach((el, i) => {
      el.classList.add('scale-in-hor-left');
      el.style.animationDelay = `${250}ms`;
    });
    contactsContactLinks.forEach((el, i) => {
      el.classList.add('scale-in-hor-left');
      el.style.animationDelay = `${250}ms`;
    });
  };
  const navClassManipulator = function (navNavItem) {
    //NAV
    navNavItem.forEach((el, i) => {
      el.classList.add('scale-in-hor-left');
      el.style.animationDelay = `${250}ms`;
    });
  };

  const handleMobileChange = function (e) {
    // Check if the media query is true
    if (e.matches) {
      // Then log the following message to the console
      const footerAnimationsForBigScreens = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        //social
        socialClassManipulator(socialLogo, sociallinks, sociaCopyright);

        //CONTACTS
        contactsClassManipulator(
          contactsHeadings,
          contactsContactAddress,
          contactsContactLinks
        );

        // NAVIGATION
        navClassManipulator(navNavItem);

        //STOP OBSERVING
        observer.unobserve(entry.target);
      };

      const footerObserver = new IntersectionObserver(
        footerAnimationsForBigScreens,
        {
          root: null,
          threshold: 0.5,
        }
      );

      footerObserver.observe(footer);
    } else {
      //CONTACTS
      const footerAnimationsForContacts = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;
        contactsClassManipulator(
          contactsHeadings,
          contactsContactAddress,
          contactsContactLinks
        );

        //STOP OBSERVING
        observer.unobserve(entry.target);
      };

      //NAV
      const footerAnimationsForNav = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;
        // NAVIGATION
        navClassManipulator(navNavItem);

        //STOP OBSERVING
        observer.unobserve(entry.target);
      };

      //Social
      const footerAnimationsForSocial = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;
        //social
        socialClassManipulator(socialLogo, sociallinks, sociaCopyright);

        //STOP OBSERVING
        observer.unobserve(entry.target);
      };

      const contactObserver = new IntersectionObserver(
        footerAnimationsForContacts,
        {
          root: null,
          threshold: 0.5,
        }
      );
      const navObserver = new IntersectionObserver(footerAnimationsForNav, {
        root: null,
        threshold: 0.5,
      });
      const socialObserver = new IntersectionObserver(
        footerAnimationsForSocial,
        {
          root: null,
          threshold: 0.5,
        }
      );

      contactObserver.observe(contactsEl);
      navObserver.observe(nav);
      socialObserver.observe(social);
    }
  };

  // Register event listener
  mediaQuery.addListener(handleMobileChange);

  // Initial check
  handleMobileChange(mediaQuery);
};
