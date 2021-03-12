import { settings } from '../../settings';

const { BASE_URL } = settings;

const authApi = {
  async register({ name, email, password }) {
    const body = JSON.stringify({ name, email, password });

    const result = await fetch(`${BASE_URL}/users/register`, {
      body,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return result;
  },

  async login({ email, password }) {
    const body = JSON.stringify({ email, password });

    const result = await fetch(`${BASE_URL}/users/login`, {
      body,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return result;
  },
};

export default authApi;
