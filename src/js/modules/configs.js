const sliderConfig = {
  default: {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
  },

  mainHero: {
    slidesPerView: 1,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  },
  cards: {
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
  product: {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  },
  productThumb: {
    slidesPerView: 4,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 4
      },
      540: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1600: {
        slidesPerView: 4.5
      }
    }
  },
  news: {
    slidesPerView: 1.3,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1.3
      },
      768: {
        slidesPerView: 2.2
      },
      1200: {
        slidesPerView: 1.5
      },
      1600: {
        slidesPerView: 2.1
      }
    },
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
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
