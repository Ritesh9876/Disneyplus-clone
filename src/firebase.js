import  firebase from 'firebase/app'
import   'firebase/firebase-firestore'
import 'firebase/auth'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCkW6hxwSMBzyzTsXdg7838GokS3wdWgJk",
    authDomain: "disneyplus-clone-a791f.firebaseapp.com",
    projectId: "disneyplus-clone-a791f",
    storageBucket: "disneyplus-clone-a791f.appspot.com",
    messagingSenderId: "1068737923561",
    appId: "1:1068737923561:web:de35dcf058b85c12eee378",
    measurementId: "G-00Z9540P3B"
  };
  // Initialize Firebase

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth()
  const provider= new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export {auth,provider,storage};
  export default  db;