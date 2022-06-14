import axios from "axios";
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const API_KEY = '419c8d7d79cbcac22c5520f1ac14d2c7';

export default class ApiService {
    constructor() {
      this.searchQuery = '';
      this.page = 1;
    }
    async  getTopMovies() {
        try { 
        const {data} =await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
        return data; 
        }
        catch{console.log('error')}
}
    async  getSearchMovies(searchQuery) {
        try { 
        const {data} =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}`);
        this.page += 1;
        return data ; 
        }
        catch{}
}
  async getGanres() {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
      console.log(data);
    }
    catch { }
  }
    async getMainMovie(searchQuery) {
        try {
          const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${searchQuery}?api_key=${API_KEY}&language=en-US`);
          const base = await {
            title: data.original_title,
            genres: data.genres,
            id: data.id,
            date: data.release_date,
            poster: data.poster_path,
            about: data.overview,
            populanty: data.popularity,
            vote: data.vote_average,
            votes: data.vote_count
          };

       return base;
      }
        catch { }
}
    resetPage() {
       this.page = 1; 
    }
    get query() {
      return  this.searchQuery;
    };
    set query(newQuery) {
        this.searchQuery = newQuery;
  };
//    getCurrentPage() {
//     return this.page;
//   };
//   getPer_page() {
//     return this.per_page;
//   }
}

// export default function getDataTest() {
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
=======
// export async function getTopMovies() {
//     try { 
//         const {data} =await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
// //       this.page += 1;
//       return data; 
//     }
//     catch{console.log('error')}
// }

// export async function getSearchMovies(searchQuery) {
//     try { 
//         const {data} =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}`);
// //       this.page += 1;
//       return data ; 
//     }
//     catch{}
// }

// export function getGanres() {
//     return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
//         .then(({ data }) => {
//             return data.genres 
//         })
// }


