import imagesList from './images.js';
// const firstName = 'John';
// const age = 100;
// const lastName = 'Rivz';

// const fullInfo = `Name: ${firstName} age: ${age} last name: ${lastName}`;
// const fullInfo =
//   'Name: ' + firstName + 'age:' + ' ' + age + ' ' + 'last name: ' + lastName;
// console.log(fullInfo);
const galleryRef = document.querySelector('#gallery');

const createImage = ({ url, alt }) => {
  return `<li class="gallery__item">
            <img class="gallery__img" src="${url}" alt="${alt}">
          </li>`;
};

const createImagesList = (imageList) => imageList.map(createImage).join('');

const addItemsToGallery = (elem, template) => {
  elem.insertAdjacentHTML('beforeend', template);
};

const template = createImagesList(imagesList);
console.log(template);

addItemsToGallery(galleryRef, template);
