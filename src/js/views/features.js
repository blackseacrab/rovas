'use strict';

import {
  BIG_ANIMATION_DELAY,
  MEDIA_QUERY_350_PX,
  WOBBLE_ANIMATION,
} from '../config';
import { compositionAnimation } from '../helpers';

export const featuresCaller = function () {
  if (document.querySelectorAll('.features__item') == null) {
    return;
  } else {
    const featuresItems = document.querySelectorAll('.features__item');

    const featuresAnimations = function () {
      const handleMobileChange = function (e) {
        // Check if the media query is true
        if (e.matches) {
          // Then log the following message to the console

          featuresItems.forEach(item => {
            compositionAnimation(
              featuresItems,
              WOBBLE_ANIMATION,
              BIG_ANIMATION_DELAY,
              item
            );
          });
        } else {
          return;
        }
      };
      // Register event listener
      MEDIA_QUERY_350_PX.addListener(handleMobileChange);

      // Initial check
      handleMobileChange(MEDIA_QUERY_350_PX);
    };

    featuresAnimations();
  }
};
