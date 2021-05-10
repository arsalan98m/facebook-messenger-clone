import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDnHnUbNjuyFhH9LRLaGmc3KtghhAefo5I",
  authDomain: "facebook-messenger-clone-61bc2.firebaseapp.com",
  projectId: "facebook-messenger-clone-61bc2",
  storageBucket: "facebook-messenger-clone-61bc2.appspot.com",
  messagingSenderId: "586915246915",
  appId: "1:586915246915:web:4ab90cfdce0c112a86b5f6",
  measurementId: "G-F2EYD9C12B",
});

const db = firebaseApp.firestore();

export { db };
