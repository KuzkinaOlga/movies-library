import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { userId } from './login';

// GET COLLECTION REF
const colRef = collection(db, 'yds.center@gmail.com');
let userData = [];

// GET COLLECTION DATA
getDocs(colRef)
  .then(snapshot => {
    // let userData = [];
    snapshot.docs.forEach(doc => {
      userData.push({ ...doc.data(), id: doc.id });
    });
    console.log(userData);
    // return userData;
  })
  .catch(error => {
    console.log(error.message);
  });



// ADD DOCUMENTS TO COLLECTION
function addFilmToFirebase() {}

export { getDocs };