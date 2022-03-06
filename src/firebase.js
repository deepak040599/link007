import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
    apiKey: "AIzaSyDkphCyU2sMw1JL3zTxUScVLIus_RsA3yM",
    authDomain: "linkedin-yt-d5c1c.firebaseapp.com",
    projectId: "linkedin-yt-d5c1c",
    storageBucket: "linkedin-yt-d5c1c.appspot.com",
    messagingSenderId: "663781854793",
    appId: "1:663781854793:web:7477c5be02a32665f23998"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  

  export  { db,auth };
