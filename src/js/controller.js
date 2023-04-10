'use strict';

import * as model from './model';
import * as footer from './views/footer';
import * as popup from './views/popup';
import * as accordion from './views/accordion';
import * as tab from './views/tab';
import * as swiper from './views/swiper';
import * as swiper2 from './views/swiper2';
import * as gallery from './views/gallery';
import * as aboutUs from './views/about-us-hero';
import * as how from './views/how';
import * as features from './views/features';

const init = function () {
  popup.popupWindowOpenClose();
  accordion.reveal();
  accordion.accordionAnimation();
  model.smoothScrolling();
  model.revealSections();
  model.topBtn();
  footer.autoChangeYear();
  footer.footerAnimationsLoader();
  tab.tabSelections();
  swiper.swiperCaller();
  swiper2.swiperCaller2();
  gallery.openBigGalleryCaller();
  aboutUs.fadeAnimation();
  aboutUs.aboutUsHeroAnimation();
  how.howAnimations();
  features.featuresAnimations();
};
init();
