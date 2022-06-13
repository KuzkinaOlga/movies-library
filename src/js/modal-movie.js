import * as basicLightbox from 'basiclightbox'
import { getRefs } from './get-refs';
const container = getRefs().gallery;
container.addEventListener('click', onContainerClick);

let currentMovie = '';
export function onContainerClick(event) {

  if (!event.target.classList.contains('poster')) {
    return;
  } event.preventDefault();
  window.addEventListener('keydown', onImageClose);
//   const size = event.target.dataset.source;

    currentMovie = basicLightbox.create(`
  <div class="current-movie"></div>
		   <img  src="">
	`
  );
  currentMovie.show();

}
 
  function onImageClose(event) {
    if (event.code === 'Escape') {
      currentMovie.close();
      container.removeEventListener('keydown', onImageClose); 
    }
}