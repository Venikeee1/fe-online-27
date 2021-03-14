import './styles.css';
import ApartmentsService from './js/api';
import Timer from './js/Timer';
import './js/lightBoxExample';

const apartmentsService = new ApartmentsService();

const fetchApartments = async () => {
  try {
    const result = await apartmentsService.getApartments();
    return result;
  } catch (error) {
    const { status, statusText } = error;
    console.error(`Error with status code: ${status}. Message: ${statusText}`);
  }
};

const pauseRef = document.querySelector('.pause');
const resumeRef = document.querySelector('.resume');

// fetchApartments();
const timer = new Timer('.timer', 100000);
timer.init();

pauseRef.addEventListener('click', () => timer.pause());
resumeRef.addEventListener('click', () => timer.resume());
