// Написать js который при клике на атрибут data-dropdown присваивает ему класс .is-open


export const initDropdown = () => {
  // Проверяем, поддерживается ли тачпад (сенсорный ввод)
  if ( window.matchMedia( '(pointer: coarse)' ).matches ) {
    const dropdowns = document.querySelectorAll( '[data-dropdown]' );

    dropdowns.forEach( dropdown => {
      // Находим кнопку внутри конкретного dropdown
      const dropdownBtn = dropdown.querySelector( '.header-menu__link-btn' );

      if ( dropdownBtn ) {
        dropdownBtn.addEventListener( 'click', () => {
          dropdown.classList.toggle( 'is-open' );
        } );
      }
    } );
  }
};
