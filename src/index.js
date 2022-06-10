import { renderList } from './js/render-list';
import { getRefs } from './js/get-refs';

const container = getRefs().gallery;

import getTopMovies from './js/api';

getTopMovies().then(({ results }) => {
    console.log(results)  
    renderList(results,container)
} )
