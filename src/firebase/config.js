import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDTREj1toFC-KweadiTwgpgfQ3rwes5HVY",
    authDomain: "vue-firebase-projects-a20b7.firebaseapp.com",
    projectId: "vue-firebase-projects-a20b7",
    storageBucket: "vue-firebase-projects-a20b7.appspot.com",
    messagingSenderId: "390752390773",
    appId: "1:390752390773:web:1af00583fed792881df23c"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp, projectAuth }