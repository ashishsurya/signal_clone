import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUUFi22g8aDopEyh3Tj7V_HqkA9gqXHRU",
  authDomain: "signal-clone-2f8a1.firebaseapp.com",
  projectId: "signal-clone-2f8a1",
  storageBucket: "signal-clone-2f8a1.appspot.com",
  messagingSenderId: "707047999886",
  appId: "1:707047999886:web:cef3b38cee6da35af6bcdf",
  measurementId: "G-2W7CYMR8KQ",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };
