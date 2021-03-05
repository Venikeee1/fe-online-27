import setting from '../settings/index.js';

const { BASE_URL } = setting;

const api = {
  fetchApartments() {
    return fetch(`${BASE_URL}/apartments`).then((rawData) => rawData.json());
  },
};

export default api;
