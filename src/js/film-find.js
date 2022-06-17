// import axios from 'axios';
import { getRefs } from './get-refs';
const searchFilm = getRefs().searchMovie;
const galleryList = getRefs().gallery;
const incorrectInput = getRefs().incorrectInput;
import { renderList } from './render-list';
import ApiService from './api';
const getFilm = new ApiService();
import { containerTui, paginationTotalItems } from './pagination';
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

  getFilm.getSearchMovies(getFilm.value).then(({ results, total_results }) => {
    if (total_results > 20) {
      if (total_results > 19980) total_results = 19980;
      paginationTotalItems(total_results);
      searchBy = 'search';
      containerTui.classList.remove('visually-hidden');
    }
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
