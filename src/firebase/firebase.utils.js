import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDsiyg5v7VmB2B8LyIUZUwH2stBz-JSAbk",
    authDomain: "wassabi-db.firebaseapp.com",
    databaseURL: "https://wassabi-db.firebaseio.com",
    projectId: "wassabi-db",
    storageBucket: "wassabi-db.appspot.com",
    messagingSenderId: "427524114584",
    appId: "1:427524114584:web:f88d4192e64b43fd0a28ed",
    measurementId: "G-R42CJ700GY"
  }

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;