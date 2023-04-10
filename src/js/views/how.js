const howBoxEl = document.querySelector('.how-box');
const howItems = document.querySelectorAll('.how__item');
const mediaQuery450px = window.matchMedia('(max-width: 450px)');

export const howAnimations = function () {
  //Big Screens

  //SMALL SCREENS

  const handleMobileChange = function (e) {
    // Check if the media query is true

    if (e.matches) {
      // Then log the following message to the console
      howItems.forEach((item, i) => {
        const howCardsAnimations = function (entries, observer) {
          const [entry] = entries;

          if (!entry.isIntersecting) return;

          item.classList.add('slide-in-bottom');

          //STOP OBSERVING
          observer.unobserve(entry.target);
        };

        const howBoxObserver = new IntersectionObserver(howCardsAnimations, {
          root: null,
          threshold: 0,
        });

        howBoxObserver.observe(item);
        console.log(item, i);
      });
    } else {
      const howCardsAnimations = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        howItems.forEach((el, i) => {
          el.classList.add('slide-in-bottom');
          el.style.animationDelay = `${(i + 1) * 350}ms`;
        });
        //STOP OBSERVING
        observer.unobserve(entry.target);
      };

      const howBoxObserver = new IntersectionObserver(howCardsAnimations, {
        root: null,
        threshold: 0,
      });

      howBoxObserver.observe(howBoxEl);
    }
  };
  // Register event listener
  mediaQuery450px.addListener(handleMobileChange);

  // Initial check
  handleMobileChange(mediaQuery450px);
};
