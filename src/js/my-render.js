// export function renderMarkup( hits,  container) {
//   const markup = hits.map(({ id, poster_path, original_title, genres, release_date }) => {
//  return  `<a class="post" data-id=${id}>
//   <div class="photo-card">
//   <div class="thumb">
//   <picture class="poster-thumb">
                  
//         <source class="lzy_img" media="(min-width: 1200px)" 
//         srcset=""  type="image/jpeg" width="310" height="450"  data-src="${poster_path} 1x,${poster_path} 2x">
                                                       
      
//         <source class="lzy_img" media="(min-width: 768px)"
//          srcset=""  type="image/jpeg" width="335" height="455"  data-src= "${poster_path} 1x,${poster_path} 2x">
                                                                    
                                            
//         <source class="lzy_img" media="(max-width: 767px)"
//          srcset=""  type="image/jpeg" width="280" height="400"  data-src= "${poster_path} 1x,${poster_path} 2x">
                                               
//                     <img
//                         src="https://image.tmdb.org/t/p/w500${poster_path}"
//                         alt="${original_title}"
//                         loading="lazy"
//                         class="poster" 
//                     />
//                 </picture>
//   <div class="info">
   
               
//                 <div class="movie-info">     
//                     <h2 class="movie-title">${original_title}</h2>
//                     <div class="movie-description">
//                       <ul class="genres-list">
//                       ${genres}
//                       </ul>
//                       <p class="movie-date">${release_date}</p>
//                     </div>                                 
//                 </div>
//   </div>
//   </div>
// </div>
// </a>
//         `
//     }).join('');
//     container.insertAdjacentHTML("beforeend", markup);
// }