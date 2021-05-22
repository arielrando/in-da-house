import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBO-IUpZSe2mRoGkaUAyquhPt4aOngR9r8",
    authDomain: "in-da-house-coderhouse.firebaseapp.com",
    projectId: "in-da-house-coderhouse",
    storageBucket: "in-da-house-coderhouse.appspot.com",
    messagingSenderId: "564104854155",
    appId: "1:564104854155:web:8a647aa40a4880d04e728e"
  });

  export function getFirebase() {
      return app;
  }

  export function getFirestore() {
      return firebase.firestore(app);
  }