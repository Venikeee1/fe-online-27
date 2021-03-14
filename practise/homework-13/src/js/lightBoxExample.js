import imageList from '../templates/images.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const createAndOpenLightBox = imageSrc => {
  const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
  `);
  instance.show();
};

const gallery = document.querySelector('.gallery');

fetch('https://pixabay.com/api/?key=20659430-8e33c69d8b4c60137606db57c')
  .then(res => res.json())
  .then(({ hits }) => {
    gallery.innerHTML = imageList(hits);
  });

gallery.addEventListener('click', event => {
  const { target } = event;
  const { largeImage } = target.dataset;
  console.log(largeImage);

  if (!largeImage) return;

  createAndOpenLightBox(largeImage);
});
