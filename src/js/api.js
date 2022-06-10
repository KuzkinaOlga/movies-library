import axios from "axios";

const API_KEY = '419c8d7d79cbcac22c5520f1ac14d2c7';


export default function getData() {
    let base = {};
    return axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
        .then(({ data }) => {
            base = {
                title: data.original_title,
                genres: data.genres,
                id: data.id,
                dat: data.release_date
            }
       return base
    })
}
       

function getTopMovies() {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
        .then(({ data }) => console.log(data))
}
getTopMovies()