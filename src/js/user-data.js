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
const userId = 'izmMJHXqY6NJwC6a2MO5REctGrb2';

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
    snapshot.docs.forEach(doc => {
      watchedFilms.push({ ...doc.data(), id: doc.id });
    });
    console.log(watchedFilms);
  })
}

function getQueueFilms() {
  //   let queueFilms = [];
  onSnapshot(queueQuery, snapshot => {
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
function addFilmToFirebase(filmType, filmId) {
  addDoc(colRef, {
    type: filmType,
    filmid: filmId,
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
