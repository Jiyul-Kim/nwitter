import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBYUXIaHVl_mssJ0TW4PbN6RRXB667hmPc",
    authDomain: "nwitter-6bcba.firebaseapp.com",
    projectId: "nwitter-6bcba",
    storageBucket: "nwitter-6bcba.appspot.com",
    messagingSenderId: "481946889892",
    appId: "1:481946889892:web:4de8045c5ce64dd8a08031"
  };


export default firebase.initializeApp(firebaseConfig);