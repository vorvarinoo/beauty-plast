import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-first', sliderConfig );
  initSlider( '.hero-slider', sliderConfig.heroSlider );
  initSlider( '.products-slider', sliderConfig.productsSlider );
};

export {
  initSliders,
};
