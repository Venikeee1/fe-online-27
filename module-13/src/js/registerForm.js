import authApi from './api/authApi';
import clientStorage from './api/clientStorage';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

class RegisterForm {
  constructor(selector) {
    this.form = document.querySelector(selector);
  }

  submitHandler = async event => {
    event.preventDefault();

    const formData = new FormData(this.form);
    const body = {};

    formData.forEach((value, key) => {
      body[key] = value;
    });

    try {
      const rawResult = await authApi.register(body);
      if (!rawResult.ok) {
        throw rawResult;
      }

      const result = await rawResult.json();
      clientStorage.setItem('session', result);
      this.form.reset();
    } catch (error) {
      console.log(error);
      alert({
        text: error.statusText,
      });
    }
  };

  addListeners() {
    this.form.addEventListener('submit', this.submitHandler);
  }

  init() {
    this.addListeners();
  }
}

export default RegisterForm;
