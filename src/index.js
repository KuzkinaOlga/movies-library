import { renderList } from './js/render-list';
import { getRefs } from './js/get-refs';
import  getData  from './js/api';

const refs = getRefs();




// import ApiService from './js/api.js';




// const apiData = new ApiService();


getData().then((base) => console.log(base));

