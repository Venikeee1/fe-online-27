import './styles.css';
import MoviePagination from './js/movie-pagination';

const movies = new MoviePagination('.movie-list');
const prevPaginationBtnRef = document.querySelector('#prev-page');
const nextPaginationBtnRef = document.querySelector('#next-page');

prevPaginationBtnRef.addEventListener('click', movies.goToPrevPage);
nextPaginationBtnRef.addEventListener('click', movies.goToNextPage);

movies.fetchMovies();
