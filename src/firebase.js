
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

/**
 * 
 * 3
 * 
 * https://stackoverflow.com/questions/64545862/upgrade-to-firebase-js-8-0-0-attempted-import-error-app-is-not-exported-from/64545863

try using this for firebase 9 above

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
or you can read more on: https://firebase.google.com/docs/web/modular-upgrade

 */

// firebase config from below link
// https://console.firebase.google.com/project/ikbhal-cb53f/settings/general/web:YmM4ODExMDktNzMzZi00NzExLTljY2QtN2EyMmNmOWE5ZTNm

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqJyBoPLXy4CpotZPOsSKjK4rKJTCAbgE",
    authDomain: "ikbhal-cb53f.firebaseapp.com",
    projectId: "ikbhal-cb53f",
    storageBucket: "ikbhal-cb53f.appspot.com",
    messagingSenderId: "839053098923",
    appId: "1:839053098923:web:d96c4df68fc216fa189cee",
    measurementId: "G-BNYMN6KNXP"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();