import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCC9w1XDpzwPz05AYuQ2ZjRjm_vtlt3xDo",
  authDomain: "clone-6807d.firebaseapp.com",
  databaseURL: "https://clone-6807d-default-rtdb.firebaseio.com",
  projectId: "clone-6807d",
  storageBucket: "clone-6807d.appspot.com",
  messagingSenderId: "674114947292",
  appId: "1:674114947292:web:6147bc7c87d6f9a60b0c19",
  measurementId: "G-5730FMR3T9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
