import axios from "axios";
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const API_KEY = '419c8d7d79cbcac22c5520f1ac14d2c7';


// export default function getData() {
//     let base = {};
//     return axios.get(`https://api.themoviedb.org/3/movie/55?api_key=${API_KEY}`)
//         .then(({ data }) =>{  
//             base = {
//                 title: data.original_title,
//                 genres: data.genres,
//                 id: data.id,
//                 date: data.release_date,
//                 poster: data.poster_path,
//                 about: data.overview,
//                 populanty: data.popularity,
//                 vote: data.vote_average,
//                 votes: data.vote_count
//             }
//             return base;
//         }
//         )
//     }
       

export default function getTopMovies() {
    Loading.standard();
    return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        .then(({ data }) => {
          return data  
        })
        .finally(()=>{
            Loading.remove();
        })
}

export function getGanres() {
    Loading.standard();
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
        .then(({ data }) => {
            return data.genres 
        })
        .finally(()=>{
            Loading.remove();
        })
}

