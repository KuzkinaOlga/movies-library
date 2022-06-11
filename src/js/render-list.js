import { getGanres } from './api.js';

// getTopMovies().then(({results})=>console.log(results))
export function renderList(hits, container) {
    
    const markup = hits.map(({ id, backdrop_path, original_title, genres, release_date }) => {
        // console.log(genre_ids)
        // let elem ;
        // getGanres().then((genres) => {
        //     genre_ids.forEach((elem) => { return elem = elem })
        //     // console.log(elem )
        //     genres.forEach((item) => {
               
        //         if (item.id === elem) {
        //     console.log(item.name)        
        //        }
        //    }   ) 
        // })
        // console.log(genre_ids.forEach((item)=>console.log(item)))
   return `<li class="movie-card" data-id=${id}>
            <a href="" class="movie-link">
              
              <picture class="poster-thumb">
                  
        <source class="lzy_img" media="(min-width: 1200px)" 
        srcset=""  type="image/jpeg" width="310" height="450"  data-src="${backdrop_path} 1x,${backdrop_path} 2x">
                                                       
      
        <source class="lzy_img" media="(min-width: 768px)"
         srcset=""  type="image/jpeg" width="335" height="455"  data-src= "${backdrop_path} 1x,${backdrop_path} 2x">
                                                                    
                                            
        <source class="lzy_img" media="(max-width: 767px)"
         srcset=""  type="image/jpeg" width="280" height="400"  data-src= "${backdrop_path} 1x,${backdrop_path} 2x">
                                               
                    <img
                        src=""
                        alt="${original_title}"
                        loading="lazy"
                        class="poster" 
                    />
                </picture>
               
                <div class="movie-info">     
                    <h2 class="movie-title">${original_title}</h2>
                    <div class="movie-description">
                      <ul class="genres-list">
                      ${genres}
                      </ul>
                      <p class="movie-date">${release_date}</p>
                    </div>                                 
                </div>
            </a>
         </li>`

      }).join('');
      container.insertAdjacentHTML("beforeend", markup);
  }