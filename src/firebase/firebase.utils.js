import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyAnXCg57_BkgEB8HPopuj1_zbgw1pa9eiA",
    authDomain: "wassabi-db2.firebaseapp.com",
    databaseURL: "https://wassabi-db2.firebaseio.com",
    projectId: "wassabi-db2",
    storageBucket: "wassabi-db2.appspot.com",
    messagingSenderId: "161971203611",
    appId: "1:161971203611:web:bd19b93eb6a4c2fd8a92be",
    measurementId: "G-0NDEK7SLBE"
  };

export const createUserProfileDocument = async (userAuth, additionData) => {
     if(!userAuth) return;

     const userRef = firestore.doc(`users/${userAuth.uid}`);

     const snapShot = await userRef.get();

     if(!snapShot.exists){
         const { displayName, email } = userAuth;
         const createdAt = new Date();

         try {
             await userRef.set({
                 displayName,
                 email,
                 createdAt,
                 ...additionData
             })
         } catch (error) {
             console.log('error creating user', error.message);
         }
     } 

     return userRef;
};

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;