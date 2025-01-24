export const initPopUpCertificat = () => {

  document.querySelectorAll( '.card-certificat' ).forEach( ( certificat, index ) => {
    certificat.id = `certificat-id-${index}`;
    baguetteBox.run( `#certificat-id-${index}` );
  } );
};