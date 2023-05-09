import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import withFirebaseAuth from "react-with-firebase-auth"
import 'firebase/firestore';


// TODO: Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA2TwzuC1Kn0q1quDrOlEENk17gYB-SJoc",
  authDomain: "recipe-7e3e1.firebaseapp.com",
  projectId: "recipe-7e3e1",
  storageBucket: "recipe-7e3e1.appspot.com",
  messagingSenderId: "271522345402",
  appId: "1:271522345402:web:c6dd65ac5447cca73aed83"
};



const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

const providers = { googleProvider: new GoogleAuthProvider() }

const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth: auth,
})

const signInWithGoogle = () => {
  signInWithPopup(auth, providers.googleProvider)
}

const signOutFirebase = () => {
  signOut(auth)
}

export {
  db,
  auth,
  createComponentWithAuth,
  signInWithGoogle,
  signOutFirebase as signOut,
}
