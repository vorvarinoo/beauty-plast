import {
  modalConfig,
} from './configs.js';

import {
  initModal,
  pauseVideos
} from './utils.js';


modalConfig.afterClose = ( modalObj ) => {
  pauseVideos( modalObj );
};

const simpleModal = new HystModal( modalConfig );

const initModals = () => {
  initModal( simpleModal );
};

export {
  simpleModal,
  initModals,
};