import axios from "axios";

const API_KEY = '419c8d7d79cbcac22c5520f1ac14d2c7';


    export default   function getData () {
       return  axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
       .then((resp)=> console.log(resp))
}
