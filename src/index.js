
import { renderList } from './js/render-list';
import { getRefs } from './js/get-refs';
import { onShowMyLibrary, onShowHome } from './js/header';
import './js/pagination';
// import { renderMarkup } from './js/my-render';
const container = getRefs().gallery;


// const apiData = new ApiService();
// import  getData  from './js/api';

// getData().then((base) => console.log(base.results));

import getTopMovies from './js/api';

getTopMovies().then(({ results }) => {
    console.log(results)  
  renderList(results, container);
} )
  
  let searchQuery = '';
  
  // Listiners
  getRefs().logo.addEventListener('click', onLogoClick);
  getRefs().homeBtn.addEventListener('click', onHomeBtnClick);
  getRefs().myLibraryBtn.addEventListener('click', onMyLybraryBtnClick);
  getRefs().form.addEventListener('submit', onFormSubmit);
  getRefs().watchedBtn.addEventListener('click', onWatchedBtnClick);
  getRefs().queueBtn.addEventListener('click', onQueueBtnClick);
  
  // Header functions
  function onLogoClick(e) {
    e.preventDefault();
    console.log('onLogoClick');
    onShowHome();
  }
  
  function onHomeBtnClick(e) {
    e.preventDefault();
    console.log('onHomeBtnClick');
    onShowHome();
  }
  
  function onMyLybraryBtnClick(e) {
    e.preventDefault();
    console.log('onMyLybraryBtnClick');
    onShowMyLibrary();
  }
  
  function onFormSubmit(e) {
    e.preventDefault();
    searchQuery = e.currentTarget.elements.searchQuery.value.trim();
  
    if (!searchQuery) {
      alert('Not correct search key');
      return;
    }
    console.log('onFormSubmit');
    console.log(searchQuery);
  }
  
  function onWatchedBtnClick() {
    if (getRefs().queueBtn.classList.contains('active-btn')) {
        getRefs().queueBtn.classList.remove('active-btn');
    }
    getRefs().watchedBtn.classList.add('active-btn');
  }
  
  function onQueueBtnClick() {
    if (getRefs().watchedBtn.classList.contains('active-btn')) {
        getRefs().watchedBtn.classList.remove('active-btn');
    }
    getRefs().queueBtn.classList.add('active-btn');
  }