import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBK7zXE4OVA_fd8HkL-lPuZLv2BwMcsHmQ",
    authDomain: "react-app-curso-3e94b.firebaseapp.com",
    projectId: "react-app-curso-3e94b",
    storageBucket: "react-app-curso-3e94b.appspot.com",
    messagingSenderId: "187653262824",
    appId: "1:187653262824:web:63ff037eaa268bd1bfa85d",
    measurementId: "G-MLLYT8KFML"
  };

  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}