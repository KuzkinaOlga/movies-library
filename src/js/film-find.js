// import axios from 'axios';
import { getRefs } from './get-refs';
const searchFilm = getRefs().searchMovie;
const galleryList = getRefs().gallery;
const incorrectInput = getRefs().incorrectInput;
// let gengesArray = [];
import { renderList } from './render-list';
import ApiService from './api';
const getFilm = new ApiService();


//  onFormSubmit
searchFilm.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  getFilm.value = e.currentTarget.elements.searchQuery.value.trim();
  queryForTui = getFilm.value;

  if (!getFilm.value) {
    return incorrectInput.classList.remove('is-hidden');
  }


  getFilm.getSearchMovies(getFilm.value).then(({ results }) => {
    console.log(results.length);
    if (results.length > 1) {
      console.log(results.length);
      incorrectInput.classList.add('is-hidden');
    } else {
      return incorrectInput.classList.remove('is-hidden');
    }


    galleryList.innerHTML = '';
    return renderList(results, galleryList);
  });
}

