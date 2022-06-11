
// import { renderList } from './js/render-list';
import { getRefs } from './js/get-refs';
import './js/pagination';
import { renderMarkup } from './js/my-render';
const container = getRefs().gallery;


// const apiData = new ApiService();
// import  getData  from './js/api';

// getData().then((base) => console.log(base.results));

import getTopMovies from './js/api';

getTopMovies().then(({ results }) => {
    console.log(results)  
   renderMarkup(results, container);
} )

