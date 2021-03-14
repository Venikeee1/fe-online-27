import Slider from './slider/index.js';
import Modal from './modal-gallery/index.js';
import imageList from './images.js';

const btn = document.querySelector('.show-modal');
const modal = new Modal('#modal');
const slider = new Slider('#gallery', imageList);
slider.init();

btn.addEventListener('click', () => {
  modal.open();
  /** если надо можем переходить по индексу слайда */
  // slider.moveTo(2);
});
