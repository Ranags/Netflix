import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAUF_7HQr1MKxmZIqNcZUP3DokuCqXCkrY",
    authDomain: "netflix-clone-a05e5.firebaseapp.com",
    projectId: "netflix-clone-a05e5",
    storageBucket: "netflix-clone-a05e5.appspot.com",
    messagingSenderId: "679063067723",
    appId: "1:679063067723:web:e02951f96f913ef27f41ce"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig)
  const db = firebaseapp.firestore();
  const auth =firebase.auth(); 
  export { auth }
  export default db;