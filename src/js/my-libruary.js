
import { getRefs } from './get-refs';
import { renderList } from './render-list';
const container = getRefs().gallery;
export function getWatchinLocal() {
     container.innerHTML = "";
  try {
      const dataWatchinMovie = JSON.parse(localStorage.getItem("add-to-watched-film"));
      if (!dataWatchinMovie) {
          return;
      }
      renderList(dataWatchinMovie, container);
  }
  catch (error) {
    console.error("Get state error: ", error.message);
    }
};


