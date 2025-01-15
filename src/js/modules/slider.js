import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-first', sliderConfig );
  initSlider( '.hero-slider', sliderConfig.heroSlider );
  initSlider( '#new-products', sliderConfig.newProducts );
};

export {
  initSliders,
};