import axios from "axios";

const API_KEY = '419c8d7d79cbcac22c5520f1ac14d2c7';


// export default class ApiService {
//     constructor() {
//       this.searchQuery = 'war';
//       this.page = 1;
//       this.per_page = 20;
//     }
//  async fetchImages() {

//     const options =  new URLSearchParams({
//         key: API_KEY,
//         // image_type: "photo",
//         // q: this.searchQuery,
//         // image_type: "photo",
//         // orientation: "horizontal",
//         // safesearch: true,
//         // per_page: this.per_page,
//         // page:  this.page,
        
// })
//     try {
//       const {data} =await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${options}`);
//       this.page += 1;
//       return data; }
//       catch{Notify.failure(error.message);}        
//   };
    export default   function getData () {
       return  axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
       .then((resp)=> console.log(resp))
}
