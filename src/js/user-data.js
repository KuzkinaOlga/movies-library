import db from './firebase';
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';
// import { userId } from './login';
import { processingStorage } from './library-pagination';
import { getRefs } from './get-refs';
const userId = 'izmMJHXqY6NJwC6a2MO5REctGrb2';
const libraryContainer = getRefs().gallery;
let currentPage = 1;

// GET COLLECTION REF
const colRef = collection(db, userId);
// let userData = [];
let watchedFilms = [];
let queueFilms = [];

// QUERIES
const watchedQuery = query(colRef, where('type', '==', 'watched'));
const queueQuery = query(colRef, where('type', '==', 'queue'));

// FILMS COLLECTIONS
function getWatchedFilms() {
  //   let watchedFilms = [];
  onSnapshot(watchedQuery, snapshot => {
    watchedFilms = []
    snapshot.docs.forEach(doc => {
      watchedFilms.push({ ...doc.data(), id: doc.id });
    });

    getRefs().watchedBtn.addEventListener('click', () => {
      processingStorage(watchedFilms, currentPage)
      console.log('Render');

    })
    console.log(watchedFilms);
    
    
  })

}

function getQueueFilms() {
  //   let queueFilms = [];
  onSnapshot(queueQuery, snapshot => {
    queueFilms = [];
    snapshot.docs.forEach(doc => {
      queueFilms.push({ ...doc.data(), id: doc.id });
    });
    console.log(queueFilms);
  });
}

// REAL TIME COLLECTION DATA
// function getUserData() {
//     let userData = [];
//   onSnapshot(colRef, snapshot => {
//     snapshot.docs.forEach(doc => {
//       userData.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(userData);
//     return userData;
//   })

// }

// ADD DOCUMENTS TO COLLECTION
function addFilmToFirebase(filmType, currentMovieInfo) {
  addDoc(colRef, {
    type: filmType,
    filmid: currentMovieInfo.id,
    original_title: currentMovieInfo.original_title, 
    release_date: currentMovieInfo.release_date, 
    poster_path: currentMovieInfo.poster_path, 
    genre_ids: currentMovieInfo.genre_ids, 
    vote_average: currentMovieInfo.vote_average,
    vote_count: currentMovieInfo.vote_count
  });
  // .then(() => {

  // })
}

// DELETING DOCUMENTS
function delFilmFromFirebase() {
  const docRef = doc(db, userId, 'dFct0oY6Cg3vilIBLo96');
  deleteDoc(docRef);
  // .then(() => {

  // })
}

export {
  addFilmToFirebase,
  delFilmFromFirebase,
  getWatchedFilms,
  getQueueFilms,
};


// function onWatchedBtnClick() {
//   if (getRefs().queueBtn.classList.contains('active-btn')) {
//     getRefs().queueBtn.classList.remove('active-btn');
//   }
//   getRefs().watchedBtn.classList.add('active-btn');

//   // container.innerHTML = '';

//   // getWatchinLocal();
// }

// function onQueueBtnClick() {
//   if (getRefs().watchedBtn.classList.contains('active-btn')) {
//     getRefs().watchedBtn.classList.remove('active-btn');
//   }
//   // container.innerHTML = '';
// }
