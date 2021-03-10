import moviesListTemplate from '../../templates/moviesList.hbs';
import movieApi from '../api/movie';
import { generatePosterPath } from '../helpers';

const MAX_RATING = 10;

class MoviePagination {
  #movies = [];

  constructor(selector) {
    this.element = document.querySelector(selector);
    this.#movies = [];
    this.currentPage = 1;
    this.totalPages = 0;
    this.goToPrevPage = this.goToPrevPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  get movies() {
    return this.#movies;
  }

  set movies(movieList) {
    if (!movieList) {
      console.error('Где список фильмов?');
    }

    this.#movies = movieList;
    this.render();
  }

  goToPrevPage() {
    if (this.currentPage === 1) {
      return;
    }

    this.currentPage -= 1;
    this.fetchMovies().then(({ results }) => {
      this.movies = this.convertMoviesData(results);
    });
  }

  goToNextPage() {
    if (this.currentPage === this.totalPages) {
      return;
    }

    this.currentPage += 1;
    this.fetchMovies().then(({ results }) => {
      this.movies = this.convertMoviesData(results);
    });
  }

  loadMore() {
    this.currentPage += 1;
    return this.fetchMovies().then(({ results }) => {
      this.addMovies(this.convertMoviesData(results));
    });
  }

  addMovies(newMovies) {
    this.movies = [...this.movies, ...newMovies];
  }

  convertMoviesData(movieList) {
    return movieList.map(movie => movieAdapter(movie));
  }

  fetchMovies() {
    return movieApi
      .fetchPopular(this.currentPage)
      .then(({ results, total_pages }) => ({ results, total_pages }));
  }

  mount() {
    this.fetchMovies().then(({ results, total_pages }) => {
      this.movies = this.convertMoviesData(results);
      this.totalPages = total_pages;
    });
  }

  render() {
    this.element.innerHTML = moviesListTemplate(this.movies);
  }
}

const movieAdapter = ({
  release_date,
  poster_path,
  original_title,
  vote_average,
}) => ({
  imgSrc: generatePosterPath(poster_path),
  title: original_title,
  rating: Math.round((vote_average / MAX_RATING) * 100) + '%',
  releaseDate: release_date,
});

export default MoviePagination;
