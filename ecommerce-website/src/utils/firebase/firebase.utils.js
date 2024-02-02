import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi1_X8GLIsjN-wcgnq_mV8abKUKv_NHAw",
  authDomain: "thread-clothes-db.firebaseapp.com",
  projectId: "thread-clothes-db",
  storageBucket: "thread-clothes-db.appspot.com",
  messagingSenderId: "453377209718",
  appId: "1:453377209718:web:3f0f4d1d6840f1b461f657",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  // if user data does not exist
  if (!userSnapshot.exists()) {
    //  create / set document with the data from userAuth from collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //  create / set document with the data from userAuth from collection
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  // if user data exists, return userDocRef
  return userDocRef;
};
