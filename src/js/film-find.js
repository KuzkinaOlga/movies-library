// import axios from 'axios';
import { getRefs } from './get-refs';
const searchFilm = getRefs().searchMovie;
const galleryList = getRefs().gallery;
const incorrectInput = getRefs().incorrectInput;
import { renderList } from './render-list';
import ApiService from './api';
const getFilm = new ApiService();
export let searchBy = '';
export let queryForTui = '';

//  onFormSubmit
searchFilm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  getFilm.value = e.currentTarget.elements.searchQuery.value.trim();
  queryForTui = getFilm.value;

  // incorrectInputAnimation();
  if (!getFilm.value) {
    setTimeout(() => {
      incorrectInput.classList.add('is-hidden');
    }, 4000);
    return incorrectInput.classList.remove('is-hidden');
  }

  getFilm.getSearchMovies(getFilm.value).then(({ results }) => {
    // incorrectInputAnimation();
    if (results.length < 1) {
      setTimeout(() => {
        incorrectInput.classList.add('is-hidden');
      }, 4000);
      return incorrectInput.classList.remove('is-hidden');
    }
    galleryList.innerHTML = '';
    return renderList(results, galleryList);
  });
  // clear input value
  e.currentTarget.elements.searchQuery.value = '';
}
