import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC2ym9cNY3r0Tms3_X1eqPx9mFWFuaOqjI',
  authDomain: 'crown-clothing-71268.firebaseapp.com',
  projectId: 'crown-clothing-71268',
  storageBucket: 'crown-clothing-71268.appspot.com',
  messagingSenderId: '246585212474',
  appId: '1:246585212474:web:48720eedc6fdc0acec3f03',
  measurementId: 'G-00MF4YRYQJ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;