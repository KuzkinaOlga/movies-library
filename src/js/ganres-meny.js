
// import ApiService from './api';
// import { renderList } from './render-list';
// import { containerTui, paginationTotalItems } from './pagination';
// import { getRefs } from './get-refs';
// import {  genresAddOthers } from './genres';
// const getFilm = new ApiService();
// const galleryList = getRefs().gallery;
// // const ganresLink = document.querySelector('.ganres__link')
// export let searchBy = '';
// export let queryForTui = '';
// export default (() => {
//   const productsBtnRef = document.querySelector("[data-open-products]");
//   const productListRef = document.querySelector("[data-modal-products]");

//   productsBtnRef.addEventListener("click", () => {
//     const expanded =
//       productsBtnRef.getAttribute("aria-expanded") === "true" || false;

//     productsBtnRef.classList.toggle("is-open");
//     productsBtnRef.setAttribute("aria-expanded", !expanded);
 
//     productListRef.classList.toggle("is-open");
    
//   });
// })();


// const getFilmGenres = new ApiService();

// const ganreList = document.querySelector('.ganres__list');
// ganreList.addEventListener('click',ganreSelekt) 
// function ganreSelekt(evt) {
//     const currentGanre = evt.target.closest('li').firstChild.dataset.name;
   
//     console.log(currentGanre)
//     onLinkSubmit(currentGanre);
// }
// function searchGenresById(genre_ids) {
//   return genre_ids.map(id => genresData.genres.find(g => g.id === id));
// }

// let genresData = [];
// let idGanres = 0;   
// let ganreArray = [];
// const markup = [];
// function onLinkSubmit(currentGanre) {
    
//     renderGenres(currentGanre)
// function renderGenres(currentGanre) {
//      getFilmGenres.getGanres().then(({genres}) => {
//          genresData = genres;  
//          idGanres  = genresData.find((item) => {
//              return item.name === currentGanre  
          
//          });
         
//          getFilm.getSearchMovies(currentGanre).then(({ results, total_results }) => {
//              results.map((items) => {
//                  ganreArray = items.genre_ids;
//                  console.log(ganreArray)
//                  ganreArray.find((item) => {
//                      if (item === idGanres.id) {
//                          markup.push(items)
//                          console.log(markup) 
//                          galleryList.innerHTML = '';   
//                          return renderList(markup, galleryList);
                         
//                    }
//                  })
//              })
        
//           console.log(results)
//        console.log(idGanres.id)
          
//           if (total_results > 20) {
//       if (total_results > 19980) total_results = 19980;
//       paginationTotalItems(total_results);
//       searchBy = 'search';
//       containerTui.classList.remove('visually-hidden');
//     }
    
    
//       });

         
// });
      
// }
  
 
    
//     ganreList.classList.remove('is-open');
//     // ganresLink.classList.add('active')
// }