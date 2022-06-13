import { getGanres } from './api.js';

// getTopMovies().then(({results})=>console.log(results))
export function renderList(hits, container) {
    
    const markup = hits.map(({ id, poster_path, original_title, genres, release_date }) => {
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
   return  `<a class="post" data-id=${id}>
  <div class="photo-card">
  <div class="thumb">
  <picture class="poster-thumb">
                  
        <source class="lzy_img" media="(min-width: 1200px)" 
        srcset=""  type="image/jpeg"   data-src="https://image.tmdb.org/t/p/w300${poster_path} 1x,https://image.tmdb.org/t/p/w300${poster_path} 2x">
                                                       
      
        <source class="lzy_img" media="(min-width: 768px)"
         srcset=""  type="image/jpeg"   data-src= "https://image.tmdb.org/t/p/w768${poster_path} 1x,https://image.tmdb.org/t/p/w768${poster_path} 2x">
                                                                    
                                            
        <source class="lzy_img" media="(max-width: 767px)"
         srcset=""  type="image/jpeg"   data-src= "https://image.tmdb.org/t/p/w1024${poster_path} 1x,https://image.tmdb.org/t/p/w1024${poster_path} 2x">
                                               
                    <img
                        src="https://image.tmdb.org/t/p/w500${poster_path}"
                        alt="${original_title}"
                        loading="lazy"
                        class="poster" 
                    />
                </picture>
  <div class="info">
   
               
                <div class="movie-info">     
                    <h2 class="movie-title">${original_title}</h2>
                    <div class="movie-description">
                      <ul class="genres-list">
                      ${genres}
                      </ul>
                      <p class="movie-date">${release_date}</p>
                    </div>                                 
                </div>
  </div>
  </div>
</div>
</a>
        `

      }).join('');
      container.insertAdjacentHTML("beforeend", markup);
  }