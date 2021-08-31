import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBy90Hij5J5nSpHlnyfnTcj2JGx61jiK8Q",
  authDomain: "disney-new.firebaseapp.com",
  projectId: "disney-new",
  storageBucket: "disney-new.appspot.com",
  messagingSenderId: "701558598801",
  appId: "1:701558598801:web:6d4c75dc81e34ca2662330"
};
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();

  const db = app.firestore();
  
  export {db};