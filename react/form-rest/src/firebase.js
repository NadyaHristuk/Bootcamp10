import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDgnRZwKLPMCkqTbSTbnILxwTKx6zEOA50",
  authDomain: "react-chat-bc10.firebaseapp.com",
  databaseURL: "https://react-chat-bc10.firebaseio.com",
  projectId: "react-chat-bc10",
  storageBucket: "react-chat-bc10.appspot.com",
  messagingSenderId: "448191400595",
  appId: "1:448191400595:web:b2d6137abcf33ebc"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
