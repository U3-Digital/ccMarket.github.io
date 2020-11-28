import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBZmJsAorxQmyX1MuJNCY6Eyvyf8OL5O1Q",
  authDomain: "ccmarket-2bd1b.firebaseapp.com",
  databaseURL: "https://ccmarket-2bd1b.firebaseio.com",
  projectId: "ccmarket-2bd1b",
  storageBucket: "ccmarket-2bd1b.appspot.com",
  messagingSenderId: "99742991650",
  appId: "1:99742991650:web:7f343012c6825af7e2d17b",
  measurementId: "G-6Q252T2JQT"
};

if (typeof window !== 'undefined' && !firebase.apps.length) {
firebase.initializeApp(firebaseConfig);

  if ('measurementId' in firebaseConfig)
    firebase.analytics();
}

export default firebase;
