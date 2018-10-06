import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAAPDVzz8lNfmHB9PSzpe3BLuRK2yV8qPA",
  authDomain: "catch-of-the-day-daniel-2bf4f.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-daniel-2bf4f.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;