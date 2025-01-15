const sliderConfig = {
  default: {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
  },

  heroSlider: {
    slidesPerView: 1,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  },
  newProducts: {
    spaceBetween: 30,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.30
      },
      540: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      },
      1600: {
        slidesPerView: 6
      }
    }
  },
};

const smoothScrollConfig = {
  speed: 900,
  speedAsDuration: true,
  updateURL: false,
};

const modalConfig = {
  linkAttributeName: false,
  catchFocus: true,
  closeOnEsc: true,
  backscroll: true,
};

const validateConfig = {
  justValidate: {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: 'var(--red-color)',
      marginTop: '6px',
      fontSize: '12px',
      textAlign: 'left',
      position: 'absolute',
      bottom: '0',
      transform: 'translateY(110%)',
    },
    errorFormClass: 'shaked',
    errorTimeout: 1500,
  },
  errorTimeout: 1500,
  mask: {
    bodyMask: ' (___) ___ __ __',
  }
};

const observerConfig = {
  scrollTop: {
    rootMargin: '600px',
    threshold: 1,
  },
};

const requestsConfig = {
  handlerURL: 'https://jsonplaceholder.typicode.com/posts',
};

export {
  sliderConfig,
  smoothScrollConfig,
  modalConfig,
  validateConfig,
  observerConfig,
  requestsConfig,
};