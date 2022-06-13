
import { renderList } from './js/render-list';
import { getRefs } from './js/get-refs';
import darkTheme from './js/dark-theme';
import { onShowMyLibrary, onShowHome } from './js/header';
import './js/pagination';
import ApiService from './js/api';

const apiData = new ApiService();
const container = getRefs().gallery;
apiData.getGanres()

darkTheme();

// Top movies
function topMoviesRender() {
  apiData.getTopMovies().then(({ results }) => {
  renderList(results, container);
} )} 
topMoviesRender();

// Search movies
  function onFormSubmit(e) {
    e.preventDefault();
    apiData.query = e.currentTarget.elements.searchQuery.value.trim();
  
    if (!apiData.query) {
      alert('Please enter name movie');
      return;
    }
    apiData.getSearchMovies(apiData.query).then(({results}) => {
      if (results.length === 0) {
         alert('not find');
      } else {
      container.innerHTML = '';
      renderList(results, container);
      }
      
    });
    console.log('onFormSubmit');
    console.log(apiData.query);
    getRefs().form.reset();
}
  


  
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
    topMoviesRender ()
  }
  
  function onHomeBtnClick(e) {
    e.preventDefault();
    console.log('onHomeBtnClick');
    onShowHome();
    topMoviesRender ()
  }
  
  function onMyLybraryBtnClick(e) {
    e.preventDefault();
    console.log('onMyLybraryBtnClick');
    onShowMyLibrary();
    container.innerHTML = '';
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