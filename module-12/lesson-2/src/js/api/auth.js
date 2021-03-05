import setting from '../settings/index.js';

const { BASE_URL } = setting;

const authAPi = {
  login({ email, password }) {
    const body = { email, password };

    return fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((rawData) => rawData.json());
  },
  registration() {},
};

export default authAPi;
