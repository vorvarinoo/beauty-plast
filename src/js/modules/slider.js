import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-first', sliderConfig );
  initSlider( '.hero-slider', sliderConfig.mainHero );
  initSlider( '#new-products .cards-slider__element', sliderConfig.cards );
  initSlider( '#series-product .cards-slider__element', sliderConfig.cards );
  initSlider( '#product-gallery .product-gallery__slider', Object.assign( sliderConfig.product, {
    thumbs: {
      swiper: initSlider( '#product-gallery .product-gallery__thumb-slider', sliderConfig.productThumb ),
    },
  } ) );
  initSlider( '#news-slider', sliderConfig.news );
};

export {
  initSliders,
};
