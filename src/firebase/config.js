import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBUl2Zr2lgEtMwvAK5b71RNB56008gCqpo",
  authDomain: "fir-35247.firebaseapp.com",
  projectId: "fir-35247",
  storageBucket: "fir-35247.appspot.com",
  messagingSenderId: "962515384160",
  appId: "1:962515384160:web:bd27d897902ef85ab9d005",
  measurementId: "G-M8NL3JW46Q"
};

  export default firebase.initializeApp(firebaseConfig)