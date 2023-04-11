'use strict';

///////////////////////////////////////////////////////////
// Smooth scrolling animation

export const smoothScrolling = function () {
  const allLinks = document.querySelectorAll('a:link');

  allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      // console.log(href);

      // Scroll back to top
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

      // Scroll to other links
      if (href !== '#' && href.startsWith('#')) {
        e.preventDefault();
        const sectionEl = document.querySelector(href);
        // console.log(sectionEl);
        sectionEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

// Reveal sections
export const revealSections = function () {
  const allSections = document.querySelectorAll('.section');
  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.05,
  });

  allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
  });
};

//Top btn fuctionality
export const topBtn = function () {
  if (
    document.querySelector('.btn--top-anc') !== null &&
    document.querySelector('.btn--top--link') !== null
  ) {
    const btnTopAnc = document.querySelector('.btn--top-anc');
    const btnToplink = document.querySelector('.btn--top--link');

    const revealBtnTop = function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      btnToplink.classList.toggle('hidden');
    };

    const sectionObserver = new IntersectionObserver(revealBtnTop, {
      root: null,
      threshold: 0.5,
    });
    sectionObserver.observe(btnTopAnc);
  } else {
    return;
  }
};
