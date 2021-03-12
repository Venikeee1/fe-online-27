import { settings } from '../../settings';

const { BASE_URL } = settings;

const apartmentApi = {
  getApartments() {
    return fetch(`${BASE_URL}/apartments`).then(result => result.json());
  },
};

export default apartmentApi;
