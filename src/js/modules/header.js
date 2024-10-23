import {
  isEscKey,
  breakpointChecker
} from './utils.js';

const resetOffsetTop = ( node ) => {
  if ( !node ) return;
  document.documentElement.style.setProperty( '--offset-top', `${node.offsetHeight - 1}px` );
};


export const initHeaderMenu = () => {

  const headerTopNode = document.querySelector( '.site__header' );
  const modalNode = headerTopNode.querySelector( '#mobile-menu' );
  const modalTriggerNode = headerTopNode.querySelector( '[data-header-modal="mobile-menu"]' );


  if ( !modalNode || !modalTriggerNode ) return;

  const onEscKeydown = ( evt ) => {
    if ( isEscKey( evt ) && modalNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      closeModal();
      return;
    }
  };

  function openModal() {
    document.documentElement.classList.add( 'is-block-scroll' );
    modalNode.setAttribute( 'aria-hidden', 'false' );
    modalTriggerNode.classList.add( 'burger--to-cross' );
    document.addEventListener( 'keydown', onEscKeydown );
  }

  function closeModal() {
    document.documentElement.classList.remove( 'is-block-scroll' );
    modalNode.setAttribute( 'aria-hidden', 'true' );
    modalTriggerNode.classList.remove( 'burger--to-cross' );
    document.addEventListener( 'keydown', onEscKeydown );
  }

  breakpointChecker( () => {
    closeModal();
    resetOffsetTop( headerTopNode );
  }, () => {
    resetOffsetTop( headerTopNode );
  } );


  modalTriggerNode.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    modalNode.getAttribute( 'aria-hidden' ) === 'true' ? openModal() : closeModal();
  } );
};
