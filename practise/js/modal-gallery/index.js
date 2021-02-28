class Modal {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.backgroundRef = this.element.querySelector('.modal__inner');
    this._isOpen = false;

    this.init();
  }

  get isOpen() {
    return this._isOpen;
  }

  set isOpen(isOpen) {
    this._isOpen = isOpen;

    isOpen
      ? this.element.classList.add('active')
      : this.element.classList.remove('active');
  }

  handleOnBackgroundAction() {
    this.backgroundRef.addEventListener('click', (event) => {
      const { target, currentTarget } = event;

      if (target === currentTarget) {
        this.close();
      }
    });
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  init() {
    this.handleOnBackgroundAction();
  }
}

export default Modal;
