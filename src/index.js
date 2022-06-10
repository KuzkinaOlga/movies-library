import { renderList } from './js/render-list';
import { getRefs } from './js/get-refs';

// import ApiService from './js/api.js';

// const apiData = new ApiService();
import  getData  from './js/api';

getData().then((base) => console.log(base));

