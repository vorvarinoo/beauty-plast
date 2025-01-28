export const initTabs = () => {
  const tabs = document.querySelectorAll( '[data-jtabs]' );

  if ( tabs.length < 1 ) return;

  new JustTabs( 'contacts-department' );
};