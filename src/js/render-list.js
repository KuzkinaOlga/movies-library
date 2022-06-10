export function renderList(hits, container) {
    const markup = hits.map(({ id, poster, title, genres, release_date }) => {
   return `<li class="movie-card" data-id=${id}>
            <a href="" class="movie-link">
              
              <picture class="poster-thumb">
                  
        <source class="lzy_img" media="(min-width: 1200px)" 
        srcset=""  type="image/jpeg" width="310" height="450"  data-src="${poster} 1x,${poster} 2x">
                                                       
      
        <source class="lzy_img" media="(min-width: 768px)"
         srcset=""  type="image/jpeg" width="335" height="455"  data-src= "${poster} 1x,${poster} 2x">
                                                                    
                                            
        <source class="lzy_img" media="(max-width: 767px)"
         srcset=""  type="image/jpeg" width="280" height="400"  data-src= "${poster} 1x,${poster} 2x">
                                               
                    <img
                        src="#"
                        alt="${title}"
                        loading="lazy"
                        class="poster" 
                    />
                </picture>
               
                <div class="movie-info">     
                    <h2 class="movie-title">${title}</h2>
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