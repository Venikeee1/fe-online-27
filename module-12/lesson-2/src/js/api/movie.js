import setting from '../settings/index.js';

const { BASE_URL, API_KEY } = setting;

const api = {
  fetchPopular(page = '') {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;

    return fetch(url).then(rawData => rawData.json());
  },
};

export default api;
