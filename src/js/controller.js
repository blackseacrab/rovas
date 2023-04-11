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
import * as featuredIn from './views/featured-in';
import * as composition from './views/composition';

const init = function () {
  popup.popupWindowOpenClose();
  accordion.accordionCaller();
  model.smoothScrolling();
  model.revealSections();
  model.topBtn();
  footer.autoChangeYear();
  footer.footerAnimationsLoader();
  tab.tabCaller();
  swiper.swiperCaller();
  // swiper2.swiperCaller2();
  // gallery.openBigGalleryCaller();
  gallery.galleryPgHeroCaller();
  aboutUs.aboutUsHeroCaller();
  how.howCaller();
  features.featuresCaller();
  featuredIn.featuredInCaller();
  composition.compositionHeroCaller();
};
init();
