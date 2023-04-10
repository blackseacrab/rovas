const featuresBoxEl = document.querySelector('.features--box');
const featuresItems = document.querySelectorAll('.features__item');
const mediaQuery350px = window.matchMedia('(max-width: 350px)');

export const featuresAnimations = function () {
  const handleMobileChange = function (e) {
    // Check if the media query is true

    if (e.matches) {
      console.log(`test`);
      // Then log the following message to the console
      featuresItems.forEach((item, i) => {
        const featuresCardsAnimations = function (entries, observer) {
          const [entry] = entries;

          if (!entry.isIntersecting) return;
          featuresItems.forEach((el, i) => {
            el.classList.add('wobble-hor-bottom');
            el.style.animationDelay = `${(i + 1) * 1500}ms`;
          });
          // item.classList.add('jello-vertical');

          //STOP OBSERVING
          observer.unobserve(entry.target);
        };

        const featuresBoxObserver = new IntersectionObserver(
          featuresCardsAnimations,
          {
            root: null,
            threshold: 0,
          }
        );

        featuresBoxObserver.observe(item);
        console.log(item, i);
      });
    } else {
      return;
    }
  };
  // Register event listener
  mediaQuery350px.addListener(handleMobileChange);

  // Initial check
  handleMobileChange(mediaQuery350px);
};
