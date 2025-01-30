export const initBaguettebox = () => {
  baguetteBox.run('.btn--open-drawing');

  document.querySelectorAll('.product-gallery').forEach((drawing, index) => {
    drawing.id = `product-img-id-${index}`;
    baguetteBox.run(`#product-img-id-${index}`);
  });

  document.querySelectorAll('.card-certificat').forEach((certificat, index) => {
    certificat.id = `certificat-id-${index}`;
    baguetteBox.run(`#certificat-id-${index}`);
  });
};
