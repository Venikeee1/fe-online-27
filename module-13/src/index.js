import clientStorage from './js/api/clientStorage';
import apartmentApi from './js/api/apartmentApi';
import apartmentsTemplate from './templates/apartments.hbs';

import './css/style.css';
import './styles.css';

const renderApartments = async () => {
  const apartmentsWrapperRef = document.querySelector('.apartments-wrapper');
  const apartments = await apartmentApi.getApartments();
  apartmentsWrapperRef.innerHTML = apartmentsTemplate(apartments);
};

const session = clientStorage.getItem('session');

if (!session?.token) {
  window.location = '/login.html';
} else {
  renderApartments();
}
