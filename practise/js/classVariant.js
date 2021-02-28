import imagesList from './images.js';

const createImage = ({ url, alt }) => {
  return `<li class="gallery__item">
            <img class="gallery__img" src="${url}" alt="${alt}">
          </li>`;
};

class Gallery {
  constructor(selector, galleryList = []) {
    this.element = document.querySelector(selector);
    this.items = galleryList;
  }

  createImagesList() {
    return this.items.map(createImage).join('');
  }

  render() {
    const template = this.createImagesList();
    this.element.insertAdjacentHTML('beforeend', template);
  }
}

const gallery = new Gallery('#gallery', imagesList);
console.log(gallery);
gallery.render();
