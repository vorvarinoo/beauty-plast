export const initProductDrawing = () => {
  baguetteBox.run( '.btn--open-drawing' );
};


export const initProductGallery = () => {

  document.querySelectorAll( '.product-gallery' ).forEach( ( drawing, index ) => {
    drawing.id = `product-img-id-${index}`;
    baguetteBox.run( `#product-img-id-${index}` );
  } );
};