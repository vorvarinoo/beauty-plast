export const initDropdown = () => {

  if ( window.matchMedia( '(hover: none)' ).matches ) {
    const dropdowns = document.querySelectorAll( '[data-dropdown]' );

    dropdowns.forEach( dropdown => {

      const dropdownBtn = dropdown.querySelector( '.header-menu__link-btn' );

      if ( dropdownBtn ) {
        dropdownBtn.addEventListener( 'click', () => {
          dropdown.classList.toggle( 'is-open' );
        } );
      }
    } );
  }
};