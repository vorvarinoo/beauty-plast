import {
  initSiteSettings
} from './modules/settings.js';
import {
  initModals
} from './modules/modal.js';
import {
  initSliders
} from './modules/slider.js';
import {
  validateForms
} from './modules/validate.js';
import {
  initHeaderMenu
} from './modules/header.js';
import {
  initDropdown
} from './modules/dropdown.js';
import {
  initRangeSteppers
} from './modules/stepper.js';
import {
  initBaguettebox
} from './modules/baguettebox.js';
import {
  initTabs
} from './modules/tabs.js';

document.addEventListener( 'DOMContentLoaded', () => {
  initSiteSettings();

  window.addEventListener( 'load', () => {
    validateForms();
    initModals();
    initSliders();
    initHeaderMenu();
    initDropdown();
    initRangeSteppers();
    initBaguettebox();
    initTabs();
  } );
} );
