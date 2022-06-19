// index-js
// import { renderList } from './js/render-list';
// // import { renderMarkup } from './js/film-find';
// import { getRefs } from './js/get-refs';
// import darkTheme from './js/dark-theme';
// import { onShowMyLibrary, onShowHome } from './js/header';
// import './js/pagination';
// import './js/film-find';
// import './js/up-btn';
// import ApiService from './js/api';
// import { containerTui } from './js/pagination';
// import { paginationTotalItems } from './js/pagination';
// import { onFooterClick } from './js/modal-footer';
// import { onContainerClick } from './js/modal-movie';
// // import { onContainerClick } from './js/my-modal';
// import {showWarningNoName} from './js/warning'
// import {getWatchinLocal} from './js/my-libruary'


// export let searchBy = '';
// export let queryForTui = '';
// const apiData = new ApiService();
// const container = getRefs().gallery;
// const mainCard = getRefs().linkCard;
// const foterLink = getRefs().footerLink;

// darkTheme();

// // Top movies
// function topMoviesRender() {
//   container.innerHTML = '';
//   apiData.getTopMovies().then(({ results }) => {
//     renderList(results, container);
//   });
// }
// topMoviesRender();

// // Main movie
// container.addEventListener('click', onContainerClick);

// // Footer link
// foterLink.addEventListener('click', onFooterClick);

// // Listiners
// getRefs().logo.addEventListener('click', onLogoClick);
// getRefs().homeBtn.addEventListener('click', onHomeBtnClick);
// getRefs().myLibraryBtn.addEventListener('click', onMyLybraryBtnClick);
// // getRefs().watchedBtn.addEventListener('click', onWatchedBtnClick);
// // getRefs().queueBtn.addEventListener('click', onQueueBtnClick);

// // Header functions
// function onLogoClick(e) {
//   e.preventDefault();
//   onShowHome();
//   topMoviesRender();
//   getRefs().pagination.classList.remove('pagination-off');
// }

// function onHomeBtnClick(e) {
//   e.preventDefault();
//   onShowHome();
//   topMoviesRender();
//   getRefs().pagination.classList.remove('pagination-off');
// }

// function onMyLybraryBtnClick(e) {
//   e.preventDefault();
//   onShowMyLibrary();
//   container.innerHTML = '';
//   getRefs().pagination.classList.add('pagination-off');
//   getWatchinLocal();
// }

// function onWatchedBtnClick() {
//   if (getRefs().queueBtn.classList.contains('active-btn')) {
//     getRefs().queueBtn.classList.remove('active-btn');
//   }
//   getRefs().watchedBtn.classList.add('active-btn');
//   container.innerHTML = '';
//   getWatchinLocal();
// }

// function onQueueBtnClick() {
//   if (getRefs().watchedBtn.classList.contains('active-btn')) {
//     getRefs().watchedBtn.classList.remove('active-btn');
//   }
//   container.innerHTML = '';
// }
  


// GENRES
// import genres from '../data/genres.json';
// import ApiService from './api';
// const getFilmGanres = new ApiService();

// //Функция возвращает массив объектов жанров по id

// function searchGenresById(genre_ids) {
//   console.log(genre_ids)
//   getFilmGanres.getGanres().then(({ genres }) => {
//     const unicGanres = genres.filter((ganre) => ganre.id);
//     const unicGanresArray = genre_ids.map(id => unicGanres.filter(g => g.id === id));
//     return unicGanresArray;
//   })
//   }

// //Если жанров больше 2, добавляет 3 - Other

// function genresAddOthers(genre_ids) {
//   let genresItems = searchGenresById(genre_ids);
//   console.log(genresItems)
//   if (genresItems.length > 2) {
//     let arrey = genresItems.map(item => item.name).slice(0, 2);
//     arrey.push('Other');
//     return arrey;
//   }
//   return genresItems.map(item => item.name);
// }

export { genresAddOthers };


// modal-movie
// import * as basicLightbox from 'basiclightbox'
// import { getRefs } from './get-refs';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import ApiService from './api';


// const apiMainMovie = new ApiService();
// const container = getRefs().gallery;
// container.addEventListener('click', onContainerClick);


// let ADD_TO_WATCHED_FILM = "add-to-watched-film";
// let ADD_TO_QUEUE_FILM = "add-to-queue-film";


// // let currentMovie = '';
// const addToWachedFilms = [];
// const addToQueueFilms = [];
// export function onContainerClick(event) {
//   const parent = event.target.closest('li').firstChild;
//   const { id } = parent.dataset;
//   if (!parent) {
//     return;
//   }

//   event.preventDefault();
//   window.addEventListener('keydown', onImageClose);

//   apiMainMovie.getMainMovie(id).then(({ title, genres, date, poster, about, populanty, vote, votes,id }) => {
//     const ganreList = genres.map((ganre) => ganre.name).join(', ');
//     const genre_ids = genres.map((ganre) => ganre.id);
   
//    const currentMovie = basicLightbox.create(`
//     <div class="current-movie">
//         <img  src="https://image.tmdb.org/t/p/w500${poster}" class="current-movie__img">
//         <div class="current-movie__info">

//         <h2 class="current-movie__title"> ${event.target.alt}</h2>
//         <p class="current-movie__votes"> Vote / Votes
//           <span class="current-movie__vote-data">${vote}</span>
//           <span class="current-movie__votes-data">${votes}</span>
//         </p>
//         <p class="current-movie__popularity"> Popularity <span class="current-movie__popularity-data">${populanty}</span></p>
//         <p class="current-movie__original-title"> Original Title <span class="current-movie__original-title-data">${title}</span></p>
//         <p class="current-movie__genre"> Genre
//           <span class="current-movie__genre-data">${ganreList}</span>
//         </p>
//         <div class="current-movie__about-section">
//           <h3 class="current-movie__about"> ABOUT</h3>
//           <p class="current-movie__about-data"> ${about} </p>
//         </div>

//         <div class="current-movie__btn-container">
//         <button type = "button" class="current-movie_btn-add-to-watched">ADD TO WATCHED</button>
//         <button type = "button" class="current-movie_btn-add-to-queue">ADD TO QUEUE</button>
//       </div>


//     </div>`
//       );
   
//   currentMovie.show();
//   const btnAddToWatched = document.querySelector(".current-movie_btn-add-to-watched");
//   const btnAddToQueue = document.querySelector(".current-movie_btn-add-to-queue");
//   const currentMovieInfo = { id: id, original_title: title, release_date: date, poster_path: poster, genre_ids: genre_ids };
//   const dataWatchinMovie = JSON.parse(localStorage.getItem("add-to-watched-film")) ||  addToWachedFilms ;

    
//     btnAddToWatched.addEventListener("click", (() => {
//  const unicId = dataWatchinMovie.map(({ id }) => {
//         if (id === currentMovieInfo.id) {
//           return true
//         }
//  });
//       if (unicId.find((item)=> item===true)) {
//       return Notify.warning('You have already added this movie to Add to Wathed')
//       }
//       Notify.success('You add movie to Wathed')
//         dataWatchinMovie.push(currentMovieInfo);
//         localStorage.setItem(ADD_TO_WATCHED_FILM, JSON.stringify(dataWatchinMovie));
//     }));
  

//     btnAddToQueue.addEventListener("click", (() => {
     
//     const unicId = dataWatchinMovie.map(({ id }) => {
//         if (id === currentMovieInfo.id) {
//           return true;
//         }
//     });
     
//       if (unicId.find((item)=> item===true)) {
//       return Notify.warning('You have already added this movie to Add to Queue')
//       }
//       Notify.success('You add movie to wathed')
//       dataWatchinMovie.push(currentMovieInfo);
//       localStorage.setItem(ADD_TO_QUEUE_FILM, JSON.stringify(addToQueueFilms));
//   }));
//   });
// }

//   function onImageClose(event) {
//     if (event.code === 'Escape') {
//       currentMovie.close();
//       window.removeEventListener('keydown', onImageClose);
//     }
//   }

// my libruary
// import { getRefs } from './get-refs';
// import { renderList } from './render-list';
// const container = getRefs().gallery;
// const watchedLocal = () => {
    
//      try {
//       const dataWatchinMovie = JSON.parse(localStorage.getItem("add-to-watched-film"));
//          return dataWatchinMovie;
//   }
//   catch (error) {
//     console.error("Get state error: ", error.message);
//     }
// }
// export function getWatchinLocal() {
//     container.innerHTML = "";
//  if (!watchedLocal()) {
//           return;
//       }
//       renderList( watchedLocal(), container);
// };


// Libruary
// import { getRefs } from './get-refs';
// import axios from "axios";

// import ApiService from './api';
// import { onClickToAddToQueueBtn } from './modal-movie';
// import noImg from '../images/no-poster-available.jpeg';


// const watchedBtn = document.querySelector('.js-watched-btn');
// const queuedBtn = getRefs().queueBtn;
// const libraryPage = document.querySelector('.films__library__page')
// const homeButton = getRefs().homeBtn;

// let watchedFilms = [];
// let queuedFilms = [];
// const films = {};



// let ADD_TO_WATCHED_FILM_L = "add-to-watched-film";
// let ADD_TO_QUEUE_FILM_L = "add-to-queue-film";

// watchedBtn.addEventListener('click', onWatchedBtnClick);
// queuedBtn.addEventListener('click', onQueuedBtnClick);
// homeButton.addEventListener('click', onHomeBtnClickn);

// function onHomeBtnClickn(evt) {
//     libraryPage.classList.add('js-is-hidden');
// }

// export function onWatchedBtnClick(evt) {
//     evt.preventDefault();
//     watchedFilms = JSON.parse(localStorage.getItem(ADD_TO_WATCHED_FILM_L));
//     console.log(watchedFilms);
//     return renderLibrary(watchedFilms);
// }

// export function onQueuedBtnClick(evt) {
//     evt.preventDefault();
//     queuedFilms = JSON.parse(localStorage.getItem(ADD_TO_QUEUE_FILM_L));
//     console.log(queuedFilms);
//     return renderLibrary(queuedFilms);
// }


// export function renderLibrary(films) {
//     const markup = films.map(({ original_title, poster_path, release_date, genre_ids }) => {

//         return `<li class="films__list">
//         <a class="films__id" data-id="">
//   <div class="film__photo__card">

//   <picture class="films__pictures__thumb">


//         <source class="lazy_image" media="(min-width: 1200px)"
//         srcset=""  type="image/jpeg" width="310" height="450"  data-src="https://themoviedb.org/t/p/w500${poster_path} 1x,https://themoviedb.org/t/p/w500${poster_path} 2x">


//         <source class="lazy_image" media="(min-width: 768px)"
//          srcset=""  type="image/jpeg" width="335" height="455"  data-src="https://themoviedb.org/t/p/w500${poster_path} 1x,https://themoviedb.org/t/p/w500${poster_path} 2x">


//         <source class="lazy_image" media="(max-width: 767px)"
//          srcset=""  type="image/jpeg" width="280" height="400"  data-src="https://themoviedb.org/t/p/w500${poster_path} 1x,https://themoviedb.org/t/p/w500${poster_path} 2x">


//                     <img
//                         src="https://themoviedb.org/t/p/w500${poster_path}"
//                         alt="${original_title}"
//                         loading="lazy"
//                         class="film__picture"
//                     />
//                 </picture>
//   <div class="film__info">


//                 <div class="film__info">
//                     <h2 class="film__title">${original_title}</h2>
//                     <div class="film__description">
//                       <ul class="film__genres__list">
//                      ${genre_ids}
//                       </ul>
//                       <p class="film__release__date">${releaseDate(release_date)}</p>
//                       <p class="film__vote"></p>
//                     </div>
//                 </div>
//   </div>
// </div>
// </a></li>
//         `}).join('');
//     libraryPage.insertAdjacentHTML("beforeend", markup);
// }

//  function releaseDate(year) {
//     if (!year)  'No data';
//     return year.slice(0, 4);
// }


// Warning!!!
// import { getRefs } from './get-refs';
// const searchWarning = getRefs().headerContainer;
// export function showWarningNoName() {
//     const message = document.createElement("p");
//     message.classList.add("search-warning");
//     message.textContent = "Search result not successful. Enter the correct movie name and";
//     searchWarning.append(message);
//     setTimeout(()=>{message.remove()},3000)
// }
// export function showWarningErrorName() {
//     const message = document.createElement("p");
//     message.classList.add("search-warning");
//     message.textContent = "Please enter name movie";
//     searchWarning.append(message);
//     setTimeout(()=>{message.remove()},3000)
// }


// LIBRUARY
// import { getRefs } from './get-refs';
// import axios from "axios";

// import ApiService from './api';
// import { onClickToAddToQueueBtn } from './modal-movie';
// import noImg from '../images/no-poster-available.jpeg';
// import { genresAddOthers } from './genres';

// const watchedBtn = document.querySelector('.js-watched-btn');
// const queuedBtn = getRefs().queueBtn;
// // const libraryPage = document.querySelector('.films__library__page')
// // const homeButton = getRefs().homeBtn;
// const container = getRefs().gallery

// let watchedFilms = [];
// let queuedFilms = [];
// const films = {};



// let ADD_TO_WATCHED_FILM_L = "add-to-watched-film";
// let ADD_TO_QUEUE_FILM_L = "add-to-queue-film";

// watchedBtn.addEventListener('click', onWatchedBtnClick);
// queuedBtn.addEventListener('click', onQueuedBtnClick);
// // homeButton.addEventListener('click', onHomeBtnClickn);

// // function onHomeBtnClickn(evt) {
// //     libraryPage.classList.add('js-is-hidden');
// // }

// export function onWatchedBtnClick(evt) {
//     evt.preventDefault();
//     watchedFilms = JSON.parse(localStorage.getItem(ADD_TO_WATCHED_FILM_L));
//     console.log(watchedFilms);
//     container.innerHTML = "";
//      renderLibrary(watchedFilms);
// }

// export function onQueuedBtnClick(evt) {
//     evt.preventDefault();
//     queuedFilms = JSON.parse(localStorage.getItem(ADD_TO_QUEUE_FILM_L));
//    container.innerHTML = "";
//     console.log(queuedFilms);
//     renderLibrary(queuedFilms);
// }


//  function renderGenres(genre_ids) {
//   return genresAddOthers(genre_ids)
//     .map(genre => `<li class="movie-genres">${genre}</li>`)
//     .join(' ,');
// }

// function renderLibrary(films) {

    
//     const markup = films.map(({ original_title, poster_path, release_date, genre_ids, vote_average }) => {
        
//         let genres = renderGenres(genre_ids);
        
//         return `<li class="films__list">
//         <a class="films__id" data-id="">
//   <div class="film__photo__card">

//   <picture class="films__pictures__thumb">


//         <source class="lazy_image" media="(min-width: 1200px)"
//         srcset=""  type="image/jpeg" width="310" height="450"  data-src="https://themoviedb.org/t/p/w500${poster_path} 1x,https://themoviedb.org/t/p/w500${poster_path} 2x">


//         <source class="lazy_image" media="(min-width: 768px)"
//          srcset=""  type="image/jpeg" width="335" height="455"  data-src="https://themoviedb.org/t/p/w500${poster_path} 1x,https://themoviedb.org/t/p/w500${poster_path} 2x">


//         <source class="lazy_image" media="(max-width: 767px)"
//          srcset=""  type="image/jpeg" width="280" height="400"  data-src="https://themoviedb.org/t/p/w500${poster_path} 1x,https://themoviedb.org/t/p/w500${poster_path} 2x">


//                     <img
//                         src="https://themoviedb.org/t/p/w500${poster_path}"
//                         alt="${original_title}"
//                         loading="lazy"
//                         class="film__picture"
//                     />
//                 </picture>
//   <div class="film__info">


//                 <div class="film__info">
//                     <h2 class="film__title">${original_title}</h2>
//                     <div class="film__description">
//                       <ul class="film__genres__list">
//                      ${genres}
//                       </ul>
//                       <p class="film__release__date">${releaseDate(release_date)}</p>
//                       <p class="film__vote">${vote_average}</p>
//                     </div>
//                 </div>
//   </div>
// </div>
// </a></li>
//         `}).join('');
//     container.insertAdjacentHTML("beforeend", markup);
// }

//  function releaseDate(year) {
//     if (!year)  'No data';
//     return year.slice(0, 4);
// }
  
// MAIN MODAL
// import * as basicLightbox from 'basiclightbox'
// import { getRefs } from './get-refs';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import ApiService from './api';


// const apiMainMovie = new ApiService();
// const container = getRefs().gallery;
// container.addEventListener('click', onContainerClick);


// let ADD_TO_WATCHED_FILM = "add-to-watched-film";
// let ADD_TO_QUEUE_FILM = "add-to-queue-film";


// // let currentMovie = '';
// const addToWachedFilms = [];
// const addToQueueFilms = [];
// export function onContainerClick(event) {
//   const parent = event.target.closest('li').firstChild;
//   const { id } = parent.dataset; 
//   if (!parent) {
//     return;
//   }

//   event.preventDefault();
//   window.addEventListener('keydown', onImageClose);

//   apiMainMovie.getMainMovie(id).then(({ title, genres, date, poster, about, populanty, vote, votes,id }) => {
//     const ganreList = genres.map((ganre) => ganre.name).join(', ');
//     const genre_ids = genres.map((ganre) => ganre.id);
//    console.log(id)
//    const currentMovie = basicLightbox.create(`
//     <div class="current-movie">
//         <img  src="https://image.tmdb.org/t/p/w500${poster}" class="current-movie__img">
//         <div class="current-movie__info">

//         <h2 class="current-movie__title"> ${event.target.alt}</h2>
//         <p class="current-movie__votes"> Vote / Votes
//           <span class="current-movie__vote-data">${vote}</span>
//           <span class="current-movie__votes-data">${votes}</span>
//         </p>
//         <p class="current-movie__popularity"> Popularity <span class="current-movie__popularity-data">${populanty}</span></p>
//         <p class="current-movie__original-title"> Original Title <span class="current-movie__original-title-data">${title}</span></p>
//         <p class="current-movie__genre"> Genre
//           <span class="current-movie__genre-data">${ganreList}</span>
//         </p>
//         <div class="current-movie__about-section">
//           <h3 class="current-movie__about"> ABOUT</h3>
//           <p class="current-movie__about-data"> ${about} </p>
//         </div>

//         <div class="current-movie__btn-container">
//         <button type = "button" class="current-movie_btn-add-to-watched">ADD TO WATCHED</button>
//         <button type = "button" class="current-movie_btn-add-to-queue">ADD TO QUEUE</button>
//       </div>


//     </div>`
//       );
   
//   currentMovie.show();
//   const btnAddToWatched = document.querySelector(".current-movie_btn-add-to-watched");
//   const btnAddToQueue = document.querySelector(".current-movie_btn-add-to-queue"); 

//   const currentMovieInfo = { id: id, original_title: title, release_date: date, poster_path: poster, genre_ids: genre_ids, vote_average: vote,
//         vote_count: votes };
//     const dataWatchinMovie = JSON.parse(localStorage.getItem("add-to-watched-film")) || addToWachedFilms;
//     const dataQueueMovie = JSON.parse(localStorage.getItem("add-to-queue-film")) || addToQueueFilms;
    

    
//     btnAddToWatched.addEventListener("click", (() => {
//       const unicId = dataWatchinMovie.map(({ id }) => {
//           if (id === currentMovieInfo.id) {
//             return true
//           }
//       });
//         if (unicId.find((item)=> item===true)) {
//          return Notify.warning('You have already added this movie to Watched')
//         }
//         Notify.success('You added this movie to Watched')

//         dataWatchinMovie.push(currentMovieInfo);
//         localStorage.setItem(ADD_TO_WATCHED_FILM, JSON.stringify(dataWatchinMovie));
//     }));
  

//     btnAddToQueue.addEventListener("click", (() => {  
     

//       const unicIdQ = dataQueueMovie.map(({ id }) => {
//         if (id === currentMovieInfo.id) {  
//             return true;
//           }
//       });
      
//         if (unicIdQ.find((item)=> item===true)) {
//         return Notify.warning('You have already added this movie to Queue')
//         }
//         Notify.success('You added this movie to Queue')
//         dataQueueMovie.push(currentMovieInfo);
//         localStorage.setItem(ADD_TO_QUEUE_FILM, JSON.stringify(dataQueueMovie));
//     })); 

//   });
// }

//   function onImageClose(event) {
//     if (event.code === 'Escape') {
//       currentMovie.close();
//       window.removeEventListener('keydown', onImageClose); 
//     }
//   }