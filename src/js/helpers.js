// Fade animation
export const fadeAnimation = function (
  imageClassName,
  boxClassName,
  boxEl,
  itemClassName
) {
  const handleHover = function (e) {
    if (e.target.classList.contains(`${imageClassName}`)) {
      const img = e.target.closest(`.${itemClassName}`);
      const siblings = img
        .closest(`.${boxClassName}`)
        .querySelectorAll(`.${itemClassName}`);
      siblings.forEach(el => {
        if (el !== img) el.style.opacity = this;
      });
    }
  };

  // Passing "argument" into handler
  boxEl.addEventListener('mouseover', handleHover.bind(0.5));
  boxEl.addEventListener('mouseout', handleHover.bind(1));
};
//////////////////////////////////////////////////
//Animations

export const compositionAnimation = function (
  items,
  animationType,
  animationDelayInSec,
  boxEl
) {
  const animationCallback = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    items.forEach((el, i) => {
      el.classList.add(`${animationType}`);
      el.style.animationDelay = `${(i + 1) * animationDelayInSec}ms`;
    });
    //STOP OBSERVING
    observer.unobserve(entry.target);
  };

  const observer = new IntersectionObserver(animationCallback, {
    root: null,
    threshold: 0,
  });

  observer.observe(boxEl);
};
///////////////////////////////////////////////
//Mobile media
export const mediaQuery = function (callBack, mediaQueryEl) {
  const handleMobileChange = function (e) {
    // Check if the media query is true

    if (e.matches) {
      // Then log the following message to the console
      callBack;
    }
  }; // Register event listener
  mediaQueryEl.addListener(handleMobileChange);

  // Initial check
  handleMobileChange(mediaQueryEl);
};
