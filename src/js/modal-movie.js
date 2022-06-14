import * as basicLightbox from 'basiclightbox'
import { getRefs } from './get-refs';
import axios from "axios";

const API_KEY = '419c8d7d79cbcac22c5520f1ac14d2c7';
const container = getRefs().gallery;
container.addEventListener('click', onContainerClick);

const ADD_TO_WATCHED_FILM = "add-to-watched-film";
const ADD_TO_QUEUE_FILM = "add-to-queue-film";


let currentMovie = '';
export function onContainerClick(event) {

  if (!event.target.classList.contains('poster')) {
    return;
  } event.preventDefault();
  window.addEventListener('keydown', onImageClose);

  getDataTest(event.target.alt).then((film) => {
    console.log(film);
    currentMovie = basicLightbox.create(`
    <div class="current-movie">
        <img  src="${event.target.src}" class="current-movie__img">
        <div class="current-movie__info">
        <h2 class="current-movie__title"> ${film.title}</h2>
        <p class="current-movie__votes"> Vote / Votes
          <span class="current-movie__vote-data">${film.vote}</span>
          <span class="current-movie__votes-data">${film.votes}</span> 
        </p>
        <p class="current-movie__popularity"> Popularity <span class="current-movie__popularity-data">${film.populanty}</span></p>
        <p class="current-movie__original-title"> Original Title <span class="current-movie__original-title-data">${film.title}</span></p>
        <p class="current-movie__genre"> Genre
          //<span class="current-movie__genre-data">${film.genres[{}]}</span>
          <ul class="current-movie__genre-data">
                        ${film.genres}
                        </ul>

        </p>
        <div class="current-movie__about-section">
          <h3 class="current-movie__about"> ABOUT</h3>
          <p class="current-movie__about-data"> ${film.about} </p>
        </div>

        <div class="current-movie__btn-container">
        <button type = "button" class="current-movie_btn-add-to-watched">ADD TO WATCHED</button>
        <button type = "button" class="current-movie_btn-add-to-queue">ADD TO QUEUE</button>
      </div>


    </div>` 
      );
    
    currentMovie.show();
   
  });
  

  const btnAddToWatched = document.querySelector(".current-movie_btn-add-to-watched");
  const btnAddToQueue= document.querySelector(".current-movie_btn-add-to-queue");  

  // itemW = currentMovie;
  // itemQ = currentMovie;

  console.log(btnAddToWatched);

  btnAddToWatched.addEventListener('click', onClickToAddToWatchedBtn);
  btnAddToQueue.addEventListener('click', onClickToAddToQueueBtn);


}
 
  function onImageClose(event) {
    if (event.code === 'Escape') {
      currentMovie.close();
      container.removeEventListener('keydown', onImageClose); 
    }
  }


function onClickToAddToWatchedBtn() {
  console.log("CLICK TO ADD 1");
  //localStorage.setItem(ADD_TO_WATCHED_FILM, JSON.stringify(item));

  
}
function onClickToAddToQueueBtn() {
  console.log("CLICK TO ADD 2");
  //localStorage.setItem(ADD_TO_QUEUE_FILM, JSON.stringify(item));
  
}

export default function getDataTest(searchQuery) {
    //let base = {};
    return axios.get(`https://api.themoviedb.org/3/movie/55?api_key=${API_KEY}&language=en-US&query=${searchQuery}`)
        .then(({ data }) =>{  
            base = {
                title: data.original_title,
                genres: data.genres,
                id: data.id,
                date: data.release_date,
                poster: data.poster_path,
                about: data.overview,
                populanty: data.popularity,
                vote: data.vote_average,
                votes: data.vote_count
            }
            return base;
        }
        )
    }