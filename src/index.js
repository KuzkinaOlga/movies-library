
import { renderList } from './js/render-list';
import { getRefs } from './js/get-refs';
// import './js/pagination';

const container = getRefs().gallery;


// const apiData = new ApiService();
import  getData  from './js/api';

getData().then((base) => console.log(base));

import getTopMovies from './js/api';

getTopMovies().then(({ results }) => {
    console.log(results)  
    renderList(results,container)
} )

