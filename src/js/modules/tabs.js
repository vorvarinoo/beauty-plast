export const initTabs = () => {
  const tabs = document.querySelectorAll( '[data-jtabs="tabs"]' );

  if ( tabs.length < 1 ) return;

  new JustTabs( 'tabs' );
};