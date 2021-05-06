import firebase from 'firebase'
import 'firebase/database'

var firebaseConfig = {
  apiKey: 'AIzaSyDGGjuXlgHCLVIiO-j4RRQEyLgm7Y2jpoE',
  authDomain: 'twitter-clone-1e327.firebaseapp.com',
  projectId: 'twitter-clone-1e327',
  storageBucket: 'twitter-clone-1e327.appspot.com',
  messagingSenderId: '5916400801',
  appId: '1:5916400801:web:e2ac37ab9260a7f91664e0',
  measurementId: 'G-89D8914BS0'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

const db = firebase.firestore()

export default db
