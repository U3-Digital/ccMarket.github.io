import * as firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

const app = firebase.initializeApp({
  
    apiKey: 'YOUR_FIREBASE_APIKEY',
    authDomain:'YOUR_FIREBASE_AUTHDOMAIN',
    databaseURL: 'YOUR_FIREBASE_DATABASEURL',
    projectId: 'YOUR_FIREBASE_PROJECTID',
    storageBucket: 'YOUR_FIREBASE_STORAGEBUCKET',
    messagingSenderId: 'YOUR_FIREBASE_MESSAGING_SENDER_ID',
    appId:'YOUR_FIREBASE_APP_ID'

});

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new  firebase.auth.TwitterAuthProvider();
export const githubProvider = new  firebase.auth.GithubAuthProvider();
export const db =  firebase.firestore();

export default app;