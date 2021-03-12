import authApi from './api/authApi';
import clientStorage from './api/clientStorage';

class LoginForm {
  constructor(selector) {
    this.form = document.querySelector(selector);
    this.submitHandler = this.submitHandler.bind(this);
  }

  async submitHandler(event) {
    event.preventDefault();

    const formData = new FormData(this.form);
    const body = {};

    formData.forEach((value, key) => {
      body[key] = value;
    });

    try {
      const rawResult = await authApi.login(body);
      if (!rawResult.ok) {
        throw result;
      }

      const result = await rawResult.json();
      clientStorage.setItem('session', result);
      this.form.reset();
      window.location = '/';
    } catch (error) {
      console.error(error);
    }
  }

  addListeners() {
    this.form.addEventListener('submit', this.submitHandler);
  }

  init() {
    this.addListeners();
  }
}

export default LoginForm;
