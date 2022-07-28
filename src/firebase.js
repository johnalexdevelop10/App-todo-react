import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB7XikMgqJ071ua65XfpqvU3OMxtZdWWwc",
    authDomain: "udemy-peruano.firebaseapp.com",
    projectId: "udemy-peruano",
    storageBucket: "udemy-peruano.appspot.com",
    messagingSenderId: "529042038189",
    appId: "1:529042038189:web:612fbdc8d042c528369524"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}