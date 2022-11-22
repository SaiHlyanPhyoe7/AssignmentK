import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBaaj1VrZWZNW3mozIFohsRCOSr0W5V1gI",
    authDomain: "project-assignment-3789b.firebaseapp.com",
    projectId: "project-assignment-3789b",
    storageBucket: "project-assignment-3789b.appspot.com",
    messagingSenderId: "998575141078",
    appId: "1:998575141078:web:8cf649775a9ec4faffd977"
  };


  //init firebase
  initializeApp(firebaseConfig)

// init firestore
  const db = getFirestore()

  // init firebase auth
  const auth = getAuth()

  export {db,auth}