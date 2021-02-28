class Slider {
  constructor(selector, items = []) {
    this.element = document.querySelector(selector);
    this.items = items;
    this.containerWidth = this.element.clientWidth;
    this.currentIndex = 0;
  }

  createSliderItem({ url, alt }) {
    return `<div class="slider__item">
              <img class="slider__img" src="${url}" alt="${alt}">
            </div>`;
  }

  createAndAppendSliderContainer() {
    this.elementContainer = document.createElement('div');
    this.elementContainer.classList.add('slider__inner');
    this.element.append(this.elementContainer);
  }

  createSliderList() {
    return this.items.map(this.createSliderItem).join('');
  }

  addStylesToSliderContainer() {
    this.element.classList.add('slider');
  }

  moveNext() {
    if (this.currentIndex === this.items.length - 1) {
      return;
    }

    this.moveTo(this.currentIndex + 1);
  }

  movePrev() {
    if (this.currentIndex === 0) {
      return;
    }

    this.moveTo(this.currentIndex - 1);
  }

  moveTo(index) {
    this.currentIndex = index;
    this.elementContainer.style.transform = `translateX(${
      -index * this.element.clientWidth
    }px)`;
  }

  addArrowListeners() {
    document.addEventListener('keyup', (event) => {
      const { key } = event;

      if (key === 'ArrowLeft') {
        this.movePrev();
        return;
      }

      if (key === 'ArrowRight') {
        this.moveNext();
        return;
      }
    });
  }

  render() {
    const sliderTemplate = this.createSliderList();
    this.elementContainer.insertAdjacentHTML('beforeend', sliderTemplate);
  }

  init() {
    this.createAndAppendSliderContainer();
    this.addArrowListeners();
    this.addStylesToSliderContainer();
    this.render();
  }
}

export default Slider;
