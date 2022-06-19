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

// let userId = '';

// import { userId } from './login';
let userId = 'izmMJHXqY6NJwC6a2MO5REctGrb2';

// GET COLLECTION REF
const colRef = collection(db, userId);
let watchedFilms = [];
let queueFilms = [];
// let userData = [];

// QUERIES
const watchedQuery = query(colRef, where('type', '==', 'watched'));
const queueQuery = query(colRef, where('type', '==', 'queue'));

// FILMS COLLECTIONS
function getWatchedFilms() {
  onSnapshot(watchedQuery, snapshot => {
    watchedFilms = [];
    snapshot.docs.forEach(doc => {
      watchedFilms.push({ ...doc.data(), id: doc.id });
    });
    console.log(watchedFilms);
  });

  return watchedFilms;
}

function getQueueFilms() {
  onSnapshot(queueQuery, snapshot => {
    queueFilms = [];
    snapshot.docs.forEach(doc => {
      queueFilms.push({ ...doc.data(), id: doc.id });
    });
    console.log(queueFilms);
  });

  return queueFilms;
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
    vote_count: currentMovieInfo.vote_count,
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
