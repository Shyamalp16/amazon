import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyABCQPi_mUKKq9CleXeVwp4fSnULQno1sc",
  authDomain: "clone-2496b.firebaseapp.com",
  databaseURL: "https://clone-2496b.firebaseio.com",
  projectId: "clone-2496b",
  storageBucket: "clone-2496b.appspot.com",
  messagingSenderId: "92341474672",
  appId: "1:92341474672:web:1a017ef019f89ea1daabb5",
  measurementId: "G-22LJJ8LS25"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };